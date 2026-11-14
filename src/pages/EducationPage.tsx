import { useRef, useState } from 'react';
import { ArrowRight, ArrowUpRight, Play, Mic, Wrench, BookOpen } from 'lucide-react';
import {
  BRAND_PROFILE,
  FEATURED_VIDEOS,
  OFFICIAL_RECOMMENDATIONS,
  PODCAST_FEATURE,
} from '../data/sleepyplumbrData';
import { useGsapReveal } from '../hooks/useGsapReveal';
import { ResilientImage } from '../components/ResilientImage';
import type { AppRoute } from '../components/Navbar';

interface EducationPageProps {
  onNavigate: (path: AppRoute, hash?: string) => void;
}

type VideoAudienceFilter = 'All' | 'Homeowners' | 'Plumbers';
type ResourceFilter = 'All' | 'Tools' | 'Books';

export function EducationPage({ onNavigate }: EducationPageProps) {
  const pageRef = useRef<HTMLDivElement>(null);
  const [audienceFilter, setAudienceFilter] = useState<VideoAudienceFilter>('All');
  const [selectedVideoId, setSelectedVideoId] = useState<string>(FEATURED_VIDEOS[0].youtubeId);
  const [resourceFilter, setResourceFilter] = useState<ResourceFilter>('All');

  useGsapReveal(pageRef, 'education');

  const filteredVideos = FEATURED_VIDEOS.filter((v) => {
    if (audienceFilter === 'All') return true;
    return v.audience === audienceFilter || v.audience === 'Both';
  });

  const activeVideo =
    FEATURED_VIDEOS.find((v) => v.youtubeId === selectedVideoId) || FEATURED_VIDEOS[0];

  const filteredResources = OFFICIAL_RECOMMENDATIONS.filter((r) => {
    if (resourceFilter === 'All') return true;
    return r.category === resourceFilter;
  });

  return (
    <div ref={pageRef} className="overflow-x-clip">
      {/* 1. BRIGHT DAYLIGHT EDUCATION HEADER — Zero dark/blue tint over header */}
      <section className="relative pt-32 sm:pt-36 lg:pt-44 pb-16 sm:pb-20 lg:pb-24 bg-[#FFFDF7] text-[#132230] overflow-hidden">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7 space-y-6 min-w-0">
              <div className="gsap-hero text-xs font-semibold uppercase tracking-[0.14em] text-[#2563D9]">
                SleepyPlumbr Knowledge Hub · Homeowners &amp; Tradespeople
              </div>
              <h1 className="gsap-hero font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.03] tracking-tight text-[#0F4378]">
                Plumbing Education &amp; Media
              </h1>
              <p className="gsap-hero max-w-2xl text-base sm:text-lg lg:text-xl leading-relaxed text-[#34414B]">
                Practical field knowledge designed for two audiences at once: homeowners who want to
                understand their home’s systems, and plumbers refining real-world diagnostic craft.
              </p>

              <div className="gsap-hero flex flex-wrap gap-x-8 gap-y-4 pt-2">
                <a href="#homeowners" className="cta-borderless text-[#2563D9] hover:text-[#0F4378]">
                  FOR HOMEOWNERS
                  <ArrowRight className="h-4 w-4 cta-arrow" aria-hidden="true" />
                </a>
                <a href="#plumbers" className="cta-borderless text-[#0E8378] hover:text-[#0F4378]">
                  FOR PLUMBERS
                  <ArrowRight className="h-4 w-4 cta-arrow" aria-hidden="true" />
                </a>
                <a href="#videos" className="cta-borderless text-[#0F4378] hover:text-[#2563D9]">
                  VIDEO LIBRARY
                  <ArrowRight className="h-4 w-4 cta-arrow" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 gsap-hero flex justify-center lg:justify-end">
              <div className="aspect-[4/3] w-full max-w-[480px] overflow-hidden">
                <ResilientImage
                  src={BRAND_PROFILE.heroBackdrop}
                  alt="Copper plumbing manifold and PEX-A lines"
                  loading="eager"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FOR HOMEOWNERS — Ice Blue Editorial Story (#E9F3FF) */}
      <section id="homeowners" className="bg-[#E9F3FF] py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start gsap-reveal">
            <div className="lg:col-span-5 space-y-5">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2563D9]">
                Track 01 · For Homeowners
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-[#132230]">
                Know what is behind the wall before you make a repair decision.
              </h2>
              <p className="text-base leading-relaxed text-[#34414B]">
                Most homeowners only learn about water heaters, shutoff valves, or water filtration
                when something is already leaking. Josh’s homeowner breakdowns explain how systems
                actually work so you can spot early signs and speak confidently with any service
                plumber.
              </p>
            </div>

            <div className="lg:col-span-7 divide-y divide-[#2563D9]/20">
              <div className="py-6 first:pt-0">
                <h3 className="font-display text-2xl font-bold text-[#132230]">
                  01. Water Treatment &amp; Tankless Longevity
                </h3>
                <p className="mt-2 text-base leading-relaxed text-[#34414B]">
                  Hard water mineral scale restricts narrow passages inside both gas and electric
                  tankless heat exchangers. Conditioning and routine flushing protect efficiency and
                  keep hot water consistent.
                </p>
              </div>
              <div className="py-6">
                <h3 className="font-display text-2xl font-bold text-[#132230]">
                  02. Faucet Leaks &amp; Isolation Valves
                </h3>
                <p className="mt-2 text-base leading-relaxed text-[#34414B]">
                  Knowing where your main shutoff and fixture stops sit—and understanding why a
                  slow drip happens at a cartridge or valve stem—prevents minor leaks from turning
                  into cabinet damage.
                </p>
              </div>
              <div className="py-6">
                <h3 className="font-display text-2xl font-bold text-[#132230]">
                  03. Filtration, PFAS &amp; Water Chemistry
                </h3>
                <p className="mt-2 text-base leading-relaxed text-[#34414B]">
                  Before buying filtration equipment, understand what is in your supply, how water
                  softeners interact with point-of-use filters, and why proper sizing matters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FOR PLUMBERS — Soft Mint Editorial Story (#E7F5EF) */}
      <section id="plumbers" className="bg-[#E7F5EF] py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start gsap-reveal">
            <div className="lg:col-span-5 space-y-5">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0E8378]">
                Track 02 · For Plumbers &amp; Apprentices
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-[#132230]">
                Sharper diagnostics, cleaner installs, stronger trade careers.
              </h2>
              <p className="text-base leading-relaxed text-[#34414B]">
                As a plumbing trainer and frequent voice on <em>That Plumbing Podcast</em>, Josh
                focuses on the habits that separate confident service plumbers from hurried
                parts-swappers.
              </p>
              <div className="pt-2">
                <a
                  href={BRAND_PROFILE.officialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-borderless text-[#0E8378] hover:text-[#0F4378]"
                >
                  SUBSCRIBE ON YOUTUBE @SLEEPYPLUMBR
                  <ArrowUpRight className="h-4 w-4 cta-arrow" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 divide-y divide-[#16B8A9]/25">
              <div className="py-6 first:pt-0">
                <h3 className="font-display text-2xl font-bold text-[#132230]">
                  01. First 30 Days &amp; Apprenticeship Standards
                </h3>
                <p className="mt-2 text-base leading-relaxed text-[#34414B]">
                  Show up ready to observe, keep the truck organized, ask why a fitting or valve
                  failed, and master fundamental pipe prep before chasing speed.
                </p>
              </div>
              <div className="py-6">
                <h3 className="font-display text-2xl font-bold text-[#132230]">
                  02. Clean Priming, Valve Clearance &amp; Black Iron Discipline
                </h3>
                <p className="mt-2 text-base leading-relaxed text-[#34414B]">
                  Leave joints neat, position shutoff valves where hands and wrenches actually fit,
                  and never rush gas-line threading or pressure verification.
                </p>
              </div>
              <div className="py-6">
                <h3 className="font-display text-2xl font-bold text-[#132230]">
                  03. Communication Built on Education Over Persuasion
                </h3>
                <p className="mt-2 text-base leading-relaxed text-[#34414B]">
                  Walking homeowners clearly through diagnostic findings earns lasting trust far
                  more reliably than scripted upsells or high-pressure tactics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. VIDEO CONTENT — Inline Theater & Unboxed Filterable Episode Index (Warm Ivory) */}
      <section id="videos" className="bg-[#FFFDF7] py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between pb-8 border-b border-[#34414B]/15 gsap-reveal">
            <div className="space-y-2">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2563D9]">
                Official YouTube Channel · @Sleepyplumbr
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#132230]">
                Video Content &amp; Field Walkthroughs
              </h2>
            </div>

            {/* Interactive Filter Tabs */}
            <div className="flex items-center gap-6" role="tablist" aria-label="Filter videos by audience">
              {(['All', 'Homeowners', 'Plumbers'] as const).map((tab) => {
                const active = audienceFilter === tab;
                return (
                  <button
                    key={tab}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setAudienceFilter(tab)}
                    className={`py-2 text-xs font-bold uppercase tracking-[0.12em] bg-transparent border-none transition-colors cursor-pointer whitespace-nowrap ${
                      active
                        ? 'text-[#2563D9] border-[#2563D9]'
                        : 'text-[#34414B]/65 border-transparent hover:text-[#132230]'
                    }`}
                    style={{ borderBottomWidth: '2px', borderBottomStyle: 'solid' }}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Inline Theater */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 pt-10 pb-14 border-b border-[#34414B]/15 items-center gsap-reveal">
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
            </div>
            <div className="lg:col-span-5 space-y-5 min-w-0">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-[#16B8A9]">
                Now Playing · {activeVideo.series} · {activeVideo.audience}
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold leading-tight text-[#132230]">
                {activeVideo.title}
              </h3>
              <p className="text-base leading-relaxed text-[#34414B]">{activeVideo.summary}</p>
              <a
                href={activeVideo.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-borderless text-[#2563D9] hover:text-[#0F4378]"
              >
                WATCH ON YOUTUBE
                <ArrowUpRight className="h-4 w-4 cta-arrow" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Unboxed Editorial Gallery */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 pt-12 gsap-reveal">
            {filteredVideos.map((video) => {
              const isPlaying = video.youtubeId === activeVideo.youtubeId;
              return (
                <button
                  key={video.id}
                  type="button"
                  onClick={() => {
                    setSelectedVideoId(video.youtubeId);
                    const el = document.getElementById('videos');
                    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="group text-left bg-transparent border-none p-0 cursor-pointer flex flex-col"
                >
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#0F4378]">
                    <ResilientImage
                      src={video.thumbnail}
                      alt={video.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className={`absolute inset-0 flex items-center justify-center transition-colors ${
                        isPlaying ? 'bg-[#2563D9]/45' : 'bg-black/20 group-hover:bg-[#2563D9]/35'
                      }`}
                    >
                      <Play className="h-9 w-9 text-white fill-white/90" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="mt-4 space-y-1.5">
                    <div className="text-xs font-semibold uppercase tracking-[0.1em] text-[#2563D9]">
                      {video.series} · {video.audience}
                    </div>
                    <h4 className="font-display text-xl font-bold leading-snug text-[#132230] group-hover:text-[#2563D9] transition-colors">
                      {video.title}
                    </h4>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. PODCAST & INDUSTRY CONVERSATIONS (Royal Blue #2563D9) */}
      <section id="podcast" className="bg-[#2563D9] text-white py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start gsap-reveal">
            <div className="lg:col-span-6 space-y-6 min-w-0">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#F2CE68]">
                <Mic className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>Podcast &amp; Industry Conversations</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                {PODCAST_FEATURE.showName}
              </h2>
              <p className="text-lg font-medium leading-relaxed text-white/95">
                {PODCAST_FEATURE.episodeTitle}
              </p>

              {/* Verified Spotify Episode Embed */}
              <div className="pt-2">
                <iframe
                  src={PODCAST_FEATURE.spotifyEmbedUrl}
                  title={PODCAST_FEATURE.episodeTitle}
                  width="100%"
                  height="152"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="border-0"
                />
              </div>

              <div className="pt-2">
                <a
                  href={PODCAST_FEATURE.spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-borderless text-[#F2CE68] hover:text-white"
                >
                  OPEN EPISODE ON SPOTIFY
                  <ArrowUpRight className="h-4 w-4 cta-arrow" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 divide-y divide-white/20 min-w-0">
              {PODCAST_FEATURE.recurringThemes.map((item, idx) => (
                <div key={item.topic} className="py-6 first:pt-0">
                  <div className="text-xs font-semibold uppercase tracking-[0.12em] text-[#00BDF2]">
                    0{idx + 1} · Verified Episode Theme
                  </div>
                  <h3 className="mt-1.5 font-display text-2xl font-bold text-white">
                    {item.topic}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-white/85">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. TOOLS & RECOMMENDATIONS — Official Linktree Verified List (Warm Ivory #FFFDF7) */}
      <section id="tools" className="bg-[#FFFDF7] py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between pb-8 border-b border-[#34414B]/15 gsap-reveal">
            <div className="space-y-3 max-w-2xl">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#F29A38]">
                Official Linktree Gear &amp; Reading
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#132230]">
                Tools &amp; Recommendations
              </h2>
              <p className="text-sm text-[#34414B]/85">
                <strong>Affiliate Disclosure:</strong> Tools and books listed below are pulled
                directly from Josh’s official Linktree. Selected links (including Amazon Associates
                and partner links) may earn a commission at no extra cost to you.
              </p>
            </div>

            <div className="flex items-center gap-6">
              {(['All', 'Tools', 'Books'] as const).map((tab) => {
                const active = resourceFilter === tab;
                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setResourceFilter(tab)}
                    className={`py-2 text-xs font-bold uppercase tracking-[0.12em] bg-transparent border-none transition-colors cursor-pointer whitespace-nowrap ${
                      active
                        ? 'text-[#2563D9] border-[#2563D9]'
                        : 'text-[#34414B]/65 border-transparent hover:text-[#132230]'
                    }`}
                    style={{ borderBottomWidth: '2px', borderBottomStyle: 'solid' }}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="divide-y divide-[#34414B]/15">
            {filteredResources.map((item) => (
              <div
                key={item.name}
                className="gsap-reveal py-8 grid grid-cols-1 gap-6 sm:grid-cols-12 sm:items-center"
              >
                <div className="sm:col-span-2">
                  <div className="h-24 w-24 overflow-hidden bg-white">
                    <ResilientImage
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-contain p-2"
                    />
                  </div>
                </div>

                <div className="sm:col-span-7 space-y-1.5 min-w-0">
                  <div className="inline-flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#16B8A9]">
                    {item.category === 'Tools' ? (
                      <Wrench className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    ) : (
                      <BookOpen className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    )}
                    <span>{item.category}</span>
                    {item.isAffiliate && <span>· Affiliate Link</span>}
                    {item.promoNote && <span>· {item.promoNote}</span>}
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[#132230]">{item.name}</h3>
                  <p className="text-base text-[#34414B]">{item.note}</p>
                </div>

                <div className="sm:col-span-3 sm:text-right">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-borderless text-[#2563D9] hover:text-[#0F4378]"
                  >
                    VIEW OFFICIAL LINK
                    <ArrowUpRight className="h-4 w-4 cta-arrow" aria-hidden="true" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 pt-8 border-t border-[#34414B]/15 flex flex-wrap items-center justify-between gap-6 gsap-reveal">
            <p className="text-base font-medium text-[#132230]">
              Looking for local Columbia, Missouri residential plumbing diagnostics?
            </p>
            <a
              href="/plumbing#inquiry"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/plumbing', 'inquiry');
              }}
              className="cta-borderless text-[#2563D9]"
            >
              COLUMBIA SERVICE INQUIRY
              <ArrowRight className="h-4 w-4 cta-arrow" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
