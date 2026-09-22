import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import legal from "@/lib/legal-content.json";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How TUS Shop Inc., The Upgrade Shop, handles quote requests, contact information, website analytics, and text messaging.",
  alternates: { canonical: `${site.url}/privacy-policy` },
};

export default function PrivacyPolicyPage() {
  return <LegalPage title="Privacy Policy" content={legal.privacy} otherHref="/terms-of-service" otherTitle="Terms of Service" />;
}
