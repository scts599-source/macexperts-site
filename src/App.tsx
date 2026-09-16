import { useState } from "react";
import type { FormEvent, ReactNode } from "react";

type IconName =
  | "arrow" | "battery" | "board" | "check" | "chevron" | "clock" | "display"
  | "external" | "keyboard" | "location" | "mail" | "menu" | "phone" | "quote"
  | "scan" | "shield" | "storage" | "whatsapp" | "x";

const iconPaths: Record<IconName, ReactNode> = {
  arrow: <><path d="M4 12h15" /><path d="m13 6 6 6-6 6" /></>,
  battery: <><rect x="3" y="7" width="17" height="10" rx="2" /><path d="M20 10h2v4h-2M8 10v4M11 10v4" /></>,
  board: <><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 4v4h8V4M8 20v-4h8v4M4 9h4M16 9h4M4 15h4M16 15h4" /></>,
  check: <path d="m5 12 4 4L19 6" />,
  chevron: <path d="m6 9 6 6 6-6" />,
  clock: <><circle cx="12" cy="12" r="8.5" /><path d="M12 7v5l3 2" /></>,
  display: <><rect x="3" y="4" width="18" height="12" rx="1.5" /><path d="M8 20h8M12 16v4" /></>,
  external: <><path d="M14 4h6v6M20 4l-9 9" /><path d="M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5" /></>,
  keyboard: <><rect x="2.5" y="6" width="19" height="12" rx="2" /><path d="M6 10h.01M9 10h.01M12 10h.01M15 10h.01M18 10h.01M6 14h9M17 14h1" /></>,
  location: <><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2.2" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
  phone: <path d="M6.5 3.5 9 3l2 5-2 1.5a15 15 0 0 0 5.5 5.5L16 13l5 2-.5 2.5c-.3 1.6-1.8 2.7-3.4 2.5C10.7 18.9 5.1 13.3 4 6.9 3.8 5.3 4.9 3.8 6.5 3.5Z" />,
  quote: <path d="M7 18c-2 0-3-1.3-3-3 0-4 2-7 6-9l1 2c-2.2 1-3.3 2.4-3.5 4.2.3-.1.7-.2 1.1-.2 1.7 0 2.7 1.1 2.7 2.8S10.7 18 9 18H7ZM16 18c-2 0-3-1.3-3-3 0-4 2-7 6-9l1 2c-2.2 1-3.3 2.4-3.5 4.2.3-.1.7-.2 1.1-.2 1.7 0 2.7 1.1 2.7 2.8S19.7 18 18 18h-2Z" />,
  scan: <><path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3" /><path d="M7 12h10" /></>,
  shield: <><path d="M12 3 20 6v5c0 5-3.4 8.7-8 10-4.6-1.3-8-5-8-10V6l8-3Z" /><path d="m8.5 12 2.2 2.2 4.8-4.8" /></>,
  storage: <><ellipse cx="12" cy="6" rx="7" ry="3" /><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" /></>,
  whatsapp: <><path d="M20 11.7a8 8 0 0 1-11.8 7.1L4 20l1.3-4A8 8 0 1 1 20 11.7Z" /><path d="M8.5 8.7c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.6 1.4c.1.3.1.5-.1.7l-.5.6c.5 1 1.2 1.7 2.2 2.2l.6-.5c.2-.2.4-.2.7-.1l1.4.6c.3.1.4.3.4.5v.5c0 .3 0 .5-.4.7-.4.2-1.3.4-2.6-.2-1.4-.6-3.1-2.2-3.9-3.3-.8-1.1-1.1-2.4-.1-3.1Z" /></>,
  x: <path d="m6 6 12 12M18 6 6 18" />,
};

function Icon({ name, size = 18, strokeWidth = 1.6 }: { name: IconName; size?: number; strokeWidth?: number }) {
  return <svg aria-hidden="true" className="icon" fill="none" height={size} viewBox="0 0 24 24" width={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth}>{iconPaths[name]}</svg>;
}

function BrandMark() {
  return <span className="brand-seal" aria-hidden="true">MX</span>;
}

const services = [
  { number: "01", icon: "display" as IconName, name: "Display & Retina glass", detail: "Cracked glass, vertical lines, True Tone and flexgate recovery with a factory-grade finish.", note: "From 60 min" },
  { number: "02", icon: "board" as IconName, name: "Logic board, component level", detail: "No power, liquid damage, GPU and power IC faults restored at the component level, not replaced blindly.", note: "Chip-level precision" },
  { number: "03", icon: "battery" as IconName, name: "Battery & thermal system", detail: "Swollen batteries, service warnings and fan noise solved with genuine cells and thermal calibration.", note: "Same-day express" },
  { number: "04", icon: "keyboard" as IconName, name: "Keyboard, trackpad & top case", detail: "Sticky keys, liquid spills and unresponsive trackpads repaired with calibrated replacement parts.", note: "90-day warranty" },
  { number: "05", icon: "storage" as IconName, name: "Storage & data recovery", detail: "Dead Mac data extraction, storage upgrades and kernel panic fixes without compromising your files.", note: "Private by design" },
  { number: "06", icon: "scan" as IconName, name: "Chip-Level Logic Board & Thermal Overhaul", detail: "T2 and M-series security diagnostics, macOS recovery and migration for personal and business fleets.", note: "Full system audit" },
];

const reviews = [
  { quote: "A dead M1 Max logic board brought back in a day. The diagnostic report was clearer than anything I have seen from an authorized desk.", name: "Rohan Mehta", role: "Founder, Paperplane Studio", model: "MacBook Pro M1 Max", repair: "Logic board fixed in 24 hours" },
  { quote: "They picked up my Mac from Indiranagar, shared photos while working, and returned it with the display looking factory new. Zero guesswork.", name: "Ananya Rao", role: "Product Designer", model: "MacBook Pro 14-inch", repair: "Retina display replacement" },
  { quote: "Transparent pricing, no upsell, and my data stayed private. The same-day battery service got me through a launch week.", name: "Arjun Nair", role: "Engineering Lead, Orbit", model: "MacBook Air M2", repair: "OEM battery replacement" },
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
  const [model, setModel] = useState("MacBook Pro 14-inch");
  const [issue, setIssue] = useState("Display / screen");
  const [bookingMessage, setBookingMessage] = useState("");
  const [activeService, setActiveService] = useState(1);
  const [family, setFamily] = useState("Air M-Series");
  const [symptom, setSymptom] = useState("No Power / Logic Board");
  const [fulfillment, setFulfillment] = useState("Walk-in to Kalyan Nagar Lab");
  const [reviewIndex, setReviewIndex] = useState(0);

  const handleTriage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setBookingMessage(`${family} / ${symptom} / ${fulfillment} noted. We will confirm bench availability and your quote shortly.`);
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleBooking = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setBookingMessage(`${model} / ${issue} noted. A Mac expert will call you in under 10 minutes.`);
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#top" aria-label="MacExperts home"><BrandMark /><span><strong>MacExperts</strong><small>Independent MacBook care</small></span></a>
          <nav className={`main-nav ${mobileOpen ? "is-open" : ""}`} aria-label="Primary navigation">
            <a href="#services" onClick={() => setMobileOpen(false)}>Services</a>
            <a href="#standard" onClick={() => setMobileOpen(false)}>Our standard</a>
            <a href="#estimate" onClick={() => setMobileOpen(false)}>Estimate</a>
            <a href="#location" onClick={() => setMobileOpen(false)}>Visit us</a>
          </nav>
          <div className="header-actions"><a className="header-phone" href="tel:+917022718776"><Icon name="phone" size={15} /> 70227 18776</a><a className="button button-light button-small" href="#booking">Book a diagnosis <Icon name="arrow" size={14} /></a></div>
          <button className="menu-toggle" onClick={() => setMobileOpen((open) => !open)} aria-label="Toggle navigation" aria-expanded={mobileOpen}><Icon name={mobileOpen ? "x" : "menu"} size={22} /></button>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <img className="hero-image" src="/images/macexperts-bench.jpg" alt="Technician repairing a MacBook logic board at a precision repair bench" />
          <div className="hero-shade" />
          <div className="hero-inner section-wrap">
            <div className="hero-copy"><p className="eyebrow"><span /> Bengaluru / Kalyan Nagar</p><h1>Precision MacBook care, <em>without the guesswork.</em></h1><p className="hero-lede">A specialist repair centre for people who depend on their Mac. Same-day screens and batteries. Component-level logic board work. 100% genuine Apple parts.</p><div className="hero-actions"><a className="button button-light" href="#booking">Start with a free diagnosis <Icon name="arrow" size={16} /></a><a className="hero-call" href="tel:+917022718776"><Icon name="phone" size={15} /> Talk to a Mac expert</a></div></div>
                        <div className="hero-copy"><p className="eyebrow"><span /> Bengaluru / Kalyan Nagar</p><h1>Precision MacBook care, <em>without the guesswork.</em></h1><p className="hero-lede">A specialist repair centre for people who depend on their Mac. Same-day screens and batteries. Component-level logic board work. 100% genuine Apple parts.</p><div className="hero-actions"><a className="button button-light" href="#booking">Start with a free diagnosis <Icon name="arrow" size={16} /></a><a className="hero-call" href="tel:+917022718776"><Icon name="phone" size={15} /> Talk to a Mac expert</a></div></div>
            <div className="hero-bottom"><span>MacExperts / 01</span><span>Look closer. Repair better.</span><span>Scroll to explore <b>v</b></span></div>
          </div>
        </section>

        <section className="intake section-wrap" id="booking"><form className="intake-form" onSubmit={handleBooking}><div className="intake-heading"><span className="eyebrow"><span /> First conversation</span><h2>Tell us what happened.</h2><p>We will give you a clear next step, not a sales pitch.</p></div><label><span>MacBook model</span><select value={model} onChange={(event) => setModel(event.target.value)}><option>MacBook Pro 14-inch</option><option>MacBook Pro 16-inch</option><option>MacBook Air 13-inch</option><option>MacBook Air 15-inch</option></select><Icon name="chevron" size={14} /></label><label><span>What needs attention?</span><select value={issue} onChange={(event) => setIssue(event.target.value)}><option>Display / screen</option><option>Battery or charging</option><option>Logic board / no power</option><option>Keyboard / trackpad</option><option>Data recovery</option></select><Icon name="chevron" size={14} /></label><button className="button button-dark" type="submit">Get a same-day callback <Icon name="arrow" size={15} /></button><p className="form-result" aria-live="polite">{bookingMessage ? <><Icon name="check" size={14} /> {bookingMessage}</> : "Free pickup and drop across Bengaluru."}</p></form><div className="intake-aside"><span className="aside-number">01</span><p><strong>Good repair begins before the screwdriver.</strong><br />Every device gets an original diagnostic report, a photo trail and a price approved before we touch the board.</p><a className="inline-link" href="#standard">See our standard <Icon name="arrow" size={14} /></a></div></section>

        <section className="proof-strip"><div className="section-wrap proof-grid"><div><strong>15,000+</strong><span>MacBooks repaired</span></div><div><strong>100%</strong><span>Genuine Apple parts</span></div><div><strong>60 min</strong><span>Battery / screen service</span></div><div><strong>90 days</strong><span>Unconditional warranty</span></div></div></section>

        <section className="services section-wrap" id="services"><div className="section-intro"><span className="eyebrow"><span /> What we do</span><h2>The right repair is<br /><em>usually the smaller one.</em></h2><p>We diagnose the component that failed instead of replacing the entire system around it. That is better for your data, your budget and the life of the machine.</p></div><div className="service-explorer"><div className="service-list" role="tablist" aria-label="MacBook services">{services.map((service, index) => <button className={`service-item ${activeService === index ? "is-active" : ""}`} key={service.number} role="tab" aria-selected={activeService === index} onClick={() => setActiveService(index)}><span>{service.number}</span><Icon name={service.icon} size={19} /><strong>{service.name}</strong><Icon name="arrow" size={16} /></button>)}</div><div className="service-view" role="tabpanel"><span className="service-view-no">{services[activeService].number} / 06</span><div className="service-line-art"><Icon name={services[activeService].icon} size={72} strokeWidth={1} /></div><span className="eyebrow"><span /> Service detail</span><h3>{services[activeService].name}</h3><p>{services[activeService].detail}</p><div className="service-foot"><span><Icon name="check" size={14} /> {services[activeService].note}</span><a className="inline-link" href="#estimate">Get a starting estimate <Icon name="arrow" size={14} /></a></div></div></div></section>

        <section className="standard" id="standard"><div className="section-wrap standard-grid"><div><span className="eyebrow"><span /> The MacExperts standard</span><h2>Repair that still feels right<br /><em>months later.</em></h2><p>There is a difference between getting your Mac working and putting it back in trustworthy condition. We care about the second one.</p><a className="button button-dark" href="#estimate">See how we price <Icon name="arrow" size={15} /></a></div><div className="standard-list"><div><span>01</span><strong>Apple-trained hands</strong><p>Technicians who understand the architecture, not just the symptom.</p></div><div><span>02</span><strong>Genuine parts only</strong><p>Traceable components, verified before they ever reach your machine.</p></div><div><span>03</span><strong>Evidence at every step</strong><p>Photos, diagnostics and approval before a repair becomes a repair.</p></div><div><span>04</span><strong>90-day warranty</strong><p>Because confidence should continue after you leave the bench.</p></div></div></div></section>

        <section className="estimate section-wrap" id="estimate"><div className="section-intro"><span className="eyebrow"><span /> Honest from the start</span><h2>Reserve your<br /><em>bench diagnostic.</em></h2><p>Tell us what is happening with your Mac and we will confirm availability, next steps and a clear quote.</p></div><div className="estimate-grid"><form className="estimate-form triage-form" onSubmit={handleTriage}><span className="form-tag">RESERVE BENCH DIAGNOSTIC</span><label>MacBook family<select value={family} onChange={(event) => setFamily(event.target.value)}><option>Air M-Series</option><option>Pro 14/16&quot;</option><option>Pro 13&quot;</option><option>Intel Legacy</option></select><Icon name="chevron" size={14} /></label><label>Primary symptom<select value={symptom} onChange={(event) => setSymptom(event.target.value)}><option>No Power / Logic Board</option><option>Screen Glitch / Shatter</option><option>Liquid Ingress</option><option>Battery/Thermal</option></select><Icon name="chevron" size={14} /></label><label>Preferred fulfillment<select value={fulfillment} onChange={(event) => setFulfillment(event.target.value)}><option>Walk-in to Kalyan Nagar Lab</option><option>Insured Doorstep Pickup</option></select><Icon name="chevron" size={14} /></label><button className="button button-accent full-button" type="submit">Check Bench Availability &amp; Get Quote <Icon name="arrow" size={15} /></button><p className="form-result" aria-live="polite">{bookingMessage}</p></form><div className="comparison"><span className="form-tag">OUR PROMISE</span><h3>Genuine work leaves<br /><em>a different trace.</em></h3><p>Local fixes can look similar on day one. The difference shows up months later.</p><div className="comparison-table"><div className="comparison-row comparison-head"><span>What you get</span><span>MacExperts</span><span>Typical shop</span></div>{comparisons.map(([label, us, them]) => <div className="comparison-row" key={label}><span>{label}</span><span className="ours"><Icon name="check" size={13} />{us}</span><span className="other">{them}</span></div>)}</div></div></div></section>

        <section className="location section-wrap" id="location"><div className="location-copy"><span className="eyebrow"><span /> The workshop</span><h2>Come by the bench<br /><em>in Kalyan Nagar.</em></h2><p>B.R Plaza, CMR Main Road, HRBR Layout 2nd Block. Walk in for a diagnosis, or let us bring the service to your door anywhere across Bengaluru.</p><div className="location-facts"><div><Icon name="location" size={17} /><span><strong>B.R Plaza, CMR Main Rd</strong><small>HRBR Layout 2nd Block, Kalyan Nagar<br />Bengaluru, Karnataka 560043</small></span></div><div><Icon name="clock" size={17} /><span><strong>Open every day</strong><small>Mon - Sun / 9:30 AM - 8:30 PM</small></span></div></div><div className="location-actions"><a className="button button-dark" href="https://www.google.com/maps/search/?api=1&query=B.R+Plaza+CMR+Main+Road+HRBR+Layout+Kalyan+Nagar+Bengaluru" target="_blank" rel="noreferrer">Get directions <Icon name="external" size={14} /></a><a className="inline-link" href="https://wa.me/917022718776?text=Hello%20MacExperts%2C%20I%20would%20like%20to%20schedule%20a%20pickup." target="_blank" rel="noreferrer"><Icon name="whatsapp" size={15} /> Schedule pickup</a></div></div><div className="map-frame"><iframe title="MacExperts location map" loading="lazy" src="https://www.google.com/maps?q=B.R+Plaza%2C+CMR+Main+Road%2C+HRBR+Layout%2C+Kalyan+Nagar%2C+Bengaluru&output=embed" /></div></section>

        <section className="reviews section-wrap" id="reviews"><div className="review-heading"><div><span className="eyebrow"><span /> People who make things</span><h2>Good work travels<br /><em>by word of mouth.</em></h2></div><div className="review-controls"><span>0{reviewIndex + 1} / 0{reviews.length}</span><button onClick={() => setReviewIndex((index) => (index - 1 + reviews.length) % reviews.length)} aria-label="Previous review"><Icon name="arrow" size={16} /></button><button onClick={() => setReviewIndex((index) => (index + 1) % reviews.length)} aria-label="Next review"><Icon name="arrow" size={16} /></button></div></div><div className="review-quote"><Icon name="quote" size={42} /><blockquote>&ldquo;{reviews[reviewIndex].quote}&rdquo;</blockquote><div className="review-meta"><div><strong>{reviews[reviewIndex].name}</strong><span>{reviews[reviewIndex].role}</span></div><div><strong>{reviews[reviewIndex].model}</strong><span>{reviews[reviewIndex].repair}</span></div></div></div></section>

        <section className="contact section-wrap" id="contact"><div><span className="eyebrow"><span /> Ready when your Mac is</span><h2>Let's get it back<br /><em>to its best.</em></h2></div><div><p>Free pickup, precise diagnostics and a human on the other side of the phone.</p><a className="button button-accent" href="tel:+917022718776">Call 7022718776 <Icon name="phone" size={15} /></a></div></section>
      </main>

      <footer className="site-footer"><div className="section-wrap footer-grid"><div className="footer-brand"><a className="brand" href="#top"><BrandMark /><span><strong>MacExperts</strong><small>Independent MacBook care</small></span></a><p>Component-level MacBook care<br />for Bengaluru's most demanding work.</p><a className="inline-link" href="mailto:hello@macexperts.in"><Icon name="mail" size={14} /> hello@macexperts.in</a></div><div className="footer-links"><span>Explore</span><a href="#services">Services</a><a href="#estimate">Estimator</a><a href="#reviews">Reviews</a><a href="#location">Location</a></div><div className="footer-links"><span>Standards</span><a href="#standard">Genuine parts</a><a href="#standard">Warranty</a><a href="#standard">Data privacy</a><a href="#standard">For businesses</a></div><div className="footer-address"><span>Visit the service center</span><p>B.R Plaza, CMR Main Rd<br />HRBR Layout 2nd Block<br />Kalyan Nagar, Bengaluru 560043</p><a href="tel:+917022718776"><Icon name="phone" size={14} /> +91 70227 18776</a><small>Mon - Sun / 9:30 AM - 8:30 PM</small></div></div><div className="section-wrap footer-bottom"><span>(c) 2026 MacExperts. Independent hardware facility.</span><span>Independent Apple service specialist. Apple and MacBook are trademarks of Apple Inc.</span><span>Made for the meticulous.</span></div></footer>
      <div className="mobile-sticky"><a href="tel:+917022718776"><Icon name="phone" size={17} /> Call 7022718776</a><a href="https://wa.me/917022718776?text=Hello%20MacExperts%2C%20I%20need%20MacBook%20service." target="_blank" rel="noreferrer"><Icon name="whatsapp" size={18} /> WhatsApp chat</a></div>
    </div>
  );
}

export default App;