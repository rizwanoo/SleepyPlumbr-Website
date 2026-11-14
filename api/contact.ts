import type { IncomingMessage, ServerResponse } from 'node:http';
import { processContactInquiry } from '../lib/contactSecurity';

interface VercelIncomingMessage extends IncomingMessage {
  body?: unknown;
}

async function readBody(req: VercelIncomingMessage): Promise<unknown> {
  if (req.body !== undefined) return req.body;
  const chunks: Buffer[] = [];
  for await (const chunk of req) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }
  const raw = Buffer.concat(chunks).toString('utf8');
  if (!raw) return {};
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export default async function handler(req: VercelIncomingMessage, res: ServerResponse) {
  res.setHeader('Content-Type', 'application/json');

  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.end(JSON.stringify({ ok: false, error: 'Method not allowed.' }));
    return;
  }

  const body = await readBody(req);
  const forwarded = req.headers['x-forwarded-for'];
  const clientIp =
    (Array.isArray(forwarded) ? forwarded[0] : forwarded?.split(',')[0])?.trim() ||
    req.socket?.remoteAddress ||
    'unknown';

  const result = await processContactInquiry(body, req.headers['x-csrf-token'], clientIp);
  res.statusCode = result.status;
  res.end(JSON.stringify(result.body));
}
