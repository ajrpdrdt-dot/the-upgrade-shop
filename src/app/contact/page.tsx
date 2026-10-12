import type { Metadata } from "next";
import Link from "next/link";
import { QuoteForm } from "@/components/QuoteForm";
import { StructuredData } from "@/components/StructuredData";
import { shopBuilding, site } from "@/lib/site";
import { ShopImg } from "@/components/ShopImg";

export const metadata: Metadata = {
  title: { absolute: "Contact The Upgrade Shop | Auto Repair in River Falls, WI" },
  description:
    "Call or request a quote from The Upgrade Shop in River Falls, WI. European and performance car repair, upgrades and diagnostics. Quick replies.",
  alternates: { canonical: `${site.url}/contact` },
};

const json = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${site.url}/contact#webpage`,
  url: `${site.url}/contact`,
  name: "Contact",
  isPartOf: { "@id": `${site.url}/#website` },
  about: { "@id": `${site.url}/#shop` },
});

export default function ContactPage() {
  return (
    <main className="page-hero">
      <StructuredData json={json} />
      <div className="wrap split">
        <div>
          <p className="crumbs">
            <Link href="/">Homepage</Link> / Contact
          </p>
          <h1>Call the shop</h1>
          <p className="lede">
            Three fields. Name, the car, and what is wrong. Or skip the form and dial {site.phone}.
          </p>
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
        <QuoteForm heading="Request a quote" />
      </div>
      <section className="chapter">
        <div className="wrap split">
          <ShopImg src={shopBuilding.src} alt={shopBuilding.alt} />
          <div>
            <h2>Walk in at Unit 123</h2>
            <p className="lede">
              The left bay at 663 Valerie Ave, Unit 123, River Falls, WI 54022. Call before you roll in if you need a
              lift reserved.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
