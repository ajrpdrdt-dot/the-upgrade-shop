import type { Metadata } from "next";
import Link from "next/link";
import { StructuredData } from "@/components/StructuredData";
import { guides } from "@/lib/guides";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Repair and performance guides",
  description:
    "Practical guides from The Upgrade Shop in River Falls, WI: what to tell the shop, what to ask at an inspection, and how to review scope before you approve work.",
  alternates: { canonical: `${site.url}/guides` },
};

export default function GuidesPage() {
  const json = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Homepage", item: site.url },
      { "@type": "ListItem", position: 2, name: "Guides", item: `${site.url}/guides` },
    ],
  });

  return (
    <main className="page-hero">
      <StructuredData json={json} />
      <div className="wrap">
        <p className="crumbs">
          <Link href="/">Homepage</Link> / Guides
        </p>
        <h1>Guides</h1>
        <p className="lede">What to tell the shop, what to ask, and how to review scope before you approve work.</p>
        <ul className="list">
          {guides.map((g) => (
            <li key={g.slug}>
              <strong>
                <Link href={`/guides/${g.slug}`}>{g.h1}</Link>
              </strong>
              <br />
              {g.description}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
