import { useState } from "react";
import type { FormEvent, ReactNode } from "react";

type IconName = "arrow" | "chevron" | "external" | "location" | "menu" | "phone" | "whatsapp" | "x";

const iconPaths: Record<IconName, ReactNode> = {
  arrow: <><path d="M4 12h15" /><path d="m13 6 6 6-6 6" /></>,
  chevron: <path d="m6 9 6 6 6-6" />,
  external: <><path d="M14 4h6v6M20 4l-9 9" /><path d="M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5" /></>,
  location: <><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2.2" /></>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
  phone: <path d="M6.5 3.5 9 3l2 5-2 1.5a15 15 0 0 0 5.5 5.5L16 13l5 2-.5 2.5c-.3 1.6-1.8 2.7-3.4 2.5C10.7 18.9 5.1 13.3 4 6.9 3.8 5.3 4.9 3.8 6.5 3.5Z" />,
  whatsapp: <><path d="M20 11.7a8 8 0 0 1-11.8 7.1L4 20l1.3-4A8 8 0 1 1 20 11.7Z" /><path d="M8.5 8.7c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.6 1.4c.1.3.1.5-.1.7l-.5.6c.5 1 1.2 1.7 2.2 2.2l.6-.5c.2-.2.4-.2.7-.1l1.4.6c.3.1.4.3.4.5v.5c0 .3 0 .5-.4.7-.4.2-1.3.4-2.6-.2-1.4-.6-3.1-2.2-3.9-3.3-.8-1.1-1.1-2.4-.1-3.1Z" /></>,
  x: <path d="m6 6 12 12M18 6 6 18" />,
};

function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  return <svg aria-hidden="true" className="icon" fill="none" height={size} viewBox="0 0 24 24" width={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6">{iconPaths[name]}</svg>;
}

function BrandMark() {
  return <span className="brand-seal" aria-hidden="true">MX</span>;
}

const services = [
  ["Display & Screen", "OEM-spec Retina & Liquid Retina replacements. Zero distortion."],
  ["Logic Board (Chip-Level)", "Dead board recovery, liquid damage ultrasonic cleaning, and short-circuit repair."],
  ["Battery & Thermal", "Original-capacity battery swaps and fresh thermal paste application."],
  ["Keyboard & Trackpad", "Top-case replacements and sticky key repairs."],
];

const comparisons = [
  ["Original diagnostics", "Included", "Often skipped"],
  ["ESD-safe workbench", "Class 100", "Not guaranteed"],
  ["Genuine Apple parts", "100% verified", "Variable"],
  ["Service warranty", "90 days", "7-30 days"],
  ["Factory-sealed adhesive", "Yes", "Rarely"],
];

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [family, setFamily] = useState("Air M-Series");
  const [symptom, setSymptom] = useState("No Power / Logic Board");
  const [fulfillment, setFulfillment] = useState("Walk-in to Kalyan Nagar Lab");
  const [formMessage, setFormMessage] = useState("");

  const handleTriage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormMessage(`${family} / ${symptom} / ${fulfillment} noted. We will confirm availability and your quote shortly.`);
  };

  const closeMenu = () => setMobileOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#top" aria-label="MacExperts home"><BrandMark /><span><strong>MacExperts</strong><small>Independent MacBook care</small></span></a>
          <nav className={`main-nav ${mobileOpen ? "is-open" : ""}`} aria-label="Primary navigation">
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#estimate" onClick={closeMenu}>Diagnostic</a>
            <a href="#comparison" onClick={closeMenu}>Our standard</a>
            <a href="#location" onClick={closeMenu}>Visit us</a>
          </nav>
          <div className="header-actions"><a className="header-phone" href="tel:+917022718776"><Icon name="phone" size={15} /> 70227 18776</a><a className="button button-light button-small" href="#estimate">Book a diagnosis <Icon name="arrow" size={14} /></a></div>
          <button className="menu-toggle" onClick={() => setMobileOpen((open) => !open)} aria-label="Toggle navigation" aria-expanded={mobileOpen}><Icon name={mobileOpen ? "x" : "menu"} size={22} /></button>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <img className="hero-image" src="/images/macexperts-bench.jpg" alt="Technician repairing a MacBook logic board at a precision repair bench" />
          <div className="hero-shade" />
          <div className="hero-inner section-wrap">
            <div className="hero-copy"><p className="eyebrow"><span /> Bengaluru / Kalyan Nagar</p><h1>Precision MacBook care, <em>without the guesswork.</em></h1><p className="hero-lede">A specialist repair centre for people who depend on their Mac. Same-day screens and batteries. Component-level logic board work.</p><div className="hero-actions"><a className="button button-light" href="#estimate">Reserve a diagnostic <Icon name="arrow" size={16} /></a><a className="hero-call" href="tel:+917022718776"><Icon name="phone" size={15} /> Talk to a Mac expert</a></div></div>
            <div className="hero-bottom"><span>MacExperts / 01</span><span>Precision repairs. Clear answers.</span><span>Scroll to explore <b>v</b></span></div>
          </div>
        </section>

        <section className="estimate section-wrap" id="estimate"><div className="section-intro"><span className="eyebrow"><span /> Reserve bench diagnostic</span><h2>Tell us what your<br /><em>Mac needs.</em></h2></div><form className="estimate-form triage-form" onSubmit={handleTriage}><label>MacBook family<select value={family} onChange={(event) => setFamily(event.target.value)}><option>Air M-Series</option><option>Pro 14/16&quot;</option><option>Pro 13&quot;</option><option>Intel Legacy</option></select><Icon name="chevron" size={14} /></label><label>Primary symptom<select value={symptom} onChange={(event) => setSymptom(event.target.value)}><option>No Power / Logic Board</option><option>Screen Glitch / Shatter</option><option>Liquid Ingress</option><option>Battery/Thermal</option></select><Icon name="chevron" size={14} /></label><label>Preferred fulfillment<select value={fulfillment} onChange={(event) => setFulfillment(event.target.value)}><option>Walk-in to Kalyan Nagar Lab</option><option>Insured Doorstep Pickup</option></select><Icon name="chevron" size={14} /></label><button className="button button-accent full-button" type="submit">Check Bench Availability &amp; Get Quote <Icon name="arrow" size={15} /></button><p className="form-result" aria-live="polite">{formMessage}</p></form></section>

        <section className="proof-strip"><div className="section-wrap proof-grid"><div><strong>15,000+</strong><span>MacBooks repaired</span></div><div><strong>100%</strong><span>Genuine Apple parts</span></div><div><strong>60 min</strong><span>Battery / screen service</span></div><div><strong>90 days</strong><span>Unconditional warranty</span></div></div></section>

        <section className="services section-wrap" id="services"><div className="section-intro"><span className="eyebrow"><span /> Services</span><h2>Clear repairs.<br /><em>No jargon.</em></h2></div><div className="service-grid">{services.map(([title, detail]) => <article className="service-card" key={title}><h3>{title}</h3><p>{detail}</p></article>)}</div></section>

        <section className="comparison section-wrap" id="comparison"><span className="eyebrow"><span /> Our standard</span><h2>Genuine work leaves<br /><em>a different trace.</em></h2><div className="comparison-table"><div className="comparison-row comparison-head"><span>Quality marker</span><span>MacExperts</span><span>Typical shop</span></div>{comparisons.map(([label, us, them]) => <div className="comparison-row" key={label}><span>{label}</span><span className="ours">{us}</span><span>{them}</span></div>)}</div></section>

        <section className="location section-wrap" id="location"><div className="location-copy"><span className="eyebrow"><span /> The workshop</span><h2>Visit us in<br /><em>Kalyan Nagar.</em></h2><div className="location-facts"><div><Icon name="location" size={17} /><span><strong>B.R Plaza, CMR Main Rd</strong><small>HRBR Layout 2nd Block, Kalyan Nagar<br />Bengaluru, Karnataka 560043</small></span></div><div><Icon name="phone" size={17} /><span><strong>70227 18776</strong><small>Open every day / 9:30 AM - 8:30 PM</small></span></div></div><a className="button button-light" href="https://www.google.com/maps/search/?api=1&query=B.R+Plaza+CMR+Main+Road+HRBR+Layout+Kalyan+Nagar+Bengaluru" target="_blank" rel="noreferrer">Get directions <Icon name="external" size={14} /></a></div><div className="map-frame"><iframe title="MacExperts location map" loading="lazy" src="https://www.google.com/maps?q=B.R+Plaza%2C+CMR+Main+Road%2C+HRBR+Layout%2C+Kalyan+Nagar%2C+Bengaluru&output=embed" /></div></section>
      </main>

      <footer className="site-footer"><div className="section-wrap footer-grid"><div className="footer-brand"><a className="brand" href="#top"><BrandMark /><span><strong>MacExperts</strong><small>Independent MacBook care</small></span></a><a className="inline-link" href="mailto:hello@macexperts.in">hello@macexperts.in</a></div><div className="footer-address"><span>Kalyan Nagar</span><p>B.R Plaza, CMR Main Rd<br />Bengaluru, Karnataka 560043</p><a href="tel:+917022718776"><Icon name="phone" size={14} /> +91 70227 18776</a></div></div><div className="section-wrap footer-bottom"><span>(c) 2026 MacExperts. Independent hardware facility.</span></div></footer>
      <div className="mobile-sticky"><a href="tel:+917022718776"><Icon name="phone" size={17} /> Call</a><a href="https://wa.me/917022718776" target="_blank" rel="noreferrer"><Icon name="whatsapp" size={18} /> WhatsApp</a></div>
    </div>
  );
}

export default App;
