import type { Metadata } from "next";
import Link from "next/link";
import { services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Performance upgrades, general repair, and engine swaps and rebuilds at TUS Shop Inc., The Upgrade Shop in River Falls, WI, serving Hudson and the St. Croix valley.",
  alternates: { canonical: `${site.url}/services` },
};

export default function ServicesIndex() {
  return (
    <main className="page-hero">
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
              <img src={s.image} alt={s.imageAlt} />
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
