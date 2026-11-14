import { useRef, useState } from 'react';
import { ArrowRight, ArrowUpRight, Play, MapPin, ShieldCheck, Mic } from 'lucide-react';
import {
  BRAND_PROFILE,
  FEATURED_VIDEOS,
  MERCH_PRODUCTS,
  PODCAST_FEATURE,
} from '../data/sleepyplumbrData';
import { useGsapReveal } from '../hooks/useGsapReveal';
import { ResilientImage } from '../components/ResilientImage';
import type { AppRoute } from '../components/Navbar';

interface HomePageProps {
  onNavigate: (path: AppRoute, hash?: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const pageRef = useRef<HTMLDivElement>(null);
  const [activeVideoId, setActiveVideoId] = useState<string>(FEATURED_VIDEOS[0].youtubeId);
  useGsapReveal(pageRef, 'home');

  const activeVideo =
    FEATURED_VIDEOS.find((v) => v.youtubeId === activeVideoId) || FEATURED_VIDEOS[0];

  return (
    <div ref={pageRef} className="overflow-x-clip">
      {/* 1. FULL-BLEED HD HERO — Visible behind header & navbar on mobile, tablet, and desktop */}
      <section className="relative bg-[#FAF6EE] text-[#132230] min-h-[92vh] lg:min-h-[88vh] flex items-end lg:items-center pt-56 sm:pt-72 lg:pt-36 pb-12 sm:pb-16 lg:pb-24 overflow-hidden">
        {/* Full-Bleed Untinted HD Background across ALL screen sizes */}
        <div className="absolute inset-0 overflow-hidden">
          <ResilientImage
            src={BRAND_PROFILE.heroBackdrop}
            alt="Josh JB Burleson (SleepyPlumbr) tightening a brass fitting on a copper plumbing manifold with a pipe wrench"
            loading="eager"
            className="gsap-parallax h-[110%] w-full object-cover object-[76%_top] sm:object-[72%_top] lg:object-right -top-[5%] relative"
          />
          {/* Mobile/Tablet bottom-only fade so Josh & pipes stay crisp behind header/navbar while bottom copy reads clearly; zero overlay on desktop */}
          <div
            className="lg:hidden absolute inset-0 bg-gradient-to-t from-[#FAF6EE] via-[#FAF6EE]/82 via-42% to-transparent"
            aria-hidden="true"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-[1380px] w-full px-5 sm:px-8 lg:px-12">
          <div className="max-w-xl lg:max-w-[560px] space-y-5 sm:space-y-6">
            <div className="gsap-hero flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#2563D9]">
              <span>Josh JB Burleson</span>
              <span aria-hidden="true">·</span>
              <span>Master Plumber</span>
              <span aria-hidden="true">·</span>
              <span>Columbia, Missouri</span>
            </div>

            <h1 className="gsap-hero font-display text-4xl sm:text-5xl lg:text-[4.25rem] font-extrabold leading-[1.03] tracking-tight text-[#0F4378]">
              More Than Plumbing.
              <br />
              <span className="text-[#2563D9]">Knowledge That Flows.</span>
            </h1>

            <p className="gsap-hero text-base sm:text-lg lg:text-xl leading-relaxed text-[#34414B] font-normal">
              Master Plumber. Industry educator. Sharing real-world plumbing diagnostics and field
              craft to help homeowners understand their systems and plumbers sharpen their skills.
            </p>

            <div className="gsap-hero flex flex-wrap items-center gap-x-8 gap-y-4 pt-2">
              <a
                href="/education"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/education');
                }}
                className="cta-borderless text-[#2563D9] hover:text-[#0F4378]"
              >
                EXPLORE PLUMBING EDUCATION
                <ArrowRight className="h-4 w-4 cta-arrow" aria-hidden="true" />
              </a>

              <a
                href="/about"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/about');
                }}
                className="cta-borderless text-[#0F4378] hover:text-[#16B8A9]"
              >
                DISCOVER SLEEPYPLUMBR
                <ArrowRight className="h-4 w-4 cta-arrow" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PERSONAL BRAND INTRODUCTION & MASTER PLUMBER POSITIONING (Warm Ivory #FFFDF7) */}
      <section className="bg-[#FFFDF7] py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5 gsap-reveal">
              <div className="aspect-[3/4] w-full max-w-[440px] mx-auto lg:mx-0 overflow-hidden">
                <ResilientImage
                  src={BRAND_PROFILE.portraitVan}
                  alt="Josh JB Burleson inside his plumbing service truck filming Lunchtime diagnostics"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 gsap-reveal min-w-0">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2563D9]">
                Personal Brand &amp; Trade Craft
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.08] text-[#132230]">
                A working Master Plumber putting education ahead of sales pressure.
              </h2>

              <p className="text-base sm:text-lg leading-relaxed text-[#34414B]">
                SleepyPlumbr is the personal platform of <strong>Josh JB Burleson</strong>—a
                licensed Master Plumber and service &amp; diagnostics specialist based in Columbia,
                Missouri. Every day in the field, Josh breaks down what actually happens inside
                residential plumbing systems in plain American English.
              </p>

              <p className="text-base leading-relaxed text-[#34414B]/90">
                Instead of hiding technical reasoning behind jargon or high-pressure sales scripts,
                his work centers on <em>Education Over Persuasion</em>: giving homeowners the clarity
                to make confident decisions, while helping fellow plumbers and apprentices build
                cleaner diagnostic habits.
              </p>

              {/* Unboxed Editorial Identity Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-6 border-t border-[#34414B]/15">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.12em] text-[#2563D9]">
                    Credentials
                  </div>
                  <div className="mt-1.5 font-display text-xl font-bold text-[#132230]">
                    Master Plumber
                  </div>
                  <div className="mt-1 text-sm text-[#34414B]/80">
                    Service &amp; Diagnostics Focus
                  </div>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.12em] text-[#16B8A9]">
                    Home Base
                  </div>
                  <div className="mt-1.5 font-display text-xl font-bold text-[#132230]">
                    Columbia, MO
                  </div>
                  <div className="mt-1 text-sm text-[#34414B]/80">
                    Mid-Missouri Residential Service
                  </div>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.12em] text-[#F29A38]">
                    Mission
                  </div>
                  <div className="mt-1.5 font-display text-xl font-bold text-[#132230]">
                    Dual Education
                  </div>
                  <div className="mt-1 text-sm text-[#34414B]/80">
                    Homeowners &amp; Trade Pros
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DUAL AUDIENCE SPLIT — Ice Blue (#E9F3FF) & Soft Mint (#E7F5EF) Edge-to-Edge */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        {/* Homeowner Education Track */}
        <div className="bg-[#E9F3FF] px-5 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-28 flex flex-col justify-between gsap-reveal">
          <div className="max-w-xl space-y-6">
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2563D9]">
              01 · For Homeowners
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight text-[#132230]">
              Understand your home’s plumbing before a wrench ever turns.
            </h2>
            <p className="text-base leading-relaxed text-[#34414B]">
              Learn how water treatment protects tankless water heaters, how shutoff valves and
              faucet cartridges behave when they wear out, and what questions to ask so you never
              feel pressured into guesswork repairs.
            </p>
            <ul className="space-y-3 pt-2 text-sm font-medium text-[#132230]">
              <li className="py-2 border-b border-[#2563D9]/15">
                Tankless scaling &amp; water softener maintenance fundamentals
              </li>
              <li className="py-2 border-b border-[#2563D9]/15">
                How to spot leaking cartridges vs. failing angle stops
              </li>
              <li className="py-2 border-b border-[#2563D9]/15">
                Whole-home water filtration &amp; PFAS awareness
              </li>
            </ul>
          </div>
          <div className="pt-8">
            <a
              href="/education#homeowners"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/education', 'homeowners');
              }}
              className="cta-borderless text-[#2563D9] hover:text-[#0F4378]"
            >
              HOMEOWNER GUIDES
              <ArrowRight className="h-4 w-4 cta-arrow" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Plumbers & Apprentices Track */}
        <div className="bg-[#E7F5EF] px-5 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-28 flex flex-col justify-between gsap-reveal">
          <div className="max-w-xl space-y-6">
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0E8378]">
              02 · For Plumbing Professionals
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight text-[#132230]">
              Sharper field diagnostics, cleaner craft, stronger communication.
            </h2>
            <p className="text-base leading-relaxed text-[#34414B]">
              From clean PVC priming discipline and Sterling softener stack replacements to
              first-30-day apprentice standards and service truck mindset, Josh shares real field
              takeaways built for working plumbers.
            </p>
            <ul className="space-y-3 pt-2 text-sm font-medium text-[#132230]">
              <li className="py-2 border-b border-[#16B8A9]/25">
                Root-cause diagnostic thinking over parts-cannon guessing
              </li>
              <li className="py-2 border-b border-[#16B8A9]/25">
                Apprenticeship coaching, mindset, and career longevity
              </li>
              <li className="py-2 border-b border-[#16B8A9]/25">
                Practical field tool setups verified in real service calls
              </li>
            </ul>
          </div>
          <div className="pt-8">
            <a
              href="/education#plumbers"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/education', 'plumbers');
              }}
              className="cta-borderless text-[#0E8378] hover:text-[#0F4378]"
            >
              PLUMBER TRAINING &amp; FIELD NOTES
              <ArrowRight className="h-4 w-4 cta-arrow" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* 4. SERVICE & DIAGNOSTICS SPOTLIGHT — Royal Blue (#2563D9) & Untinted Craft Photo */}
      <section className="relative bg-[#2563D9] text-white overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-6 px-5 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-28 flex flex-col justify-center space-y-6 gsap-reveal min-w-0">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#F2CE68]">
              <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>Columbia, Missouri · Service &amp; Diagnostics</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.06]">
              Diagnostics built on physics, code, and honest walkthroughs.
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-white/90">
              Whether diagnosing scale buildup on a tankless water heater, replacing a worn water
              softener stack assembly, or tracing subtle residential leaks, the focus in Columbia
              is always getting to the true root cause first.
            </p>
            <div className="pt-2">
              <a
                href="/plumbing"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/plumbing');
                }}
                className="cta-borderless text-[#F2CE68] hover:text-white"
              >
                EXPLORE SERVICE &amp; DIAGNOSTICS
                <ArrowRight className="h-4 w-4 cta-arrow" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 min-h-[320px] sm:min-h-[420px] lg:min-h-[540px] relative">
            <ResilientImage
              src={BRAND_PROFILE.diagnosticsBackdrop}
              alt="Residential tankless water heater and three-stage stainless water filtration diagnostic installation"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 5. FEATURED AUTHENTIC CONTENT — Open Inline Video Theater + Horizontal Sequence (Warm Ivory) */}
      <section className="bg-[#FFFDF7] py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between pb-10 border-b border-[#34414B]/15 gsap-reveal">
            <div className="space-y-3">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2563D9]">
                Verified @Sleepyplumbr Content
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#132230]">
                Straight from the service truck.
              </h2>
            </div>

            <a
              href="/education#videos"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/education', 'videos');
              }}
              className="cta-borderless text-[#2563D9] hover:text-[#0F4378]"
            >
              WATCH FULL VIDEO LIBRARY
              <ArrowRight className="h-4 w-4 cta-arrow" aria-hidden="true" />
            </a>
          </div>

          {/* Inline Active Video Player (Zero Modals / Zero Popups) */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 pt-12 items-start gsap-reveal">
            <div className="lg:col-span-7 min-w-0">
              <div className="aspect-video w-full bg-[#0F4378] overflow-hidden">
                <iframe
                  key={activeVideo.youtubeId}
                  src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?rel=0`}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="h-full w-full border-0"
                />
              </div>
              <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                <div className="min-w-0">
                  <div className="text-xs font-semibold uppercase tracking-[0.12em] text-[#16B8A9]">
                    {activeVideo.series} · {activeVideo.audience}
                  </div>
                  <h3 className="mt-1 font-display text-xl sm:text-2xl font-bold text-[#132230]">
                    {activeVideo.title}
                  </h3>
                </div>
                <a
                  href={activeVideo.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-borderless text-[#2563D9]"
                >
                  OPEN ON YOUTUBE
                  <ArrowUpRight className="h-4 w-4 cta-arrow" aria-hidden="true" />
                </a>
              </div>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#34414B]">
                {activeVideo.summary}
              </p>
            </div>

            {/* Unboxed Editorial Episode Selector List */}
            <div className="lg:col-span-5 divide-y divide-[#34414B]/15 min-w-0">
              {FEATURED_VIDEOS.slice(0, 5).map((video, idx) => {
                const isSelected = video.youtubeId === activeVideo.youtubeId;
                return (
                  <button
                    key={video.id}
                    type="button"
                    onClick={() => setActiveVideoId(video.youtubeId)}
                    className={`w-full text-left py-4 flex items-center gap-4 bg-transparent border-none transition-opacity cursor-pointer group ${
                      isSelected ? 'opacity-100' : 'opacity-75 hover:opacity-100'
                    }`}
                  >
                    <div className="relative h-20 w-16 shrink-0 overflow-hidden bg-[#0F4378]">
                      <ResilientImage
                        src={video.thumbnail}
                        alt={video.title}
                        className="h-full w-full object-cover"
                      />
                      <span
                        className={`absolute inset-0 flex items-center justify-center transition-colors ${
                          isSelected ? 'bg-[#2563D9]/45' : 'bg-black/25 group-hover:bg-[#2563D9]/35'
                        }`}
                      >
                        <Play className="h-4 w-4 text-white fill-white" aria-hidden="true" />
                      </span>
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-semibold uppercase tracking-[0.1em] text-[#2563D9]">
                        0{idx + 1} · {video.audience}
                      </div>
                      <div className="mt-1 font-display text-base sm:text-lg font-bold text-[#132230] leading-snug">
                        {video.title}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 6. PODCAST & MEDIA INTRODUCTION (Fresh Teal #16B8A9) */}
      <section className="bg-[#16B8A9] text-white py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center gsap-reveal">
            <div className="lg:col-span-5">
              <div className="aspect-square w-full max-w-[400px] mx-auto lg:mx-0 overflow-hidden bg-white">
                <ResilientImage
                  src={PODCAST_FEATURE.coverImage}
                  alt="That Plumbing Podcast artwork featuring crossed red pipe wrenches and microphone"
                  className="h-full w-full object-contain p-4"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 min-w-0">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#FFFDF7]">
                <Mic className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>Podcast &amp; Trade Conversations</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
                {PODCAST_FEATURE.showName}
              </h2>

              <p className="text-lg sm:text-xl font-medium leading-relaxed text-white/95">
                {PODCAST_FEATURE.episodeTitle}
              </p>

              <p className="max-w-2xl text-base leading-relaxed text-white/90">
                Josh regularly joins <em>That Plumbing Podcast</em> to discuss water filtration,
                PFAS contaminants, apprenticeship training, service diagnostics, and why real
                education beats pushy sales tactics across the residential trades.
              </p>

              <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-2">
                <a
                  href={PODCAST_FEATURE.spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-borderless text-[#FFFDF7] hover:text-[#0F4378]"
                >
                  LISTEN ON SPOTIFY
                  <ArrowUpRight className="h-4 w-4 cta-arrow" aria-hidden="true" />
                </a>

                <a
                  href="/education#podcast"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/education', 'podcast');
                  }}
                  className="cta-borderless text-[#0F4378] hover:text-white"
                >
                  PODCAST &amp; TOOLS HUB
                  <ArrowRight className="h-4 w-4 cta-arrow" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SLEEPYPLUMBR OFFICIAL MERCH & SHUBEE AMBASSADOR (Warm Ivory #FFFDF7) */}
      <section className="bg-[#FFFDF7] py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between pb-10 border-b border-[#34414B]/15 gsap-reveal">
            <div className="space-y-3">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#F29A38]">
                Official Apparel · Fast Yowi Store
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#132230]">
                Wear the SleepyPlumbr brand.
              </h2>
            </div>

            <a
              href={BRAND_PROFILE.officialLinks.merchStore}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-borderless text-[#2563D9] hover:text-[#0F4378]"
            >
              SHOP SLEEPYPLUMBR MERCH
              <ArrowUpRight className="h-4 w-4 cta-arrow" aria-hidden="true" />
            </a>
          </div>

          {/* Open Unboxed Product Sequence — Zero Boxed Cards */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 pt-12 gsap-reveal">
            {MERCH_PRODUCTS.map((item) => (
              <a
                key={item.id}
                href={item.storeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="aspect-[4/5] w-full overflow-hidden bg-white">
                  <ResilientImage
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 space-y-1">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-display text-lg font-bold text-[#132230] group-hover:text-[#2563D9] transition-colors">
                      {item.name}
                    </h3>
                    <span className="font-display text-lg font-bold text-[#2563D9] tabular-nums shrink-0">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-xs font-medium text-[#34414B]/80">{item.garment}</p>
                </div>
              </a>
            ))}
          </div>

          {/* ShuBee Ambassador Strip — Unboxed Horizontal Feature */}
          <div className="mt-16 sm:mt-20 pt-12 border-t border-[#34414B]/15 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center gsap-reveal">
            <div className="lg:col-span-8 space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#16B8A9]">
                <ShieldCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>Official Brand Partnership</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#132230]">
                ShuBee® Shoe Covers Ambassador
              </h3>
              <p className="max-w-2xl text-base text-[#34414B]">
                Respecting a homeowner’s floors and workspaces is part of the craft. Josh partners
                with ShuBee to promote clean jobsite surface protection on every service call.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <a
                href={BRAND_PROFILE.officialLinks.shubee}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-borderless text-[#2563D9] hover:text-[#0F4378]"
              >
                VISIT SHUBEE PARTNER SITE
                <ArrowUpRight className="h-4 w-4 cta-arrow" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 8. STRONG SOCIAL & CONNECT CTA BAND (Royal Blue #2563D9) */}
      <section className="bg-[#2563D9] text-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center gsap-reveal">
            <div className="lg:col-span-7 space-y-4">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#F2CE68]">
                Connect Across Platforms
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Follow the daily diagnostics or start a conversation in Columbia, MO.
              </h2>
            </div>

            <div className="lg:col-span-5 flex flex-wrap gap-x-8 gap-y-5 lg:justify-end">
              <a
                href={BRAND_PROFILE.officialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-borderless text-[#F2CE68] hover:text-white"
              >
                INSTAGRAM @SLEEPYPLUMBR
                <ArrowUpRight className="h-4 w-4 cta-arrow" aria-hidden="true" />
              </a>
              <a
                href="/plumbing#inquiry"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/plumbing', 'inquiry');
                }}
                className="cta-borderless text-white hover:text-[#F2CE68]"
              >
                SERVICE INQUIRY
                <ArrowRight className="h-4 w-4 cta-arrow" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
