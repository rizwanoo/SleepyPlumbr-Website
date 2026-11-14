import { useCallback, useEffect, useState } from 'react';
import { Navbar, type AppRoute } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { PlumbingPage } from './pages/PlumbingPage';
import { EducationPage } from './pages/EducationPage';
import { AboutPage } from './pages/AboutPage';

const ROUTE_SEO: Record<AppRoute, { title: string; description: string }> = {
  '/': {
    title: 'SleepyPlumbr — Josh JB Burleson | Master Plumber & Plumbing Educator',
    description:
      'Master Plumber in Columbia, Missouri sharing real-world service diagnostics, homeowner plumbing education, and technical training for tradespeople.',
  },
  '/plumbing': {
    title: 'Service & Diagnostics in Columbia, MO | SleepyPlumbr — Josh JB Burleson',
    description:
      'Master Plumber service and diagnostics in Columbia, Missouri: water treatment, tankless water heaters, leak tracing, and homeowner-first clarity.',
  },
  '/education': {
    title: 'Plumbing Education & Media | SleepyPlumbr — Homeowners & Plumbers',
    description:
      'Educational plumbing videos, homeowner guides, apprentice training, That Plumbing Podcast episodes, and verified field tool recommendations.',
  },
  '/about': {
    title: 'About Josh JB Burleson, Merch & Connect | SleepyPlumbr',
    description:
      'Meet Josh JB Burleson (SleepyPlumbr), shop official apparel on Fast Yowi, explore the ShuBee partnership, and connect across verified platforms.',
  },
};

function normalizePath(pathname: string): AppRoute {
  if (pathname === '/plumbing') return '/plumbing';
  if (pathname === '/education') return '/education';
  if (pathname === '/about') return '/about';
  return '/';
}

export default function App() {
  const [currentPath, setCurrentPath] = useState<AppRoute>(() =>
    normalizePath(window.location.pathname)
  );

  useEffect(() => {
    const seo = ROUTE_SEO[currentPath];
    document.title = seo.title;
    const descTag = document.querySelector('meta[name="description"]');
    if (descTag) {
      descTag.setAttribute('content', seo.description);
    }
  }, [currentPath]);

  useEffect(() => {
    const onPopState = () => {
      setCurrentPath(normalizePath(window.location.pathname));
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigate = useCallback((path: AppRoute, hash?: string) => {
    const targetUrl = hash ? `${path}#${hash}` : path;
    if (window.location.pathname !== path || window.location.hash !== (hash ? `#${hash}` : '')) {
      window.history.pushState({}, '', targetUrl);
    }
    setCurrentPath(path);

    window.setTimeout(() => {
      if (hash) {
        const targetEl = document.getElementById(hash);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return;
        }
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 60);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDF7] text-[#34414B] overflow-x-clip">
      <Navbar currentPath={currentPath} onNavigate={navigate} hasDarkHero={false} />

      <main className="flex-1">
        {currentPath === '/' && <HomePage onNavigate={navigate} />}
        {currentPath === '/plumbing' && <PlumbingPage onNavigate={navigate} />}
        {currentPath === '/education' && <EducationPage onNavigate={navigate} />}
        {currentPath === '/about' && <AboutPage onNavigate={navigate} />}
      </main>

      <Footer onNavigate={navigate} />
    </div>
  );
}
