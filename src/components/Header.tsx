"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cities, services, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();

  return (
    <header className={path === "/" ? "site-header overlay" : "site-header"}>
      <div className="wrap">
        <Link href="/" className="brand" aria-label="The Upgrade Shop home">
          <img src="/logo-clear.png" alt="TUS The Upgrade Shop" />
        </Link>
        <button
          className="menu-btn"
          type="button"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
        <nav id="site-nav" className={open ? "nav open" : "nav"}>
          <Link href="/" onClick={() => setOpen(false)}>
            Homepage
          </Link>
          <div className="drop">
            <button type="button" aria-haspopup="true">
              Services
            </button>
            <div className="drop-panel" role="menu">
              <Link href="/services" onClick={() => setOpen(false)}>
                All services
              </Link>
              {services.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} onClick={() => setOpen(false)}>
                  {s.nav}
                </Link>
              ))}
            </div>
          </div>
          <div className="drop">
            <button type="button" aria-haspopup="true">
              Areas we serve
            </button>
            <div className="drop-panel" role="menu">
              <Link href="/areas" onClick={() => setOpen(false)}>
                All areas
              </Link>
              {cities.map((c) => (
                <Link key={c.slug} href={`/areas/${c.slug}`} onClick={() => setOpen(false)}>
                  {c.name}, {c.state}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/gallery" onClick={() => setOpen(false)}>
            Gallery
          </Link>
          <a className="nav-cta" href={site.phoneHref}>
            {site.ctaCall}
          </a>
        </nav>
      </div>
    </header>
  );
}
