import { useRef } from 'react';
import { ArrowRight, ArrowUpRight, ShieldCheck, MapPin } from 'lucide-react';
import { BRAND_PROFILE, MERCH_PRODUCTS } from '../data/sleepyplumbrData';
import { useGsapReveal } from '../hooks/useGsapReveal';
import { ResilientImage } from '../components/ResilientImage';
import type { AppRoute } from '../components/Navbar';

interface AboutPageProps {
  onNavigate: (path: AppRoute, hash?: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  const pageRef = useRef<HTMLDivElement>(null);
  useGsapReveal(pageRef, 'about');

  return (
    <div ref={pageRef} className="overflow-x-clip">
      {/* 1. BRIGHT PERSONAL BRAND HERO — About Josh JB Burleson (Zero tint over navbar) */}
      <section className="relative pt-32 sm:pt-36 lg:pt-44 pb-16 sm:pb-20 lg:pb-28 bg-[#FFFDF7] text-[#132230] overflow-hidden">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7 space-y-6 min-w-0">
              <div className="gsap-hero inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#2563D9]">
                <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>Columbia, Missouri · Master Plumber &amp; Educator</span>
              </div>

              <h1 className="gsap-hero font-display text-4xl sm:text-5xl lg:text-[4.25rem] font-extrabold leading-[1.03] tracking-tight text-[#0F4378]">
                Josh JB Burleson.
                <br />
                <span className="text-[#2563D9]">The person behind SleepyPlumbr.</span>
              </h1>

              <p className="gsap-hero max-w-2xl text-base sm:text-lg lg:text-xl leading-relaxed text-[#34414B]">
                Master Plumber, service and diagnostics specialist, plumbing trainer, and content
                creator focused on raising the bar for both homeowner awareness and trade
                education.
              </p>

              <div className="gsap-hero flex flex-wrap gap-x-8 gap-y-4 pt-2">
                <a href="#merch" className="cta-borderless text-[#2563D9] hover:text-[#0F4378]">
                  SLEEPYPLUMBR MERCH
                  <ArrowRight className="h-4 w-4 cta-arrow" aria-hidden="true" />
                </a>
                <a href="#connect" className="cta-borderless text-[#0F4378] hover:text-[#16B8A9]">
                  OFFICIAL CHANNELS
                  <ArrowRight className="h-4 w-4 cta-arrow" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 gsap-hero flex justify-center lg:justify-end">
              <div className="aspect-[4/5] w-full max-w-[430px] overflow-hidden">
                <ResilientImage
                  src={BRAND_PROFILE.portraitMain}
                  alt="Josh JB Burleson wearing SleepyPlumbr apparel"
                  loading="eager"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BIOGRAPHY & PHILOSOPHY — Soft Mint (#E7F5EF) */}
      <section id="bio" className="bg-[#E7F5EF] py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center gsap-reveal">
            <div className="lg:col-span-5">
              <div className="aspect-[3/4] w-full max-w-[420px] mx-auto lg:mx-0 overflow-hidden">
                <ResilientImage
                  src={BRAND_PROFILE.portraitVan}
                  alt="Josh JB Burleson inside his plumbing service vehicle"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 min-w-0">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0E8378]">
                About Josh
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-[#132230]">
                From the service truck to an industry-wide conversation.
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-[#34414B]">
                After leaving traditional college to pursue a hands-on career in the trades, Josh
                built his expertise in residential service and diagnostics—eventually earning his
                Master Plumber status and training apprentices in the field.
              </p>
              <p className="text-base leading-relaxed text-[#34414B]">
                Through <strong>@sleepyplumbr</strong> on Instagram, YouTube, TikTok, and frequent
                appearances on <em>That Plumbing Podcast</em>, he shares honest real-world calls:
                water heater treatment, softener stack repairs, clean PVC priming, diagnostic
                mindset, and why helping customers understand their plumbing builds a healthier
                industry for everyone.
              </p>

              <div className="pt-4 border-t border-[#16B8A9]/25 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.12em] text-[#0E8378]">
                    Service Philosophy
                  </div>
                  <div className="mt-1 font-display text-xl font-bold text-[#132230]">
                    Education Over Persuasion
                  </div>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.12em] text-[#2563D9]">
                    Community Focus
                  </div>
                  <div className="mt-1 font-display text-xl font-bold text-[#132230]">
                    Supporting Plumbers &amp; Homeowners
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SLEEPYPLUMBR OFFICIAL MERCH STORE — Ice Blue (#E9F3FF) */}
      <section id="merch" className="bg-[#E9F3FF] py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between pb-10 border-b border-[#2563D9]/20 gsap-reveal">
            <div className="space-y-3 max-w-2xl">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2563D9]">
                Official Merchandise Store · Fast Yowi Tees
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#132230]">
                SleepyPlumbr Official Merch
              </h2>
              <p className="text-base text-[#34414B]">
                Current apparel and headwear fulfilled directly through Josh’s official Fast Yowi
                storefront. Orders are typically printed and ready for shipping or pickup within 7
                business days.
              </p>
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

          <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 pt-12 gsap-reveal">
            {MERCH_PRODUCTS.map((product) => (
              <div key={product.id} className="flex flex-col justify-between">
                <div>
                  <a
                    href={product.storeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block aspect-[4/5] w-full overflow-hidden bg-white"
                  >
                    <ResilientImage
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                    />
                  </a>
                  <div className="mt-4 space-y-1">
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="font-display text-xl font-bold text-[#132230]">
                        {product.name}
                      </h3>
                      <span className="font-display text-xl font-bold text-[#2563D9] tabular-nums shrink-0">
                        {product.price}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-[#34414B]">{product.garment}</p>
                    <p className="text-xs text-[#34414B]/75">{product.note}</p>
                  </div>
                </div>

                <div className="pt-4">
                  <a
                    href={product.storeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-borderless text-[#2563D9] hover:text-[#0F4378]"
                  >
                    ORDER IN STORE
                    <ArrowUpRight className="h-4 w-4 cta-arrow" aria-hidden="true" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SHUBEE AMBASSADOR PARTNERSHIP — Warm Ivory (#FFFDF7) */}
      <section id="shubee" className="bg-[#FFFDF7] py-16 sm:py-20 lg:py-24 border-b border-[#34414B]/12">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center gsap-reveal">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#0E8378]">
                <ShieldCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>Verified Ambassador Partnership</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#132230]">
                ShuBee® Shoe Covers Ambassador
              </h2>
              <p className="max-w-2xl text-base leading-relaxed text-[#34414B]">
                As a proud ShuBee® ambassador, Josh promotes protective shoe covers and clean
                surface practices as non-negotiable habits for service plumbers entering customers’
                homes.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <a
                href={BRAND_PROFILE.officialLinks.shubee}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-borderless text-[#0E8378] hover:text-[#0F4378]"
              >
                EXPLORE SHUBEE.COM
                <ArrowUpRight className="h-4 w-4 cta-arrow" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CONNECT — Verified Official Links (Warm Ivory #FFFDF7) */}
      <section id="connect" className="bg-[#FFFDF7] py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-4 pb-12 border-b border-[#34414B]/15 gsap-reveal">
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2563D9]">
              Verified Channels
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#132230]">
              Connect with Josh &amp; SleepyPlumbr
            </h2>
            <p className="text-base text-[#34414B]">
              Follow verified SleepyPlumbr accounts for daily service clips, long-form tool talks,
              merchandise drops, and podcast episodes.
            </p>
          </div>

          <div className="divide-y divide-[#34414B]/15">
            {[
              {
                label: 'Instagram',
                handle: '@sleepyplumbr',
                desc: 'Daily plumbing diagnostics, reels, tool tips, and behind-the-scenes work in Columbia, MO.',
                url: BRAND_PROFILE.officialLinks.instagram,
              },
              {
                label: 'YouTube',
                handle: 'Sleepyplumbr — Josh JB Burleson',
                desc: 'Lunchtime with Josh the Plumber series, water treatment talks, and field shorts.',
                url: BRAND_PROFILE.officialLinks.youtube,
              },
              {
                label: 'Spotify Podcast',
                handle: 'That Plumbing Podcast · Ep. 28',
                desc: 'Understanding Water Filtration & PFAS w/ Steve Hamilton (feat. Josh B.).',
                url: BRAND_PROFILE.officialLinks.spotifyEpisode,
              },
              {
                label: 'Linktree',
                handle: 'linktr.ee/sleepyplumbr',
                desc: 'Central directory for verified tool links, recommended reading, and official platforms.',
                url: BRAND_PROFILE.officialLinks.linktree,
              },
              {
                label: 'Official Merch Store',
                handle: 'Fast Yowi Tees · Sleepy Plumbr',
                desc: 'Good Printed, EVIL Printed, Pipe Down Team Tech shirts, and Embroidered Snapback Hat.',
                url: BRAND_PROFILE.officialLinks.merchStore,
              },
              {
                label: 'TikTok & Facebook',
                handle: '@sleepyplumbr · Josh JB Burleson',
                desc: 'Short-form trade clips and community discussions.',
                url: BRAND_PROFILE.officialLinks.tiktok,
              },
            ].map((channel) => (
              <div
                key={channel.label}
                className="gsap-reveal py-7 grid grid-cols-1 gap-4 sm:grid-cols-12 sm:items-center"
              >
                <div className="sm:col-span-3 min-w-0">
                  <div className="text-xs font-semibold uppercase tracking-[0.12em] text-[#16B8A9]">
                    {channel.label}
                  </div>
                  <div className="mt-1 font-display text-xl font-bold text-[#132230] break-words">
                    {channel.handle}
                  </div>
                </div>
                <div className="sm:col-span-6 text-base text-[#34414B]">{channel.desc}</div>
                <div className="sm:col-span-3 sm:text-right">
                  <a
                    href={channel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-borderless text-[#2563D9] hover:text-[#0F4378]"
                  >
                    OPEN CHANNEL
                    <ArrowUpRight className="h-4 w-4 cta-arrow" aria-hidden="true" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 pt-8 border-t border-[#34414B]/15 flex flex-wrap items-center justify-between gap-6 gsap-reveal">
            <p className="text-base font-medium text-[#132230]">
              Need to reach out regarding a residential system in Columbia, Missouri?
            </p>
            <a
              href="/plumbing#inquiry"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/plumbing', 'inquiry');
              }}
              className="cta-borderless text-[#2563D9]"
            >
              GO TO COLUMBIA SERVICE INQUIRY
              <ArrowRight className="h-4 w-4 cta-arrow" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
