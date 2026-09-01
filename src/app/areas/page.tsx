import type { Metadata } from "next";
import Link from "next/link";
import { cities, shopBuilding, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Areas we serve",
  description:
    "The Upgrade Shop serves Hudson, River Falls, Stillwater, Woodbury, Afton, Lakeland, Ellsworth, and Prescott from 663 Valerie Ave, Unit 123, River Falls, WI 54022.",
  alternates: { canonical: `${site.url}/areas` },
};

export default function AreasPage() {
  return (
    <main className="page-hero">
      <div className="wrap">
        <p className="crumbs">
          <Link href="/">Homepage</Link> / Areas we serve
        </p>
        <h1>Areas we serve</h1>
        <p className="lede">
          TUS Shop Inc. is a River Falls shop that sits close enough to Hudson to work both markets. The legal address
          stays {site.nap}. That string is the one we use everywhere.
        </p>
        <div className="split" style={{ marginBottom: 48 }}>
          <img src={shopBuilding.src} alt={shopBuilding.alt} />
          <div>
            <p className="mono">Unit 123</p>
            <h2>The bay you actually drive to</h2>
            <p className="lede">
              Look for the left bay at 663 Valerie Ave, Unit 123. BMWs in the photos are cars that were here, not a
              stock overlay.
            </p>
          </div>
        </div>
        <div className="cities">
          {cities.map((c) => (
            <Link key={c.slug} href={`/areas/${c.slug}`}>
              <strong>
                {c.name}, {c.state}
              </strong>
              <span>{c.drive}</span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
