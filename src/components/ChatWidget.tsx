"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";

// Pages that do NOT contain the quote form (which collects phone + SMS
// consent) are the only ones allowed to show the chat widget. GHL's
// compliance checklist rejects a phone/SMS-consent form on any page where
// the chat widget is also embedded ("Multiple Opt-ins"), so the widget is
// scoped OFF everywhere the QuoteForm renders: "/", "/contact",
// "/services/[slug]", "/areas/[slug]".
const NO_FORM_PATHS = ["/areas", "/gallery", "/services"];

export function ChatWidget() {
  const pathname = usePathname();
  const allowed = NO_FORM_PATHS.includes(pathname);

  if (!allowed) return null;

  return (
    <Script
      src="https://widgets.leadconnectorhq.com/loader.js"
      data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
      data-widget-id="6a9a051dba70a028e7c2e8b5"
      data-source="WEB_USER"
      strategy="afterInteractive"
    />
  );
}
