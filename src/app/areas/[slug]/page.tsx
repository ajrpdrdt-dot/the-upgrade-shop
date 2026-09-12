import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { QuoteForm } from "@/components/QuoteForm";
import { StructuredData } from "@/components/StructuredData";
import { cities, services, shopBuilding, site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return cities.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = cities.find((x) => x.slug === slug);
  if (!c) return {};
  return {
    title: `Auto repair in ${c.name}, ${c.state}`,
    description: `Auto repair, performance upgrades, and engine rebuilds for ${c.name}, ${c.state} at TUS Shop Inc., The Upgrade Shop. Call ${site.phone}.`,
    alternates: { canonical: `${site.url}/areas/${c.slug}` },
  };
}

export default async function CityPage({ params }: Props) {
  const { slug } = await params;
  const c = cities.find((x) => x.slug === slug);
  if (!c) notFound();

  const json = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Auto repair in ${c.name}, ${c.state}`,
    provider: { "@type": "AutoRepair", name: site.legalName, address: site.nap },
    areaServed: `${c.name}, ${c.state}`,
    url: `${site.url}/areas/${c.slug}`,
  });

  return (
    <main className="page-hero">
      <StructuredData json={json} />
      <div className="wrap">
        <p className="crumbs">
          <Link href="/">Homepage</Link> / <Link href="/areas">Areas we serve</Link> / {c.name}
        </p>
        <h1>
          Auto repair in {c.name}, {c.state}
        </h1>
        <p className="lede">{c.pitch}</p>
        <p className="lede">{c.drive} The shop is {site.nap}.</p>
        <div className="cta-row" style={{ justifyContent: "flex-start", marginBottom: 28 }}>
          <a className="btn-call" href={site.phoneHref}>
            {site.ctaCall}
          </a>
        </div>
      </div>

      <section className="chapter">
        <div className="wrap">
          <h2>What {c.name} drivers book</h2>
          <p className="lede">
            The Upgrade Shop is not a tire warehouse and not a dealer quick lane. {c.name} customers come for
            performance upgrades, general repair, and engine swaps when the local pack will not touch a turbo, a
            European chassis, or a rebuild.
          </p>
          <ul className="list">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`}>
                  <strong>{s.title}.</strong> {s.summary}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="chapter">
        <div className="wrap split">
          <img src={shopBuilding.src} alt={shopBuilding.alt} />
          <div>
            <h2>Find Unit 123 from {c.name}</h2>
            <p className="lede">
              {c.drive} Look for Troy Condo Garages / Valerie Ave, Unit 123. Do not use the landlord marketing
              address of Hudson, WI 54016. The canonical listing is River Falls, WI 54022.
            </p>
          </div>
        </div>
      </section>

      <section className="chapter">
        <div className="wrap split">
          <div>
            <h2>Map to the shop</h2>
            <iframe
              title={`Map to ${site.legalName}`}
              src={`https://maps.google.com/maps?q=${encodeURIComponent(site.nap)}&t=k&z=17&output=embed`}
              width="100%"
              height="320"
              style={{ border: "1px solid var(--line)" }}
              loading="lazy"
            />
          </div>
          <QuoteForm heading={`Quote from ${c.name}`} />
        </div>
      </section>
    </main>
  );
}
