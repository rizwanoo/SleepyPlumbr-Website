import { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

interface FieldErrors {
  name?: string;
  email?: string;
  phone?: string;
  location?: string;
  message?: string;
}

export function ContactInquiryForm() {
  const [csrfToken, setCsrfToken] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('Columbia, MO');
  const [inquiryType, setInquiryType] = useState('Columbia, MO Service & Diagnostics Inquiry');
  const [systemTopic, setSystemTopic] = useState('Water Treatment / Tankless Water Heater');
  const [message, setMessage] = useState('');
  const [companyWebsite, setCompanyWebsite] = useState(''); // Honeypot

  const [submitting, setSubmitting] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState('');
  const [confirmation, setConfirmation] = useState<{ referenceId: string; message: string } | null>(
    null
  );

  const loadToken = async () => {
    try {
      const res = await fetch('/api/csrf-token');
      if (res.ok) {
        const data = (await res.json()) as { csrfToken?: string };
        if (data.csrfToken) setCsrfToken(data.csrfToken);
      }
    } catch {
      // Token will be retried on submit if needed
    }
  };

  useEffect(() => {
    void loadToken();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFieldErrors({});
    setFormError('');

    let activeToken = csrfToken;
    if (!activeToken) {
      try {
        const tokenRes = await fetch('/api/csrf-token');
        const tokenData = (await tokenRes.json()) as { csrfToken?: string };
        activeToken = tokenData.csrfToken || '';
        setCsrfToken(activeToken);
      } catch {
        setFormError('Unable to reach verification service. Please try again in a moment.');
        return;
      }
    }

    setSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': activeToken,
        },
        body: JSON.stringify({
          _csrf: activeToken,
          name,
          email,
          phone,
          location,
          inquiryType,
          systemTopic,
          message,
          companyWebsite,
        }),
      });

      const data = (await res.json()) as {
        ok?: boolean;
        referenceId?: string;
        message?: string;
        error?: string;
        fieldErrors?: FieldErrors;
      };

      if (!res.ok || !data.ok) {
        if (data.fieldErrors) setFieldErrors(data.fieldErrors);
        setFormError(data.error || 'Unable to submit inquiry. Please verify your entries.');
        if (res.status === 403) {
          void loadToken();
        }
        return;
      }

      setConfirmation({
        referenceId: data.referenceId || 'SUBMITTED',
        message: data.message || 'Thank you. Your inquiry has been received.',
      });
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      void loadToken();
    } catch {
      setFormError('Network error while submitting your inquiry. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (confirmation) {
    return (
      <div className="py-8 border-t border-[#16B8A9]/40">
        <div className="flex items-start gap-4">
          <CheckCircle2 className="h-7 w-7 text-[#16B8A9] shrink-0 mt-0.5" aria-hidden="true" />
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-[0.14em] text-[#16B8A9]">
              Inquiry Validated · Reference {confirmation.referenceId}
            </div>
            <h3 className="font-display text-2xl font-bold text-[#132230]">
              Message Received
            </h3>
            <p className="max-w-xl text-base leading-relaxed text-[#34414B]">
              {confirmation.message}
            </p>
            <button
              type="button"
              onClick={() => setConfirmation(null)}
              className="cta-borderless text-[#2563D9]"
            >
              SEND ANOTHER INQUIRY
              <ArrowRight className="h-4 w-4 cta-arrow" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-8">
      {/* Honeypot anti-spam input hidden from assistive & visual users */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="companyWebsite">Company Website</label>
        <input
          id="companyWebsite"
          name="companyWebsite"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={companyWebsite}
          onChange={(e) => setCompanyWebsite(e.target.value)}
        />
      </div>

      {formError && (
        <div
          role="alert"
          className="flex items-start gap-3 py-3 border-b border-[#C83E2B]/40 text-sm font-medium text-[#9F2B1C]"
        >
          <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" aria-hidden="true" />
          <span>{formError}</span>
        </div>
      )}

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contact-name"
            className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#0F4378]"
          >
            Full Name *
          </label>
          <input
            id="contact-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="input-editorial"
          />
          {fieldErrors.name && (
            <p className="mt-1.5 text-xs font-medium text-[#B42318]">{fieldErrors.name}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#0F4378]"
          >
            Email Address *
          </label>
          <input
            id="contact-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="input-editorial"
          />
          {fieldErrors.email && (
            <p className="mt-1.5 text-xs font-medium text-[#B42318]">{fieldErrors.email}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contact-phone"
            className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#0F4378]"
          >
            Phone Number (Optional)
          </label>
          <input
            id="contact-phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="(573) 000-0000"
            className="input-editorial"
          />
          {fieldErrors.phone && (
            <p className="mt-1.5 text-xs font-medium text-[#B42318]">{fieldErrors.phone}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="contact-location"
            className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#0F4378]"
          >
            City / Area *
          </label>
          <input
            id="contact-location"
            type="text"
            required
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Columbia, MO"
            className="input-editorial"
          />
          {fieldErrors.location && (
            <p className="mt-1.5 text-xs font-medium text-[#B42318]">{fieldErrors.location}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contact-type"
            className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#0F4378]"
          >
            Inquiry Scope
          </label>
          <select
            id="contact-type"
            value={inquiryType}
            onChange={(e) => setInquiryType(e.target.value)}
            className="input-editorial"
          >
            <option value="Columbia, MO Service & Diagnostics Inquiry">
              Columbia, MO Service &amp; Diagnostics Inquiry
            </option>
            <option value="Homeowner System Question (Educational)">
              Homeowner System Question (Educational)
            </option>
            <option value="Plumbing Training / Trade Collaboration">
              Plumbing Training / Trade Collaboration
            </option>
            <option value="Podcast / Media Inquiry">Podcast / Media Inquiry</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="contact-topic"
            className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#0F4378]"
          >
            System Focus
          </label>
          <select
            id="contact-topic"
            value={systemTopic}
            onChange={(e) => setSystemTopic(e.target.value)}
            className="input-editorial"
          >
            <option value="Water Treatment / Tankless Water Heater">
              Water Treatment / Tankless Water Heater
            </option>
            <option value="Water Filtration / Water Softener">
              Water Filtration / Water Softener
            </option>
            <option value="Faucet, Valve, or Leak Diagnostics">
              Faucet, Valve, or Leak Diagnostics
            </option>
            <option value="Apprenticeship / Plumbing Education">
              Apprenticeship / Plumbing Education
            </option>
            <option value="Other Plumbing System Question">Other Plumbing System Question</option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="block text-xs font-semibold uppercase tracking-[0.12em] text-[#0F4378]"
        >
          Describe Your System or Question *
        </label>
        <textarea
          id="contact-message"
          rows={4}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Share symptoms, equipment details, or what you would like to understand..."
          className="input-editorial resize-y"
        />
        {fieldErrors.message && (
          <p className="mt-1.5 text-xs font-medium text-[#B42318]">{fieldErrors.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between pt-2">
        <button
          type="submit"
          disabled={submitting}
          className="cta-borderless text-[#2563D9] hover:text-[#0F4378] disabled:opacity-60"
        >
          {submitting ? 'VALIDATING & SENDING...' : 'SUBMIT DIAGNOSTIC INQUIRY'}
          <ArrowRight className="h-4 w-4 cta-arrow" aria-hidden="true" />
        </button>

        <span className="text-xs text-[#34414B]/75">
          Local service inquiries apply strictly to Columbia, Missouri. No emergency dispatch promised.
        </span>
      </div>
    </form>
  );
}
