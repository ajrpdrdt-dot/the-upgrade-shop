import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Quote received",
  robots: { index: false, follow: false },
  alternates: { canonical: `${site.url}/thank-you` },
};

export default function ThankYouPage() {
  return (
    <main className="page-hero">
      <div className="wrap" style={{ maxWidth: 640 }}>
        <p className="crumbs">
          <Link href="/">Homepage</Link> / Quote received
        </p>
        <h1>We have the car</h1>
        <p className="lede">
          The Upgrade Shop has the quote request. Peyton or the shop will follow up. If it is urgent, call now.
        </p>
        <p>
          <a className="btn-call" href={site.phoneHref}>
            {site.ctaCall}
          </a>
        </p>
        <p style={{ marginTop: 28 }}>
          <Link className="btn-ghost" href="/">
            Back to the homepage
          </Link>
        </p>
      </div>
    </main>
  );
}
