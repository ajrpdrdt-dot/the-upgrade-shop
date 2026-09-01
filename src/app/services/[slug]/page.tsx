import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { QuoteForm } from "@/components/QuoteForm";
import { StructuredData } from "@/components/StructuredData";
import { cities, services, site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return {};
  return {
    title: s.title,
    description: `${s.title} in River Falls and Hudson, WI. ${s.summary} Call ${site.phone}.`,
    alternates: { canonical: `${site.url}/services/${s.slug}` },
    openGraph: {
      title: `${s.title} | The Upgrade Shop`,
      description: s.summary,
      url: `${site.url}/services/${s.slug}`,
      images: [s.image],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();
  const siblings = services.filter((x) => x.slug !== s.slug);

  const json = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: s.title,
        url: `${site.url}/services/${s.slug}`,
        provider: { "@type": "AutoRepair", name: site.legalName, telephone: "+16513531243" },
        areaServed: cities.map((c) => `${c.name}, ${c.state}`),
        description: s.summary,
      },
      {
        "@type": "FAQPage",
        mainEntity: s.faqs.map((f) => ({
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
          { "@type": "ListItem", position: 3, name: s.title, item: `${site.url}/services/${s.slug}` },
        ],
      },
    ],
  });

  return (
    <main className="page-hero">
      <StructuredData json={json} />
      <div className="wrap">
        <p className="crumbs">
          <Link href="/">Homepage</Link> / <Link href="/services">Services</Link> / {s.title}
        </p>
        <h1>{s.h1}</h1>
        <p className="lede">{s.summary}</p>
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
        <img src={s.image} alt={s.imageAlt} />
        <div>
          <h2>When you need this work</h2>
          <ul className="list">
            {s.symptoms.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <section className="chapter">
        <div className="wrap">
          <h2>Work on this bench</h2>
          <p className="lede">BMW jobs lead this page because that is the work the shop wants seen first.</p>
          <div className="work-grid">
            {s.gallery.map((p) => (
              <figure key={p.src}>
                <img src={p.src} alt={p.alt} />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="chapter">
        <div className="wrap">
          <h2>What is included</h2>
          <p className="lede">
            {site.legalName} books {s.title.toLowerCase()} at {site.nap}. Hudson, Stillwater, Woodbury, and River Falls
            drivers get the same inspection, the same parts standard, and a call before we order.
          </p>
          <ul className="list">
            {s.included.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="chapter">
        <div className="wrap">
          <h2>Why this shop, not the Crest View cluster</h2>
          <p className="lede">
            Hudson Auto Center, Tire Pros, and the dealer row on Crest View Drive win on volume. The Upgrade Shop wins
            on mixed work: a daily-driver repair and a turbo or rebuild in the same building, with Peyton Sherman on
            the job instead of a rotating writer.
          </p>
          <p className="lede">
            Competitors in this market rarely publish price ranges, warranties, or real work photos. We will tell you
            the range, the downtime, and whether the car is safe to drive home. If it is not, we say that first.
          </p>
        </div>
      </section>

      <section className="chapter faq">
        <div className="wrap">
          <h2>Questions about {s.title.toLowerCase()}</h2>
          {s.faqs.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="chapter">
        <div className="wrap">
          <h2>Related work and towns</h2>
          <p>
            {siblings.map((x) => (
              <span key={x.slug}>
                <Link className="btn-ghost" href={`/services/${x.slug}`} style={{ marginRight: 18 }}>
                  {x.title}
                </Link>
              </span>
            ))}
          </p>
          <p style={{ marginTop: 24 }}>
            {cities.slice(0, 6).map((c) => (
              <span key={c.slug}>
                <Link href={`/areas/${c.slug}`} style={{ marginRight: 16, color: "var(--mute)" }}>
                  {c.name}
                </Link>
              </span>
            ))}
          </p>
        </div>
      </section>

      <section className="chapter" id="quote">
        <div className="wrap" style={{ maxWidth: 640 }}>
          <QuoteForm heading={`Request a quote for ${s.title.toLowerCase()}`} />
        </div>
      </section>
    </main>
  );
}
