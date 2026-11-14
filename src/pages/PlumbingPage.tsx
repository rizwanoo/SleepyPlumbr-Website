import { useRef } from 'react';
import { ArrowRight, MapPin, Check } from 'lucide-react';
import { BRAND_PROFILE, DIAGNOSTIC_PILLARS } from '../data/sleepyplumbrData';
import { useGsapReveal } from '../hooks/useGsapReveal';
import { ResilientImage } from '../components/ResilientImage';
import { ContactInquiryForm } from '../components/ContactInquiryForm';
import type { AppRoute } from '../components/Navbar';

interface PlumbingPageProps {
  onNavigate: (path: AppRoute, hash?: string) => void;
}

export function PlumbingPage({ onNavigate }: PlumbingPageProps) {
  const pageRef = useRef<HTMLDivElement>(null);
  useGsapReveal(pageRef, 'plumbing');

  return (
    <div ref={pageRef} className="overflow-x-clip">
      {/* 1. UNTINTED EDITORIAL SPLIT DIAGNOSTICS HERO — Zero overlay tint over header or photo */}
      <section className="relative pt-32 sm:pt-36 pb-16 sm:pb-20 bg-[#FFFDF7] text-[#132230] overflow-hidden">
        <div className="mx-auto max-w-[1380px] w-full px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6 space-y-6 min-w-0">
              <div className="gsap-hero inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#2563D9]">
                <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>Columbia, Missouri · Master Plumber</span>
              </div>

              <h1 className="gsap-hero font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.04] tracking-tight text-[#0F4378]">
                Service &amp; Diagnostics
              </h1>

              <p className="gsap-hero text-base sm:text-lg lg:text-xl leading-relaxed text-[#34414B]">
                Diagnosing what is actually happening inside residential water, drain, gas, and
                water-treatment systems—built around transparent walkthroughs and long-term fixes.
              </p>

              <div className="gsap-hero flex flex-wrap gap-x-8 gap-y-4 pt-2">
                <a href="#inquiry" className="cta-borderless text-[#2563D9] hover:text-[#0F4378]">
                  COLUMBIA, MO INQUIRY FORM
                  <ArrowRight className="h-4 w-4 cta-arrow" aria-hidden="true" />
                </a>
                <a
                  href="/education"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/education');
                  }}
                  className="cta-borderless text-[#0F4378] hover:text-[#16B8A9]"
                >
                  WATCH DIAGNOSTIC VIDEOS
                  <ArrowRight className="h-4 w-4 cta-arrow" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 gsap-hero">
              <div className="aspect-[16/10] w-full overflow-hidden">
                <ResilientImage
                  src={BRAND_PROFILE.diagnosticsBackdrop}
                  alt="Modern residential tankless water heater and three-stage water filtration assembly"
                  loading="eager"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SCOPE CLARITY: EDUCATION VS. COLUMBIA LOCAL SERVICE (Ice Blue #E9F3FF) */}
      <section className="bg-[#E9F3FF] py-16 lg:py-20">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 gsap-reveal">
            <div className="space-y-3 pb-6 lg:pb-0 border-b lg:border-b-0 lg:border-r border-[#2563D9]/20 lg:pr-12">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-[#2563D9]">
                Local Residential Focus
              </div>
              <h2 className="font-display text-3xl font-bold text-[#132230]">
                Columbia, Missouri Service Inquiries
              </h2>
              <p className="text-base leading-relaxed text-[#34414B]">
                Local diagnostic requests and service inquiries apply strictly to homeowners in
                Columbia, Missouri. Because every mechanical issue depends on field inspection, this
                site does not publish flat-rate guesses, promise emergency dispatch, or offer
                automated instant booking slots.
              </p>
            </div>

            <div className="space-y-3">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-[#0E8378]">
                Worldwide Learning
              </div>
              <h2 className="font-display text-3xl font-bold text-[#132230]">
                Educational Content for Everyone Else
              </h2>
              <p className="text-base leading-relaxed text-[#34414B]">
                Outside Mid-Missouri, Josh shares diagnostic principles, valve &amp; filtration
                breakdowns, and field demonstrations openly on YouTube, Instagram, and{' '}
                <em>That Plumbing Podcast</em> so homeowners and plumbers everywhere can sharpen how
                they think about plumbing systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SIX VERIFIED DIAGNOSTIC AREAS — Editorial Numbered Rows, Zero Cards (Warm Ivory) */}
      <section id="methodology" className="bg-[#FFFDF7] py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-4 pb-12 border-b border-[#34414B]/15 gsap-reveal">
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2563D9]">
              Verified Field Focus
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#132230]">
              How SleepyPlumbr approaches residential plumbing diagnostics.
            </h2>
          </div>

          <div className="divide-y divide-[#34414B]/15">
            {DIAGNOSTIC_PILLARS.map((pillar) => (
              <article
                key={pillar.number}
                className="gsap-reveal py-10 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-start"
              >
                <div className="lg:col-span-2">
                  <span className="font-display text-4xl font-extrabold text-[#2563D9] tabular-nums">
                    {pillar.number}.
                  </span>
                </div>

                <div className="lg:col-span-4 space-y-2">
                  <div className="text-xs font-semibold uppercase tracking-[0.12em] text-[#16B8A9]">
                    {pillar.audienceLabel}
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[#132230]">
                    {pillar.title}
                  </h3>
                </div>

                <div className="lg:col-span-6 space-y-3">
                  <p className="text-base leading-relaxed text-[#34414B]">{pillar.description}</p>
                  <p className="text-sm font-semibold text-[#0F4378]">
                    Field Principle: {pillar.fieldTakeaway}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FIELD WORK ETHIC SPLIT — Soft Mint (#E7F5EF) */}
      <section className="bg-[#E7F5EF] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center gsap-reveal">
            <div className="lg:col-span-5">
              <div className="aspect-[3/4] w-full max-w-[420px] mx-auto lg:mx-0 overflow-hidden">
                <ResilientImage
                  src={BRAND_PROFILE.portraitSoftenerHands}
                  alt="Josh servicing a residential water softener stack assembly by hand"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0E8378]">
                Homeowner Expectations
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#132230]">
                What clear residential diagnostics should feel like.
              </h2>
              <ul className="space-y-4 pt-2 text-base text-[#34414B]">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[#16B8A9] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>
                    <strong>Respect for your home:</strong> ShuBee® shoe covers and clean jobsite
                    habits from entry to cleanup.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[#16B8A9] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>
                    <strong>Plain-language explanations:</strong> You see the failing component,
                    understand why it failed, and hear honest repair paths.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-[#16B8A9] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>
                    <strong>Prevention mindset:</strong> Addressing upstream water quality,
                    pressure, and valve placement so the next repair isn’t right around the corner.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. COLUMBIA, MO SERVICE & DIAGNOSTICS INQUIRY FORM (Warm Ivory #FFFDF7 — Open Underline Inputs) */}
      <section id="inquiry" className="bg-[#FFFDF7] py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 gsap-reveal">
            <div className="lg:col-span-4 space-y-5">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2563D9]">
                Direct Inquiry · Columbia, MO
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#132230]">
                Request a Service or Diagnostic Conversation
              </h2>
              <p className="text-base leading-relaxed text-[#34414B]">
                Homeowners in the verified Columbia, Missouri area can submit system details here.
                All submissions undergo server-side validation, input sanitization, and CSRF
                protection.
              </p>
              <div className="pt-4 border-t border-[#34414B]/15 text-sm text-[#34414B]/85 space-y-2">
                <p>
                  <strong>Service Location:</strong> Columbia, Missouri, USA
                </p>
                <p>
                  <strong>Important Note:</strong> Submitting this form initiates an inquiry and
                  does not guarantee immediate scheduling or emergency response.
                </p>
              </div>
            </div>

            <div className="lg:col-span-8 min-w-0">
              <ContactInquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
