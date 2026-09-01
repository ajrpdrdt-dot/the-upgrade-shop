import Link from "next/link";
import { cities, services, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap grid">
        <div>
          <img src="/logo-clear.png" alt="TUS The Upgrade Shop" width={180} height={72} />
          <p className="nap">{site.legalName}</p>
          <p className="nap">{site.nap}</p>
          <p>
            <a href={site.phoneHref}>{site.phone}</a>
            <br />
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
          {site.hours.map((h) => (
            <p key={h.days}>
              {h.days}: {h.time}
            </p>
          ))}
        </div>
        <div>
          <h3>Services</h3>
          {services.map((s) => (
            <p key={s.slug}>
              <Link href={`/services/${s.slug}`}>{s.nav}</Link>
            </p>
          ))}
          <p>
            <Link href="/gallery">Gallery</Link>
          </p>
          <p>
            <Link href="/contact">{site.ctaQuote}</Link>
          </p>
        </div>
        <div>
          <h3>Areas we serve</h3>
          {cities.map((c) => (
            <p key={c.slug}>
              <Link href={`/areas/${c.slug}`}>
                {c.name}, {c.state}
              </Link>
            </p>
          ))}
        </div>
      </div>
    </footer>
  );
}

export function StickyBar() {
  return (
    <div className="sticky-bar">
      <a className="call" href={site.phoneHref}>
        {site.ctaCall}
      </a>
      <a href="/contact">{site.ctaQuote}</a>
    </div>
  );
}
