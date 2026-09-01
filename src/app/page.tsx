import type { Metadata } from "next";
import Link from "next/link";
import { QuoteForm } from "@/components/QuoteForm";
import { ScrollHero } from "@/components/ScrollHero";
import { StructuredData } from "@/components/StructuredData";
import { cities, homeFaqs, services, shopPhotos, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Upgrade Shop | Performance and engine work in River Falls",
  description:
    "TUS Shop Inc. is The Upgrade Shop at 663 Valerie Ave, Unit 123, River Falls, WI 54022. Performance upgrades, general repair, and engine rebuilds for Hudson, River Falls, Stillwater, and nearby cities.",
  alternates: { canonical: site.url },
  openGraph: {
    title: "The Upgrade Shop | Performance and engine work in River Falls",
    description: "Luxury-grade repair and performance for European and high-end cars between Hudson and River Falls.",
    url: site.url,
    images: ["/assets/og.webp"],
  },
};

const schema = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AutoRepair",
      "@id": `${site.url}/#shop`,
      name: site.legalName,
      alternateName: site.brand,
      url: site.url,
      telephone: "+16513531243",
      email: site.email,
      image: `${site.url}/logo.png`,
      priceRange: "$$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.street,
        addressLocality: site.address.city,
        addressRegion: site.address.region,
        postalCode: site.address.postal,
        addressCountry: "US",
      },
      geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "09:00",
          closes: "14:00",
        },
      ],
      areaServed: cities.map((c) => ({ "@type": "City", name: `${c.name}, ${c.state}` })),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Automotive services",
        itemListElement: services.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.title, url: `${site.url}/services/${s.slug}` },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      name: site.brand,
      url: site.url,
      publisher: { "@id": `${site.url}/#shop` },
    },
    {
      "@type": "FAQPage",
      mainEntity: homeFaqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
});

export default function HomePage() {
  return (
    <main>
      <StructuredData json={schema} />
      <ScrollHero />

      <section className="chapter">
        <div className="wrap split">
          <div>
            <p className="mono">The atelier</p>
            <h2>A black-box shop for cars that still matter</h2>
            <p className="lede">
              TUS Shop Inc., The Upgrade Shop, is the performance-capable repair shop between River Falls and Hudson.
              Peyton Sherman built it for European, exotic, and modified cars that need diagnostics, engine work, and
              upgrades under one roof.
            </p>
            <p className="lede">
              The pin is 663 Valerie Ave, Unit 123, River Falls, WI 54022. Hudson is about five minutes north on Hwy 35.
              Downtown River Falls is about ten minutes south. Shop rates, no Crest View Drive traffic.
            </p>
            <a className="btn-ghost" href="/areas">
              Areas we serve
            </a>
          </div>
          <img src="/shop/bmw-m4-front.webp?v=hd" alt="White BMW M4 at The Upgrade Shop in River Falls" />
        </div>
      </section>

      <section className="chapter">
        <div className="wrap">
          <h2>Three disciplines. One bench.</h2>
          <p className="lede">
            Tire shops own wheels. Dealers own warranty. This shop owns the work those two will not mix: a timing job in
            the morning and a turbo install in the afternoon.
          </p>
        </div>
        {services.map((s, i) => (
          <div className="wrap split" key={s.slug} style={{ marginTop: i === 0 ? 0 : 56 }}>
            {i % 2 === 1 ? <img src={s.image} alt={s.imageAlt} /> : null}
            <div>
              <h2>{s.title}</h2>
              <p className="lede">{s.summary}</p>
              <ul className="list">
                {s.included.slice(0, 4).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>
                <Link className="btn-ghost" href={`/services/${s.slug}`}>
                  {s.title} in River Falls
                </Link>
              </p>
            </div>
            {i % 2 === 0 ? <img src={s.image} alt={s.imageAlt} /> : null}
          </div>
        ))}
      </section>

      <section className="chapter">
        <div className="wrap">
          <p className="mono">From the bay</p>
          <h2>BMWs on this floor, not stock photos</h2>
          <p className="lede">
            These shots are from Unit 123. M cars, 3 Series, and X5 work sit first. Other platforms still get booked;
            they just do not lead the site.
          </p>
          <div className="work-grid">
            {shopPhotos.map((p) => (
              <figure key={p.src}>
                <Link href="/gallery">
                  <img src={p.src} alt={p.alt} />
                </Link>
              </figure>
            ))}
          </div>
          <p style={{ marginTop: 28 }}>
            <Link className="btn-ghost" href="/gallery">
              Open the gallery
            </Link>
          </p>
        </div>
      </section>

      <section className="chapter">
        <div className="wrap">
          <h2>Cities we actually serve</h2>
          <p className="lede">
            Google only ranks what you declare. These are the towns The Upgrade Shop covers from the River Falls 54022
            address.
          </p>
          <div className="cities">
            {cities.map((c) => (
              <Link key={c.slug} href={`/areas/${c.slug}`}>
                <strong>
                  {c.name}, {c.state}
                </strong>
                <span className="mono">{c.drive}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="chapter">
        <div className="wrap split">
          <QuoteForm />
          <div>
            <h2>How a visit works</h2>
            <ul className="list">
              <li>
                <strong>Call or send the car.</strong> Name, phone, year make model, what is wrong. Nothing else.
              </li>
              <li>
                <strong>Inspect, then talk.</strong> You get the diagnosis before a parts order.
              </li>
              <li>
                <strong>Work, then document.</strong> Performance and engine jobs are photographed so you can see the
                build.
              </li>
            </ul>
            <p>
              <a className="btn-call" href={site.phoneHref}>
                {site.ctaCall}
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="chapter faq">
        <div className="wrap">
          <h2>Questions people actually ask</h2>
          {homeFaqs.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
