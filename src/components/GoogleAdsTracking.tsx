"use client";

import { useEffect } from "react";
import { site } from "@/lib/site";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const GHL_ORIGINS = new Set([
  "https://api.leadconnectorhq.com",
  "https://link.msgsndr.com",
]);

function parseGhlPayload(data: unknown) {
  if (!Array.isArray(data)) return null;

  for (const value of data) {
    if (typeof value !== "string" || !value.trim().startsWith("{")) continue;

    try {
      const payload = JSON.parse(value) as Record<string, unknown>;
      const hasIdentity =
        typeof payload.full_name === "string" ||
        typeof payload.name === "string" ||
        typeof payload.phone === "string";
      const hasContactId =
        typeof payload.customer_id === "string" ||
        typeof payload.contact_id === "string" ||
        typeof payload.contactId === "string";

      if (hasIdentity && hasContactId) return payload;
    } catch {
      // Ignore non-JSON iframe messages used for resizing and styling.
    }
  }

  return null;
}

export function GoogleAdsTracking() {
  useEffect(() => {
    let formLeadRecorded = false;

    const record = (eventName: string, parameters: Record<string, unknown>) => {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: eventName, ...parameters });
      window.gtag?.("event", eventName, parameters);
    };

    const onMessage = (event: MessageEvent) => {
      if (!GHL_ORIGINS.has(event.origin) || formLeadRecorded) return;

      const payload = parseGhlPayload(event.data);
      if (!payload) return;

      formLeadRecorded = true;
      const transactionId = String(
        payload.customer_id || payload.contact_id || payload.contactId || `lead-${Date.now()}`,
      );
      record("generate_lead", {
        form_id: "93fCmkydw2MYvHb2D9Mc",
        form_name: "Tus Lead form",
        event_source: "ghl_iframe_embed",
        transaction_id: transactionId,
      });
      window.gtag?.("event", "conversion", {
        send_to: site.googleAdsLeadSendTo,
        value: 1,
        currency: "USD",
        transaction_id: transactionId,
      });
      window.location.assign(`/thank-you?transaction_id=${encodeURIComponent(transactionId)}`);
    };

    const onClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const phoneLink = target?.closest<HTMLAnchorElement>('a[href^="tel:"]');
      if (!phoneLink) return;

      record("phone_call_click", {
        link_url: phoneLink.href,
        event_source: "website",
      });
    };

    window.addEventListener("message", onMessage);
    document.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("message", onMessage);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return null;
}
