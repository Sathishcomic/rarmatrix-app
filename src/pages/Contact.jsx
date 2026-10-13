import { Link } from 'react-router-dom';
import PageHero from '../components/ui/PageHero';
import ContactForm from '../components/forms/ContactForm';
import useReveal from '../hooks/useReveal';
import { COMPANY_INFO } from '../data/company';

const OPTIONS = [
  { title: 'Need IT Professionals?', cta: 'Request IT Resource', to: '/request-resource' },
  { title: 'Need 24/7 Managed IT Support?', cta: 'Talk to Support Team', to: '#contact-form' },
  { title: 'Need Network & Infrastructure?', cta: 'Request Consultation', to: '#contact-form' },
  { title: 'Need Comprehensive AMC?', cta: 'Request AMC Proposal', to: '#contact-form' },
  { title: 'Need a Turnkey IT Project?', cta: 'Discuss Your Project', to: '/start-project' },
  { title: 'Need IT Hardware & Licenses?', cta: 'Procurement Assistance', to: '#contact-form' },
];

export default function Contact() {
  useReveal();

  return (
    <>
      <PageHero
        eyebrow="Contact RARMATRIX"
        title="Let's build your IT team and technology environment"
        desc="Corporate headquarters in West Tambaram, Chennai. Serving enterprise clients, GCCs, and high-growth businesses across India."
      />

      {/* Official Corporate Credentials & Fast Contact Cards */}
      <section className="section-contact-channels">
        <div className="wrap">
          <div className="contact-cards-grid">
            {/* Address Card */}
            <div className="contact-detail-card reveal in">
              <div className="card-badge-icon">📍</div>
              <h4>Registered Office</h4>
              <p className="card-address-text">
                {COMPANY_INFO.registeredAddress.doorNo}, {COMPANY_INFO.registeredAddress.street},<br />
                {COMPANY_INFO.registeredAddress.locality}, {COMPANY_INFO.registeredAddress.subArea},<br />
                {COMPANY_INFO.registeredAddress.district},<br />
                {COMPANY_INFO.registeredAddress.state}, {COMPANY_INFO.registeredAddress.country} – {COMPANY_INFO.registeredAddress.pincode}
              </p>
              <a
                href={COMPANY_INFO.registeredAddress.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm card-action-btn"
              >
                🗺️ View on Google Maps &rarr;
              </a>
            </div>

            {/* WhatsApp & Phone Card */}
            <div className="contact-detail-card highlight-card reveal in">
              <div className="card-badge-icon">💬</div>
              <span className="live-status-tag">● Instant Response</span>
              <h4>WhatsApp &amp; Direct Desk</h4>
              <p>
                Connect directly with our IT solutions and leadership team for quick turnaround inquiries.
              </p>
              <div className="contact-number-display">
                <strong>{COMPANY_INFO.contact.primaryPhone}</strong>
              </div>
              <a
                href={COMPANY_INFO.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp-success card-action-btn"
              >
                <span>💬</span> Chat on WhatsApp
              </a>
            </div>

            {/* Email & Instagram Card */}
            <div className="contact-detail-card reveal in">
              <div className="card-badge-icon">✉️</div>
              <h4>Email &amp; Social Channels</h4>
              <p>
                Official inquiries, RFP documents, and service inquiries:
              </p>
              <div className="contact-email-links">
                <a href={`mailto:${COMPANY_INFO.contact.email}`} className="email-link">
                  📧 {COMPANY_INFO.contact.email}
                </a>
                <a href={`mailto:${COMPANY_INFO.contact.secondaryEmail}`} className="email-link secondary">
                  📧 {COMPANY_INFO.contact.secondaryEmail}
                </a>
              </div>
              <div className="social-pill-links">
                <a
                  href={COMPANY_INFO.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill instagram"
                >
                  📸 Instagram @rarmatrix
                </a>
                <a
                  href={COMPANY_INFO.contact.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill linkedin"
                >
                  💼 LinkedIn
                </a>
              </div>
            </div>

            {/* MCA Statutory Card */}
            <div className="contact-detail-card reveal in">
              <div className="card-badge-icon">🏛️</div>
              <h4>Statutory Registration</h4>
              <p>
                Ministry of Corporate Affairs (MCA) Registered Entity:
              </p>
              <ul className="mca-quick-meta">
                <li><strong>CIN:</strong> <code>{COMPANY_INFO.cin}</code></li>
                <li><strong>ROC:</strong> {COMPANY_INFO.roc}</li>
                <li><strong>Status:</strong> <span className="status-active-pill">● Active</span></li>
                <li><strong>Capital:</strong> ₹5L Authorized &amp; Paid-Up</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Requirement Shortcuts */}
      <section className="section-light">
        <div className="wrap">
          <div className="section-head reveal in">
            <span className="eyebrow-dark">Quick Navigation</span>
            <h2>What are you looking to solve today?</h2>
          </div>
          <div className="contact-options">
            {OPTIONS.map((o) => (
              o.to.startsWith('#') ? (
                <a href={o.to} className="contact-option reveal in" key={o.title}>
                  <h6>{o.title}</h6>
                  <span className="card-link">{o.cta} <span className="card-link-arrow">&rarr;</span></span>
                </a>
              ) : (
                <Link to={o.to} className="contact-option reveal in" key={o.title}>
                  <h6>{o.title}</h6>
                  <span className="card-link">{o.cta} <span className="card-link-arrow">&rarr;</span></span>
                </Link>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Main Interactive Contact Form */}
      <section id="contact-form">
        <div className="wrap">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
