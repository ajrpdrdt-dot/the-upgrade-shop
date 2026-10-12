import type { Metadata } from "next";
import Link from "next/link";
import { StructuredData } from "@/components/StructuredData";
import { services, site } from "@/lib/site";
import { ShopImg } from "@/components/ShopImg";
import { makePages } from "@/lib/page-sections";

export const metadata: Metadata = {
  title: { absolute: "BMW, Audi & Performance Car Services | The Upgrade Shop" },
  description:
    "Performance upgrades, suspension, engine swaps and general repair for BMW, Audi, Mercedes and other high-end cars. Get a clear quote before work starts.",
  alternates: { canonical: `${site.url}/services` },
};

const json = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${site.url}/services#webpage`,
  url: `${site.url}/services`,
  name: "Services",
  isPartOf: { "@id": `${site.url}/#website` },
  about: { "@id": `${site.url}/#shop` },
  mainEntity: {
    "@type": "OfferCatalog",
    name: "Automotive services",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.title, url: `${site.url}/services/${s.slug}` },
    })),
  },
});

export default function ServicesIndex() {
  return (
    <main className="page-hero">
      <StructuredData json={json} />
      <div className="wrap">
        <p className="crumbs">
          <Link href="/">Homepage</Link> / Services
        </p>
        <h1>Services for high-end cars</h1>
        <p className="lede">
          The Upgrade Shop does not split your car across three vendors. Performance, repair, and engine work are
          scheduled on the same bench in River Falls.
        </p>
        {services.map((s) => (
          <article className="chapter" key={s.slug} style={{ paddingLeft: 0, paddingRight: 0 }}>
            <div className="split">
              <div>
                <h2>{s.title}</h2>
                <p className="lede">{s.summary}</p>
                <Link className="btn-ghost" href={`/services/${s.slug}`}>
                  {s.h1}
                </Link>
              </div>
              <ShopImg src={s.image} alt={s.imageAlt} />
            </div>
          </article>
        ))}
        <article className="chapter" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <h2>Repair by make</h2>
          <p className="lede">
            BMW is most of the work on this floor. Audi and Mercedes-Benz owners get the same diagnosis-first approach.
          </p>
          <p>
            {makePages.map((m) => (
              <span key={m.slug}>
                <Link className="btn-ghost" href={`/${m.slug}`} style={{ marginRight: 18 }}>
                  {m.make} repair
                </Link>
              </span>
            ))}
          </p>
        </article>
      </div>
    </main>
  );
}
