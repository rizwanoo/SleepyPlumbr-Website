import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react';
import { BRAND_PROFILE } from '../data/sleepyplumbrData';

export type AppRoute = '/' | '/plumbing' | '/education' | '/about';

interface NavbarProps {
  currentPath: AppRoute;
  onNavigate: (path: AppRoute, hash?: string) => void;
  hasDarkHero?: boolean;
}

interface DropdownItem {
  label: string;
  path: AppRoute;
  hash?: string;
}

const PLUMBING_ITEMS: DropdownItem[] = [
  { label: 'Service & Diagnostics', path: '/plumbing' },
  { label: 'Diagnostic Methodology', path: '/plumbing', hash: 'methodology' },
  { label: 'Columbia, MO Inquiry', path: '/plumbing', hash: 'inquiry' },
];

const EDUCATION_ITEMS: DropdownItem[] = [
  { label: 'For Homeowners', path: '/education', hash: 'homeowners' },
  { label: 'For Plumbers', path: '/education', hash: 'plumbers' },
  { label: 'Video Library', path: '/education', hash: 'videos' },
  { label: 'Podcast & Tools', path: '/education', hash: 'podcast' },
];

const ABOUT_ITEMS: DropdownItem[] = [
  { label: 'About Josh JB Burleson', path: '/about', hash: 'bio' },
  { label: 'SleepyPlumbr Merch', path: '/about', hash: 'merch' },
  { label: 'ShuBee Partnership', path: '/about', hash: 'shubee' },
  { label: 'Connect', path: '/about', hash: 'connect' },
];

export function Navbar({ currentPath, onNavigate, hasDarkHero = false }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<'plumbing' | 'education' | 'about' | null>(null);
  const closeTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 36);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [currentPath]);

  const useLightNavText = !scrolled && hasDarkHero;

  const handleEnter = (key: 'plumbing' | 'education' | 'about') => {
    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenMenu(key);
  };

  const handleLeave = () => {
    closeTimeoutRef.current = window.setTimeout(() => {
      setOpenMenu(null);
    }, 160);
  };

  const handleLinkClick = (e: React.MouseEvent, path: AppRoute, hash?: string) => {
    e.preventDefault();
    setOpenMenu(null);
    setMobileOpen(false);
    onNavigate(path, hash);
  };

  const navLinkClass = (active: boolean) =>
    `relative inline-flex items-center gap-1 py-2 text-xs font-semibold uppercase tracking-[0.12em] whitespace-nowrap shrink-0 transition-colors duration-200 ${
      useLightNavText
        ? active
          ? 'text-[#F2CE68]'
          : 'text-white/95 hover:text-[#00BDF2]'
        : active
          ? 'text-[#2563D9]'
          : 'text-[#0F4378] hover:text-[#2563D9]'
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FFFDF7]/95 backdrop-blur-md border-b border-[#34414B]/12 py-2.5'
          : 'bg-transparent py-3.5 sm:py-4 lg:py-5'
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1380px] items-center justify-between gap-4 px-4 sm:px-8 lg:px-12">
        {/* Zone 1: Prominent Original SleepyPlumbr Logo + Single-line Wordmark */}
        <a
          href="/"
          onClick={(e) => handleLinkClick(e, '/')}
          className="group flex shrink-0 items-center gap-2.5 sm:gap-3.5 whitespace-nowrap"
          aria-label="SleepyPlumbr Home"
        >
          <img
            src={useLightNavText ? BRAND_PROFILE.logoDarkSurface : BRAND_PROFILE.logoLightSurface}
            alt="SleepyPlumbr official pipe monogram"
            className="h-9 w-auto sm:h-11 lg:h-13 shrink-0 transition-transform duration-300 group-hover:scale-[1.03]"
          />
          <span
            className={`font-display text-xl sm:text-2xl font-extrabold tracking-tight transition-colors duration-200 ${
              useLightNavText ? 'text-white' : 'text-[#0F4378]'
            }`}
          >
            SleepyPlumbr
          </span>
        </a>

        {/* Zone 2: Desktop Navigation (HOME | PLUMBING | EDUCATION | ABOUT | SHOP) */}
        <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-8 shrink-0">
          <a
            href="/"
            onClick={(e) => handleLinkClick(e, '/')}
            className={navLinkClass(currentPath === '/')}
          >
            HOME
          </a>

          {/* PLUMBING Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleEnter('plumbing')}
            onMouseLeave={handleLeave}
          >
            <a
              href="/plumbing"
              onClick={(e) => handleLinkClick(e, '/plumbing')}
              aria-expanded={openMenu === 'plumbing'}
              className={navLinkClass(currentPath === '/plumbing')}
            >
              PLUMBING
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                  openMenu === 'plumbing' ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              />
            </a>
            {openMenu === 'plumbing' && (
              <div className="absolute left-0 top-full pt-3 z-50">
                <div className="min-w-[230px] bg-[#FFFDF7] border-t-2 border-[#2563D9] py-3 px-5 shadow-[0_18px_40px_-15px_rgba(15,67,120,0.22)]">
                  {PLUMBING_ITEMS.map((item) => (
                    <a
                      key={item.label}
                      href={item.hash ? `${item.path}#${item.hash}` : item.path}
                      onClick={(e) => handleLinkClick(e, item.path, item.hash)}
                      className="block py-2 text-sm font-medium text-[#132230] hover:text-[#2563D9] transition-colors whitespace-nowrap"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* EDUCATION Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleEnter('education')}
            onMouseLeave={handleLeave}
          >
            <a
              href="/education"
              onClick={(e) => handleLinkClick(e, '/education')}
              aria-expanded={openMenu === 'education'}
              className={navLinkClass(currentPath === '/education')}
            >
              EDUCATION
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                  openMenu === 'education' ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              />
            </a>
            {openMenu === 'education' && (
              <div className="absolute left-0 top-full pt-3 z-50">
                <div className="min-w-[220px] bg-[#FFFDF7] border-t-2 border-[#16B8A9] py-3 px-5 shadow-[0_18px_40px_-15px_rgba(15,67,120,0.22)]">
                  {EDUCATION_ITEMS.map((item) => (
                    <a
                      key={item.label}
                      href={item.hash ? `${item.path}#${item.hash}` : item.path}
                      onClick={(e) => handleLinkClick(e, item.path, item.hash)}
                      className="block py-2 text-sm font-medium text-[#132230] hover:text-[#16B8A9] transition-colors whitespace-nowrap"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ABOUT Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleEnter('about')}
            onMouseLeave={handleLeave}
          >
            <a
              href="/about"
              onClick={(e) => handleLinkClick(e, '/about')}
              aria-expanded={openMenu === 'about'}
              className={navLinkClass(currentPath === '/about')}
            >
              ABOUT
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                  openMenu === 'about' ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              />
            </a>
            {openMenu === 'about' && (
              <div className="absolute left-0 top-full pt-3 z-50">
                <div className="min-w-[220px] bg-[#FFFDF7] border-t-2 border-[#F29A38] py-3 px-5 shadow-[0_18px_40px_-15px_rgba(15,67,120,0.22)]">
                  {ABOUT_ITEMS.map((item) => (
                    <a
                      key={item.label}
                      href={item.hash ? `${item.path}#${item.hash}` : item.path}
                      onClick={(e) => handleLinkClick(e, item.path, item.hash)}
                      className="block py-2 text-sm font-medium text-[#132230] hover:text-[#2563D9] transition-colors whitespace-nowrap"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* SHOP Direct Link to Official Merch Store */}
          <a
            href={BRAND_PROFILE.officialLinks.merchStore}
            target="_blank"
            rel="noopener noreferrer"
            className={navLinkClass(false)}
          >
            SHOP
            <ArrowUpRight className="h-3.5 w-3.5 opacity-80" aria-hidden="true" />
          </a>
        </nav>

        {/* Zone 3: Single Primary Action (Desktop) + Responsive Mobile Menu Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="/plumbing#inquiry"
            onClick={(e) => handleLinkClick(e, '/plumbing', 'inquiry')}
            className={`hidden lg:inline-flex cta-borderless text-xs ${
              useLightNavText
                ? 'text-[#F2CE68] hover:text-white'
                : 'text-[#2563D9] hover:text-[#0F4378]'
            }`}
          >
            COLUMBIA INQUIRY
            <ArrowRight className="h-4 w-4 cta-arrow" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            className={`lg:hidden inline-flex h-11 w-11 items-center justify-center bg-transparent border-none transition-colors ${
              useLightNavText ? 'text-white' : 'text-[#0F4378]'
            }`}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Responsive Full-Width Editorial Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#FFFDF7] border-t border-[#34414B]/12 px-5 py-7 shadow-[0_24px_48px_-16px_rgba(15,67,120,0.18)]">
          <div className="flex flex-col gap-5">
            <a
              href="/"
              onClick={(e) => handleLinkClick(e, '/')}
              className="font-display text-2xl font-bold text-[#0F4378]"
            >
              HOME
            </a>
            <a
              href="/plumbing"
              onClick={(e) => handleLinkClick(e, '/plumbing')}
              className="font-display text-2xl font-bold text-[#0F4378]"
            >
              PLUMBING — Service &amp; Diagnostics
            </a>
            <a
              href="/education"
              onClick={(e) => handleLinkClick(e, '/education')}
              className="font-display text-2xl font-bold text-[#0F4378]"
            >
              EDUCATION — Learn &amp; Media
            </a>
            <a
              href="/about"
              onClick={(e) => handleLinkClick(e, '/about')}
              className="font-display text-2xl font-bold text-[#0F4378]"
            >
              ABOUT — Josh &amp; Connect
            </a>
            <a
              href={BRAND_PROFILE.officialLinks.merchStore}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-display text-2xl font-bold text-[#2563D9]"
            >
              SHOP OFFICIAL MERCH
              <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
            </a>
            <div className="pt-3 border-t border-[#34414B]/12">
              <a
                href="/plumbing#inquiry"
                onClick={(e) => handleLinkClick(e, '/plumbing', 'inquiry')}
                className="cta-borderless text-[#2563D9]"
              >
                COLUMBIA SERVICE INQUIRY
                <ArrowRight className="h-4 w-4 cta-arrow" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
