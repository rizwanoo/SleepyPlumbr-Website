import crypto from 'node:crypto';

const CSRF_SECRET = process.env.CSRF_SECRET || crypto.randomBytes(32).toString('hex');
const TOKEN_TTL_MS = 1000 * 60 * 60 * 2; // 2 hours
const RATE_WINDOW_MS = 1000 * 60 * 15; // 15 minutes
const RATE_MAX_REQUESTS = 8;

interface RateRecord {
  count: number;
  resetAt: number;
}

const rateLimits = new Map<string, RateRecord>();

export function sanitizeText(value: unknown, maxLength: number): string {
  if (typeof value !== 'string') return '';
  return value
    .replace(/[\u0000-\u001F\u007F]/g, ' ')
    .replace(/[<>]/g, '')
    .trim()
    .slice(0, maxLength);
}

export function createCsrfToken(): string {
  const issuedAt = Date.now().toString(36);
  const nonce = crypto.randomBytes(16).toString('hex');
  const payload = `${issuedAt}.${nonce}`;
  const sig = crypto.createHmac('sha256', CSRF_SECRET).update(payload).digest('hex');
  return `${payload}.${sig}`;
}

export function verifyCsrfToken(token: unknown): boolean {
  if (typeof token !== 'string') return false;
  const parts = token.split('.');
  if (parts.length !== 3) return false;
  const [issuedAtStr, nonce, providedSig] = parts;
  if (!issuedAtStr || !nonce || !providedSig) return false;

  const issuedAt = Number.parseInt(issuedAtStr, 36);
  if (Number.isNaN(issuedAt) || Date.now() - issuedAt > TOKEN_TTL_MS || issuedAt > Date.now() + 60_000) {
    return false;
  }

  const payload = `${issuedAtStr}.${nonce}`;
  const expectedSig = crypto.createHmac('sha256', CSRF_SECRET).update(payload).digest('hex');
  const a = Buffer.from(providedSig, 'utf8');
  const b = Buffer.from(expectedSig, 'utf8');
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(a, b);
}

export function checkRateLimit(clientKey: string): boolean {
  const now = Date.now();
  const record = rateLimits.get(clientKey);
  if (!record || now > record.resetAt) {
    rateLimits.set(clientKey, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return true;
  }
  if (record.count >= RATE_MAX_REQUESTS) {
    return false;
  }
  record.count += 1;
  return true;
}

export interface ContactProcessResult {
  status: number;
  body: Record<string, unknown>;
}

export async function processContactInquiry(
  rawBody: unknown,
  csrfHeader: string | string[] | undefined,
  clientIp: string
): Promise<ContactProcessResult> {
  if (!checkRateLimit(clientIp)) {
    return {
      status: 429,
      body: {
        ok: false,
        error: 'Too many inquiries submitted recently. Please wait a few minutes before trying again.',
      },
    };
  }

  const body = rawBody as Record<string, unknown> | undefined;
  if (!body || typeof body !== 'object') {
    return { status: 400, body: { ok: false, error: 'Invalid request payload.' } };
  }

  const headerToken = Array.isArray(csrfHeader) ? csrfHeader[0] : csrfHeader;
  const csrfToken = headerToken || body._csrf;
  if (!verifyCsrfToken(csrfToken)) {
    return {
      status: 403,
      body: {
        ok: false,
        error: 'Security token expired or invalid. Please refresh and submit again.',
      },
    };
  }

  const honeypot = sanitizeText(body.companyWebsite, 120);
  if (honeypot.length > 0) {
    return {
      status: 200,
      body: {
        ok: true,
        referenceId: `SP-${crypto.randomBytes(3).toString('hex').toUpperCase()}`,
        message: 'Inquiry received.',
      },
    };
  }

  const name = sanitizeText(body.name, 100);
  const email = sanitizeText(body.email, 160);
  const phone = sanitizeText(body.phone, 40);
  const location = sanitizeText(body.location, 120);
  const inquiryType = sanitizeText(body.inquiryType, 80);
  const systemTopic = sanitizeText(body.systemTopic, 120);
  const message = sanitizeText(body.message, 2000);

  const errors: Record<string, string> = {};
  if (name.length < 2) {
    errors.name = 'Please enter your name.';
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!emailPattern.test(email)) {
    errors.email = 'Please provide a valid email address.';
  }
  if (phone && phone.replace(/[^0-9]/g, '').length < 7) {
    errors.phone = 'If providing a phone number, please include at least 7 digits.';
  }
  if (!location) {
    errors.location = 'Please specify your city or area (e.g., Columbia, MO).';
  }
  if (message.length < 12) {
    errors.message =
      'Please share a brief description of your plumbing system or question (at least 12 characters).';
  }

  if (Object.keys(errors).length > 0) {
    return {
      status: 422,
      body: {
        ok: false,
        error: 'Please check the highlighted fields below.',
        fieldErrors: errors,
      },
    };
  }

  const referenceId = `SP-${Date.now().toString(36).toUpperCase().slice(-5)}`;
  const inquiryPayload = {
    referenceId,
    receivedAt: new Date().toISOString(),
    name,
    email,
    phone,
    location,
    inquiryType: inquiryType || 'Columbia, MO Diagnostic Inquiry',
    systemTopic: systemTopic || 'General System Diagnostics',
    message,
  };

  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(inquiryPayload),
      });
    } catch (err) {
      console.error('[SleepyPlumbr Contact] Webhook delivery failed:', err);
    }
  } else {
    console.info('[SleepyPlumbr Contact] Validated inquiry logged:', {
      referenceId: inquiryPayload.referenceId,
      location: inquiryPayload.location,
      inquiryType: inquiryPayload.inquiryType,
      systemTopic: inquiryPayload.systemTopic,
    });
  }

  return {
    status: 200,
    body: {
      ok: true,
      referenceId,
      message:
        'Thank you — your message has been validated and recorded. Note that service diagnostics inquiries are for the Columbia, Missouri area, and this form does not confirm emergency dispatch or an appointment slot until Josh follows up directly.',
    },
  };
}
