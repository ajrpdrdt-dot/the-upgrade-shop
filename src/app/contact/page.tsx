import type { Metadata } from "next";
import Link from "next/link";
import { QuoteForm } from "@/components/QuoteForm";
import { shopBuilding, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Call The Upgrade Shop at ${site.phone} or request a quote. ${site.nap}. Monday to Friday 8 to 6, Saturday 9 to 2.`,
  alternates: { canonical: `${site.url}/contact` },
};

export default function ContactPage() {
  return (
    <main className="page-hero">
      <div className="wrap split">
        <div>
          <p className="crumbs">
            <Link href="/">Homepage</Link> / Contact
          </p>
          <h1>Call the shop</h1>
          <p className="lede">
            Four fields. Name, phone, the car, and what is wrong. Or skip the form and dial {site.phone}.
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
          <img src={shopBuilding.src} alt={shopBuilding.alt} />
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
