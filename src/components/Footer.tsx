import { ArrowUpRight } from 'lucide-react';
import { BRAND_PROFILE } from '../data/sleepyplumbrData';
import type { AppRoute } from './Navbar';

interface FooterProps {
  onNavigate: (path: AppRoute, hash?: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const go = (e: React.MouseEvent, path: AppRoute, hash?: string) => {
    e.preventDefault();
    onNavigate(path, hash);
  };

  return (
    <footer className="bg-[#0F4378] text-white">
      <div className="mx-auto max-w-[1380px] px-6 sm:px-10 lg:px-12 pt-16 pb-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 pb-14 border-b border-white/15">
          {/* Prominent Footer Branding */}
          <div className="lg:col-span-5 space-y-6">
            <a
              href="/"
              onClick={(e) => go(e, '/')}
              className="inline-flex items-center gap-4 group"
            >
              <img
                src={BRAND_PROFILE.logoDarkSurface}
                alt="SleepyPlumbr official logo"
                className="h-14 w-auto sm:h-16 transition-transform duration-300 group-hover:scale-105"
              />
              <div>
                <div className="font-display text-3xl font-extrabold tracking-tight text-white">
                  SleepyPlumbr
                </div>
                <div className="text-sm font-medium text-[#00BDF2]">
                  Josh JB Burleson
                </div>
              </div>
            </a>

            <p className="max-w-md text-base leading-relaxed text-white/80">
              Master Plumber · Service &amp; Diagnostics in Columbia, Missouri. Sharing real-world
              plumbing education for homeowners and working tradespeople through practical
              diagnostics, video walkthroughs, and industry conversations.
            </p>

            <div className="text-xs font-semibold uppercase tracking-[0.14em] text-[#F2CE68]">
              Columbia, Missouri, USA · Education Over Persuasion
            </div>
          </div>

          {/* Site Navigation */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-[#00BDF2]">
              Explore
            </h3>
            <ul className="space-y-3 text-sm text-white/85">
              <li>
                <a href="/" onClick={(e) => go(e, '/')} className="hover:text-[#F2CE68] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/plumbing"
                  onClick={(e) => go(e, '/plumbing')}
                  className="hover:text-[#F2CE68] transition-colors"
                >
                  Service &amp; Diagnostics
                </a>
              </li>
              <li>
                <a
                  href="/education"
                  onClick={(e) => go(e, '/education')}
                  className="hover:text-[#F2CE68] transition-colors"
                >
                  Plumbing Education &amp; Media
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  onClick={(e) => go(e, '/about')}
                  className="hover:text-[#F2CE68] transition-colors"
                >
                  About Josh &amp; Connect
                </a>
              </li>
              <li>
                <a
                  href="/plumbing#inquiry"
                  onClick={(e) => go(e, '/plumbing', 'inquiry')}
                  className="hover:text-[#F2CE68] transition-colors"
                >
                  Columbia, MO Service Inquiry
                </a>
              </li>
            </ul>
          </div>

          {/* Verified Official Channels */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-[#00BDF2]">
              Official Channels &amp; Store
            </h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-white/85">
              <a
                href={BRAND_PROFILE.officialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-[#F2CE68] transition-colors"
              >
                Instagram @sleepyplumbr
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
              <a
                href={BRAND_PROFILE.officialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-[#F2CE68] transition-colors"
              >
                YouTube @Sleepyplumbr
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
              <a
                href={BRAND_PROFILE.officialLinks.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-[#F2CE68] transition-colors"
              >
                TikTok @sleepyplumbr
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
              <a
                href={BRAND_PROFILE.officialLinks.spotifyEpisode}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-[#F2CE68] transition-colors"
              >
                Podcast on Spotify
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
              <a
                href={BRAND_PROFILE.officialLinks.merchStore}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-[#F2CE68] transition-colors"
              >
                Official Merch Store
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
              <a
                href={BRAND_PROFILE.officialLinks.linktree}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-[#F2CE68] transition-colors"
              >
                Linktree Hub
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
              <a
                href={BRAND_PROFILE.officialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-[#F2CE68] transition-colors"
              >
                Facebook
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
              <a
                href={BRAND_PROFILE.officialLinks.shubee}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-[#F2CE68] transition-colors"
              >
                ShuBee Partner
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-xs text-white/65">
          <p>
            © {new Date().getFullYear()} SleepyPlumbr — Josh JB Burleson. Columbia, Missouri.
          </p>
          <p>
            Educational content is for informational awareness; product links on Linktree may include
            affiliate commissions.
          </p>
        </div>
      </div>
    </footer>
  );
}
