import type { Metadata } from "next";
import Link from "next/link";
import { StructuredData } from "@/components/StructuredData";
import { galleryPhotos, site } from "@/lib/site";

const featured = galleryPhotos[0];

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "BMW work photos from TUS Shop Inc., The Upgrade Shop at 663 Valerie Ave, Unit 123, River Falls, WI 54022. M cars, 3 Series, and X5 jobs from this floor.",
  alternates: { canonical: `${site.url}/gallery` },
  openGraph: {
    title: "Gallery | The Upgrade Shop",
    description: "Real BMW work from Unit 123 in River Falls. Not stock photos.",
    url: `${site.url}/gallery`,
    images: [featured.src],
  },
};

const json = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  "@id": `${site.url}/gallery#webpage`,
  url: `${site.url}/gallery`,
  name: "Gallery",
  isPartOf: { "@id": `${site.url}/#website` },
  about: { "@id": `${site.url}/#shop` },
});

export default function GalleryPage() {
  return (
    <main className="page-hero">
      <StructuredData json={json} />
      <div className="wrap">
        <p className="crumbs">
          <Link href="/">Homepage</Link> / Gallery
        </p>
        <p className="mono">From Unit 123</p>
        <h1>Gallery</h1>
        <p className="lede">
          BMWs lead this page. These are cars that sat on this floor at {site.nap}, not a stock overlay.
        </p>
      </div>

      <section className="chapter" style={{ paddingTop: 12, borderTop: 0 }}>
        <div className="wrap">
          <h2>More from the bay</h2>
          <p className="lede">M4 and M3 work, 3 Series suspension, X5 service, and exhaust jobs photographed here.</p>
          <div className="gallery-board">
            {galleryPhotos.map((p, i) => (
              <figure key={p.src} className={i === 0 ? "gallery-lead" : undefined}>
                <img
                  src={p.src}
                  alt={p.alt}
                  width={2400}
                  height={3200}
                  loading={i < 2 ? "eager" : "lazy"}
                  decoding="async"
                />
              </figure>
            ))}
          </div>
          <p style={{ marginTop: 36 }}>
            <a className="btn-call" href={site.phoneHref}>
              {site.ctaCall}
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
