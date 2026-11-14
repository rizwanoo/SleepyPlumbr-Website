import { useEffect, type RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useGsapReveal(containerRef: RefObject<HTMLElement | null>, keyDep: string) {
  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Immediate crisp hero typography reveal
      const heroTargets = root.querySelectorAll('.gsap-hero');
      if (heroTargets.length > 0) {
        gsap.fromTo(
          heroTargets,
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            stagger: 0.1,
            ease: 'power3.out',
            clearProps: 'transform,opacity',
          }
        );
      }

      // Subtle hero backdrop parallax
      const parallaxTargets = root.querySelectorAll('.gsap-parallax');
      parallaxTargets.forEach((el) => {
        gsap.to(el, {
          yPercent: 12,
          ease: 'none',
          scrollTrigger: {
            trigger: el.parentElement || el,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      });

      // Editorial scroll reveals
      const reveals = root.querySelectorAll('.gsap-reveal');
      reveals.forEach((el) => {
        gsap.fromTo(
          el,
          { y: 28, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            ease: 'power2.out',
            clearProps: 'transform,opacity',
            scrollTrigger: {
              trigger: el,
              start: 'top 86%',
              once: true,
            },
          }
        );
      });
    }, root);

    return () => {
      ctx.revert();
    };
  }, [containerRef, keyDep]);
}
