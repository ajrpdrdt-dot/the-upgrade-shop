"use client";

import { FormEvent, useState } from "react";
import { services, site } from "@/lib/site";

export function QuoteForm({ heading = "Tell us the car" }: { heading?: string }) {
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("https://formsubmit.co/ajax/" + site.email, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!res.ok) throw new Error("send failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="quote-box" onSubmit={onSubmit}>
      <h2 style={{ marginTop: 0 }}>{heading}</h2>
      <input type="hidden" name="_subject" value="TUS Shop quote request" />
      <label htmlFor="name">Name</label>
      <input id="name" name="name" autoComplete="name" required />
      <label htmlFor="phone">Phone</label>
      <input id="phone" name="phone" type="tel" autoComplete="tel" required />
      <label htmlFor="vehicle">Vehicle year, make, model</label>
      <input id="vehicle" name="vehicle" placeholder="2018 Porsche 911" required />
      <label htmlFor="service">Service needed</label>
      <select id="service" name="service" defaultValue={services[0].title}>
        {services.map((s) => (
          <option key={s.slug}>{s.title}</option>
        ))}
      </select>
      <label htmlFor="issue">What is wrong</label>
      <textarea id="issue" name="issue" required />
      <button className="btn-call" type="submit">
        {site.ctaQuote}
      </button>
      {status === "sent" ? <p className="status">Received. We will call you back.</p> : null}
      {status === "error" ? (
        <p className="status">
          Send failed. Call the shop at <a href={site.phoneHref}>{site.phone}</a>.
        </p>
      ) : null}
    </form>
  );
}
