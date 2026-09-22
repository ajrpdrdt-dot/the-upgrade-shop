import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import legal from "@/lib/legal-content.json";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Website, quote-request, and text-messaging terms for TUS Shop Inc., doing business as The Upgrade Shop.",
  alternates: { canonical: `${site.url}/terms-of-service` },
};

export default function TermsOfServicePage() {
  return <LegalPage title="Terms of Service" content={legal.terms} otherHref="/privacy-policy" otherTitle="Privacy Policy" />;
}
