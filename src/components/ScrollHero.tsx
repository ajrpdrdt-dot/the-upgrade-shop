"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";

export function ScrollHero() {
  const video = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const v = video.current;
    if (!v) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      v.pause();
      return;
    }

    v.muted = true;
    v.defaultMuted = true;
    v.loop = true;
    v.playsInline = true;

    const start = () => {
      const attempt = v.play();
      if (attempt) {
        attempt.then(() => setReady(true)).catch(() => {
          const resume = () => {
            v.play().then(() => setReady(true)).catch(() => {});
            window.removeEventListener("pointerdown", resume);
          };
          window.addEventListener("pointerdown", resume, { once: true });
        });
      }
    };

    if (v.readyState >= 2) start();
    else v.addEventListener("canplay", start, { once: true });

    const onPlaying = () => setReady(true);
    v.addEventListener("playing", onPlaying);
    return () => v.removeEventListener("playing", onPlaying);
  }, []);

  return (
    <section className="hero-film" aria-label="The Upgrade Shop film">
      <div className="hero-sticky">
        <img
          className="poster"
          src="/assets/hero-poster.jpg"
          alt=""
          style={{ opacity: ready ? 0 : 1 }}
        />
        <video
          ref={video}
          src="/hero.mp4?v=h264loop"
          poster="/assets/hero-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
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
