import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { QuoteForm } from "@/components/QuoteForm";
import { StructuredData } from "@/components/StructuredData";
import { getGuide, guides } from "@/lib/guides";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) return {};
  const url = `${site.url}/guides/${g.slug}`;
  return {
    title: g.title,
    description: g.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: `${g.h1} | The Upgrade Shop`,
      description: g.description,
      url,
      publishedTime: g.datePublished,
      modifiedTime: g.dateModified,
    },
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) notFound();
  const url = `${site.url}/guides/${g.slug}`;

  const json = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: g.h1,
        description: g.description,
        datePublished: g.datePublished,
        dateModified: g.dateModified,
        mainEntityOfPage: url,
        author: { "@type": "AutoRepair", name: site.legalName, url: site.url },
        publisher: { "@type": "AutoRepair", name: site.legalName, url: site.url },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: g.faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Homepage", item: site.url },
          { "@type": "ListItem", position: 2, name: "Guides", item: `${site.url}/guides` },
          { "@type": "ListItem", position: 3, name: g.h1, item: url },
        ],
      },
    ],
  });

  return (
    <main className="page-hero">
      <StructuredData json={json} />
      <div className="wrap">
        <p className="crumbs">
          <Link href="/">Homepage</Link> / <Link href="/guides">Guides</Link> / {g.h1}
        </p>
        <h1>{g.h1}</h1>
        <p className="lede">{g.intro}</p>
        <div className="cta-row" style={{ justifyContent: "flex-start", marginBottom: 36 }}>
          <a className="btn-call" href={site.phoneHref}>
            {site.ctaCall}
          </a>
          <a className="btn-quote" href="#quote">
            {site.ctaQuote}
          </a>
        </div>
        <article className="guide-prose" dangerouslySetInnerHTML={{ __html: g.bodyHtml }} />
      </div>

      <section className="chapter faq">
        <div className="wrap">
          <h2>Questions before an inspection</h2>
          {g.faqs.map((f) => (
            <details key={f.question}>
              <summary>{f.question}</summary>
              <p className="guide-prose" dangerouslySetInnerHTML={{ __html: f.answerHtml }} />
            </details>
          ))}
        </div>
      </section>

      <section className="chapter" id="quote">
        <div className="wrap" style={{ maxWidth: 640 }}>
          <QuoteForm heading="Describe the symptom and request an inspection" />
        </div>
      </section>
    </main>
  );
}
