type LegalPageProps = {
  page: "privacy" | "terms";
};

function LegalPage({ page }: LegalPageProps) {
  if (page === "privacy") {
    return (
      <main className="legal-page section-wrap">
        <p className="eyebrow">Website information</p>
        <h1>Privacy Policy</h1>
        <p className="legal-updated">Last updated: 14 October 2026</p>
        <p>This policy explains what information may be handled when you visit the Applexpertz website or contact the MacBook repair center.</p>

        <h2>Information you choose to share</h2>
        <p>The enquiry form on this website prepares a message containing the MacBook model and issue you select. It does not submit that message to an Applexpertz server. The message is shared only if you follow the WhatsApp link and send it. You may also choose to contact us by phone or email and share information that way.</p>

        <h2>WhatsApp and email</h2>
        <p>WhatsApp and email are provided by third parties. If you use them to contact Applexpertz, those providers will process information according to their own privacy terms. Please avoid sending passwords, payment credentials, or other sensitive account information.</p>

        <h2>Website and service providers</h2>
        <p>The website does not include an online payment system, account registration, advertising pixels, or an analytics tool. The web hosting provider may process basic connection information, such as an IP address, browser details, and request time, to deliver and protect the site.</p>
        <p>The directions link opens Google Maps only when you choose it. Google then handles your visit under its own privacy terms.</p>

        <h2>How to contact us about your information</h2>
        <p>For a privacy question or request about information you have sent to Applexpertz, email <a href="mailto:dr.applexpertz1@gmail.com">dr.applexpertz1@gmail.com</a>. Information held by WhatsApp, your email provider, or the website host may need to be managed with that provider directly. Requests are handled subject to applicable law.</p>

        <h2>Changes to this policy</h2>
        <p>This page may be updated when the website or its handling of information changes. The date at the top indicates the latest revision.</p>
      </main>
    );
  }

  return (
    <main className="legal-page section-wrap">
      <p className="eyebrow">Website information</p>
      <h1>Terms and Conditions</h1>
      <p className="legal-updated">Last updated: 14 October 2026</p>
      <p>These terms apply to your use of the Applexpertz website. By using the site, you agree to use it lawfully and not to interfere with its operation.</p>

      <h2>Website information and repair enquiries</h2>
      <p>The website describes MacBook repair services and provides ways to contact the service center. Service descriptions are general information, not a diagnosis, price quote, promise of availability, or offer to perform a repair.</p>
      <p>The enquiry form prepares a WhatsApp message on your device. It does not book an appointment or send an enquiry until you choose to send the message. A repair, its price, timing, parts, and any applicable warranty must be discussed and confirmed separately with Applexpertz before work begins.</p>

      <h2>Your use of the site</h2>
      <p>Do not use the site to submit unlawful material, attempt to access systems without permission, or disrupt the site for others. You are responsible for checking that the model and issue in any enquiry are correct.</p>

      <h2>External services</h2>
      <p>Links to WhatsApp, Google Maps, telephone, and email open or use services outside this website. Their availability, content, and terms are controlled by their respective providers.</p>

      <h2>Website content</h2>
      <p>We take care when preparing website information, but service details may change and content may not cover every device or repair situation. Contact Applexpertz directly to discuss your specific MacBook before relying on information on this site.</p>

      <h2>Questions</h2>
      <p>For a question about these terms, email <a href="mailto:dr.applexpertz1@gmail.com">dr.applexpertz1@gmail.com</a>.</p>
    </main>
  );
}

export default LegalPage;
