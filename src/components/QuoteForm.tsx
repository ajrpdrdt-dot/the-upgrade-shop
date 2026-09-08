export function QuoteForm({ heading = "Tell us the car" }: { heading?: string }) {
  return (
    <div className="quote-box">
      <h2 style={{ marginTop: 0 }}>{heading}</h2>
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/93fCmkydw2MYvHb2D9Mc"
        style={{ width: "100%", height: "100%", minHeight: 620, border: "none", borderRadius: 8 }}
        id="inline-93fCmkydw2MYvHb2D9Mc"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Tus Lead form "
        data-height="991"
        data-layout-iframe-id="inline-93fCmkydw2MYvHb2D9Mc"
        data-form-id="93fCmkydw2MYvHb2D9Mc"
        data-cookie-consent="true"
        data-cookie-consent-provider="auto"
        title="Tus Lead form "
      />
    </div>
  );
}
