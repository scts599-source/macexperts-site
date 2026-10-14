import { useEffect, useState } from "react";
import type { FormEvent, ReactNode } from "react";
import LegalPage from "./LegalPage";

type IconName =
  | "arrow" | "battery" | "board" | "check" | "chevron" | "display"
  | "external" | "keyboard" | "location" | "mail" | "menu" | "phone" | "whatsapp" | "x";

const iconPaths: Record<IconName, ReactNode> = {
  arrow: <><path d="M4 12h15" /><path d="m13 6 6 6-6 6" /></>,
  battery: <><rect x="3" y="7" width="17" height="10" rx="2" /><path d="M20 10h2v4h-2M8 10v4M11 10v4" /></>,
  board: <><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 4v4h8V4M8 20v-4h8v4M4 9h4M16 9h4M4 15h4M16 15h4" /></>,
  check: <path d="m5 12 4 4L19 6" />,
  chevron: <path d="m6 9 6 6 6-6" />,
  display: <><rect x="3" y="4" width="18" height="12" rx="1.5" /><path d="M8 20h8M12 16v4" /></>,
  external: <><path d="M14 4h6v6M20 4l-9 9" /><path d="M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5" /></>,
  keyboard: <><rect x="2.5" y="6" width="19" height="12" rx="2" /><path d="M6 10h.01M9 10h.01M12 10h.01M15 10h.01M18 10h.01M6 14h9M17 14h1" /></>,
  location: <><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2.2" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
  phone: <path d="M6.5 3.5 9 3l2 5-2 1.5a15 15 0 0 0 5.5 5.5L16 13l5 2-.5 2.5c-.3 1.6-1.8 2.7-3.4 2.5C10.7 18.9 5.1 13.3 4 6.9 3.8 5.3 4.9 3.8 6.5 3.5Z" />,
  whatsapp: <><path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.3-4A8 8 0 1 1 20 11.5Z" /><path d="M9 8.5c.3-.5.7-.5 1-.4l1 2c.1.3.1.5-.1.7l-.7.7c.6 1.2 1.6 2.1 2.8 2.7l.7-.7c.2-.2.5-.2.8-.1l1.9.9c.3.2.4.5.3.8-.2.8-.9 1.4-1.8 1.4-3.4-.2-7.6-4-7.7-7.2 0-.9.6-1.7 1.4-1.8Z" /></>,
  x: <path d="m6 6 12 12M18 6 6 18" />,
};

function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  return <svg aria-hidden="true" className="icon" fill="none" height={size} viewBox="0 0 24 24" width={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7}>{iconPaths[name]}</svg>;
}

const services = [
  { icon: "display", name: "Screen repair", detail: "Display, glass and image issues." },
  { icon: "board", name: "Logic board service", detail: "Board-level inspection and repair." },
  { icon: "battery", name: "Battery and charging", detail: "Battery, charging and power issues." },
  { icon: "keyboard", name: "Keyboard and trackpad", detail: "Keyboard, trackpad and input issues." },
];

type RequestMessage = {
  type: "success" | "error";
  text: string;
  href?: string;
};

const phoneNumber = "+919110622958";
const phoneDisplay = "+91 91106 22958";
const emailAddress = "dr.applexpertz1@gmail.com";
const whatsappUrl = `https://wa.me/${phoneNumber.slice(1)}?text=${encodeURIComponent("Hello Applexpertz, I would like to enquire about a MacBook repair.")}`;
const mapUrl = "https://www.google.com/maps/search/?api=1&query=B.R+Plaza+CMR+Main+Road+HRBR+Layout+Kalyan+Nagar+Bangalore";

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [model, setModel] = useState("MacBook Pro 14-inch");
  const [issue, setIssue] = useState("Display / screen");
  const [requestMessage, setRequestMessage] = useState<RequestMessage | null>(null);
  const path = window.location.pathname.replace(/\/+$/, "").toLowerCase() || "/";
  const legalPage = path === "/privacy-policy" ? "privacy" : path === "/terms-and-conditions" ? "terms" : null;
  const isHome = path === "/" || path === "/index.html";
  const isNotFound = !isHome && !legalPage;

  useEffect(() => {
    const title = legalPage === "privacy"
      ? "Privacy Policy | Applexpertz"
      : legalPage === "terms"
        ? "Terms and Conditions | Applexpertz"
        : isNotFound
          ? "Page Not Found | Applexpertz"
          : "Applexpertz | MacBook Repair in Bangalore";
    const description = legalPage === "privacy"
      ? "Read how Applexpertz handles information when you use this website or contact the MacBook repair center."
      : legalPage === "terms"
        ? "Read the terms for using the Applexpertz website and making a MacBook repair enquiry."
        : isNotFound
          ? "The requested page could not be found. Visit Applexpertz for MacBook repair in Bangalore."
          : "MacBook screen, logic board, battery, charging, keyboard and trackpad repair enquiries at Applexpertz in Kalyan Nagar, Bangalore.";
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", description);
  }, [isNotFound, legalPage]);

  const handleRequest = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!model || !issue) {
      setRequestMessage({ type: "error", text: "Choose a MacBook model and describe the issue to continue." });
      return;
    }
    const text = `Hello Applexpertz, I have a ${model} with a ${issue} issue. Please let me know how to proceed.`;
    setRequestMessage({
      type: "success",
      text: "Your message is ready. Review and send it in WhatsApp.",
      href: `https://wa.me/${phoneNumber.slice(1)}?text=${encodeURIComponent(text)}`,
    });
  };

  const brand = (
    <a className="brand" href="/" aria-label="Applexpertz home">
      <img className="brand-logo" src="/images/applexpertz-mark.png" alt="" />
      <span className="brand-copy"><strong>Applexpertz</strong><small>MacBook Repair Center</small></span>
    </a>
  );

  if (isNotFound) {
    return (
      <main className="not-found">
        {brand}
        <p className="eyebrow">404 / Page not found</p>
        <h1>This page could not be found.</h1>
        <p>Check the address, or return to the Applexpertz home page.</p>
        <a className="button button-primary" href="/">Go to home <Icon name="arrow" size={16} /></a>
      </main>
    );
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="header-inner">
          {brand}
          <button
            className="menu-toggle"
            type="button"
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-controls="primary-navigation"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            <Icon name={mobileOpen ? "x" : "menu"} size={22} />
          </button>
          <nav className={`main-nav ${mobileOpen ? "is-open" : ""}`} id="primary-navigation" aria-label="Primary navigation">
            {legalPage ? (
              <a href="/">Home</a>
            ) : (
              <>
                <a href="#services" onClick={() => setMobileOpen(false)}>Repairs</a>
                <a href="#location" onClick={() => setMobileOpen(false)}>Location</a>
                <a href="#contact" onClick={() => setMobileOpen(false)}>Contact</a>
              </>
            )}
          </nav>
          <a className="header-phone" href={`tel:${phoneNumber}`}><Icon name="phone" size={16} /> {phoneDisplay}</a>
        </div>
      </header>

      {legalPage ? (
        <LegalPage page={legalPage} />
      ) : (
        <main id="top">
          <section className="hero">
            <div className="section-wrap hero-inner">
              <p className="eyebrow">MacBook repair / Bangalore</p>
              <h1>MacBook repair in Bangalore</h1>
              <p className="hero-lede">
                Applexpertz is a MacBook repair center in Kalyan Nagar, Bangalore. Contact us about screen, logic board, battery, keyboard and trackpad repairs.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href={`tel:${phoneNumber}`}><Icon name="phone" size={16} /> Call {phoneDisplay}</a>
                <a className="text-link" href="#services">View repair services</a>
              </div>
            </div>
          </section>

          <section className="services section-wrap" id="services">
            <div className="section-heading">
              <p className="eyebrow">Services</p>
              <h2>MacBook repairs</h2>
              <p>Contact us with your model and symptoms to discuss a repair.</p>
            </div>
            <div className="service-grid">
              {services.map((service) => (
                <article className="service-card" key={service.name}>
                  <Icon name={service.icon as IconName} size={26} />
                  <h3>{service.name}</h3>
                  <p>{service.detail}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="enquiry">
            <div className="section-wrap enquiry-layout">
              <div className="section-heading">
                <p className="eyebrow">Repair enquiry</p>
                <h2>Tell us about your MacBook</h2>
                <p>Choose a model and issue. We will prepare a message for you to review and send through WhatsApp.</p>
              </div>
              <form className="enquiry-form" onSubmit={handleRequest}>
                <label htmlFor="model">MacBook model</label>
                <span className="select-wrap">
                  <select id="model" value={model} onChange={(event) => setModel(event.target.value)}>
                    <option>MacBook Pro 14-inch</option>
                    <option>MacBook Pro 16-inch</option>
                    <option>MacBook Air 13-inch</option>
                    <option>MacBook Air 15-inch</option>
                    <option>Other MacBook model</option>
                  </select>
                  <Icon name="chevron" size={16} />
                </span>
                <label htmlFor="issue">Issue</label>
                <span className="select-wrap">
                  <select id="issue" value={issue} onChange={(event) => setIssue(event.target.value)}>
                    <option>Display / screen</option>
                    <option>Battery or charging</option>
                    <option>Logic board / no power</option>
                    <option>Keyboard / trackpad</option>
                    <option>Other issue</option>
                  </select>
                  <Icon name="chevron" size={16} />
                </span>
                <button className="button button-primary" type="submit">Prepare WhatsApp message <Icon name="arrow" size={16} /></button>
                <p className={`form-result ${requestMessage ? `form-result-${requestMessage.type}` : ""}`} role="status" aria-live="polite">
                  {requestMessage ? (
                    <>
                      {requestMessage.text}{" "}
                      {requestMessage.href && <a href={requestMessage.href} target="_blank" rel="noreferrer">Continue to WhatsApp</a>}
                    </>
                  ) : "Nothing is sent until you choose to send the message."}
                </p>
              </form>
            </div>
          </section>

          <section className="location section-wrap" id="location">
            <div className="section-heading">
              <p className="eyebrow">Service center</p>
              <h2>Visit Applexpertz</h2>
              <p>B.R Plaza, CMR Main Road, HRBR Layout 2nd Block, Kalyan Nagar, Bangalore, Karnataka 560043.</p>
            </div>
            <div className="location-actions">
              <a className="button button-outline" href={mapUrl} target="_blank" rel="noreferrer"><Icon name="location" size={17} /> Directions <Icon name="external" size={15} /></a>
              <a className="text-link" href={`tel:${phoneNumber}`}><Icon name="phone" size={16} /> {phoneDisplay}</a>
            </div>
          </section>
        </main>
      )}

      <footer className="site-footer" id="contact">
        <div className="section-wrap footer-grid">
          <div className="footer-brand">
            {brand}
            <p>MacBook repair center in Kalyan Nagar, Bangalore.</p>
          </div>
          <div className="footer-contact">
            <span>Contact</span>
            <a href={`tel:${phoneNumber}`}><Icon name="phone" size={15} /> {phoneDisplay}</a>
            <a href={`mailto:${emailAddress}`}><Icon name="mail" size={15} /> {emailAddress}</a>
          </div>
          <div className="footer-legal">
            <span>Information</span>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-and-conditions">Terms and Conditions</a>
          </div>
        </div>
        <div className="section-wrap footer-bottom">
          <span>&copy; {new Date().getFullYear()} Applexpertz</span>
          <span>Independent MacBook repair center.</span>
        </div>
      </footer>
      <a className="whatsapp-float" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Contact Applexpertz on WhatsApp">
        <Icon name="whatsapp" size={21} />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}

export default App;
