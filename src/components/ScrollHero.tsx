"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";

// Mobile (< 768px), reduced-motion and data-saver visitors get the static poster only.
// Desktop loads the 720p film after the page is interactive so it never blocks LCP.
export function ScrollHero() {
  const video = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const v = video.current;
    if (!v) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const small = window.matchMedia("(max-width: 767px)").matches;
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    if (reduce || small || saveData) return;

    v.muted = true;
    v.defaultMuted = true;
    v.loop = true;
    v.playsInline = true;

    const onPlaying = () => setReady(true);
    v.addEventListener("playing", onPlaying);

    const load = () => {
      v.src = "/hero.mp4?v=720p";
      v.load();
      v.play().catch(() => {});
    };

    if (document.readyState === "complete") {
      window.setTimeout(load, 300);
    } else {
      window.addEventListener("load", () => window.setTimeout(load, 300), { once: true });
    }

    return () => v.removeEventListener("playing", onPlaying);
  }, []);

  return (
    <section className="hero-film" aria-label="The Upgrade Shop film">
      <div className="hero-sticky">
        <img
          className="poster"
          src="/assets/hero-poster.webp"
          srcSet="/assets/hero-poster-768.webp 768w, /assets/hero-poster.webp 1280w"
          sizes="100vw"
          width={1280}
          height={720}
          alt=""
          fetchPriority="high"
          decoding="async"
          style={{ opacity: ready ? 0 : 1 }}
        />
        <video ref={video} muted loop playsInline preload="none" aria-hidden="true" />
        <div className="hero-scrim" />
        <div className="hero-copy">
          <h1>Built for serious metal</h1>
          <p>Performance, repair, and engine work for European and high-end cars.</p>
          <div className="cta-row">
            <a className="btn-call" href={site.phoneHref}>
              {site.ctaCall}
            </a>
            <a className="btn-quote" href="/contact">
              {site.ctaQuote}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
