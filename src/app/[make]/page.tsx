import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { QuoteForm } from "@/components/QuoteForm";
import { ShopImg } from "@/components/ShopImg";
import { StructuredData } from "@/components/StructuredData";
import { makePages, sharedSections } from "@/lib/page-sections";
import { cities, services, site } from "@/lib/site";

type Props = { params: Promise<{ make: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return makePages.map((m) => ({ make: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { make } = await params;
  const m = makePages.find((x) => x.slug === make);
  if (!m) return {};
  return {
    title: { absolute: m.title },
    description: m.metaDescription,
    alternates: { canonical: `${site.url}/${m.slug}` },
    openGraph: { title: m.title, description: m.summary, url: `${site.url}/${m.slug}`, images: [m.image] },
  };
}

export default async function MakePage({ params }: Props) {
  const { make } = await params;
  const m = makePages.find((x) => x.slug === make);
  if (!m) notFound();

  const json = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: `${m.make} repair`,
        serviceType: `${m.make} repair and maintenance`,
        url: `${site.url}/${m.slug}`,
        provider: { "@id": `${site.url}/#shop` },
        areaServed: cities.map((c) => `${c.name}, ${c.state}`),
        description: m.summary,
      },
      {
        "@type": "FAQPage",
        mainEntity: m.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Homepage", item: site.url },
          { "@type": "ListItem", position: 2, name: "Services", item: `${site.url}/services` },
          { "@type": "ListItem", position: 3, name: `${m.make} repair`, item: `${site.url}/${m.slug}` },
        ],
      },
    ],
  });

  return (
    <main className="page-hero">
      <StructuredData json={json} />
      <div className="wrap">
        <p className="crumbs">
          <Link href="/">Homepage</Link> / <Link href="/services">Services</Link> / {m.make} repair
        </p>
        <h1>{m.h1}</h1>
        <p className="lede">{m.summary}</p>
        <div className="cta-row" style={{ justifyContent: "flex-start", marginBottom: 36 }}>
          <a className="btn-call" href={site.phoneHref}>
            {site.ctaCall}
          </a>
          <a className="btn-quote" href="#quote">
            {site.ctaQuote}
          </a>
        </div>
      </div>

      <div className="wrap split">
        <ShopImg src={m.image} alt={m.imageAlt} priority />
        <div>
          <h2>{m.sections[0].h2}</h2>
          {m.sections[0].paragraphs.map((p) => (
            <p className="lede" key={p.slice(0, 40)}>
              {p}
            </p>
          ))}
        </div>
      </div>

      {[...m.sections.slice(1), ...sharedSections].map((sec) => (
        <section className="chapter" key={sec.h2}>
          <div className="wrap">
            <h2>{sec.h2}</h2>
            {sec.paragraphs.map((p) => (
              <p className="lede" key={p.slice(0, 40)}>
                {p}
              </p>
            ))}
            {sec.bullets ? (
              <ul className="list">
                {sec.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            ) : null}
          </div>
        </section>
      ))}

      <section className="chapter">
        <div className="wrap">
          <h2>From the shop floor</h2>
          <div className="work-grid">
            {m.gallery.map((p) => (
              <figure key={p.src}>
                <ShopImg src={p.src} alt={p.alt} sizes="(max-width: 900px) 50vw, 25vw" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="chapter faq">
        <div className="wrap">
          <h2>{m.make} questions</h2>
          {m.faqs.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="chapter">
        <div className="wrap">
          <h2>Services for your {m.make}</h2>
          <p>
            {services.map((s) => (
              <span key={s.slug}>
                <Link className="btn-ghost" href={`/services/${s.slug}`} style={{ marginRight: 18 }}>
                  {s.title}
                </Link>
              </span>
            ))}
          </p>
          <p className="lede" style={{ marginTop: 24 }}>
            {site.legalName}, {site.nap}. {site.phone}.
          </p>
        </div>
      </section>

      <section className="chapter" id="quote">
        <div className="wrap" style={{ maxWidth: 640 }}>
          <QuoteForm heading={`Request a quote for your ${m.make}`} />
        </div>
      </section>
    </main>
  );
}
