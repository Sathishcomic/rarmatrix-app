import PageHero from '../components/ui/PageHero';
import ModelDiagram from '../components/ui/ModelDiagram';
import JourneyTimeline from '../components/ui/JourneyTimeline';
import WhyUs from '../components/ui/WhyUs';
import CTASection from '../components/ui/CTASection';
import useReveal from '../hooks/useReveal';
import { COMPANY_INFO } from '../data/company';
import '../components/ui/AboutStrip.css';

export default function About() {
  useReveal();

  return (
    <>
      <PageHero
        eyebrow="About RARMATRIX"
        title="Technology people. Business solutions."
        desc={`${COMPANY_INFO.legalName} is a licensed B2B technology partner supplying skilled IT professionals, enterprise infrastructure solutions, and 24/7 managed IT services.`}
      />

      {/* Corporate Overview & MCA Registration Section */}
      <section className="section-corporate-info">
        <div className="wrap">
          <div className="section-head reveal in">
            <span className="eyebrow-dark">Corporate Governance &amp; Registration</span>
            <h2>Statutory Credentials &amp; Board of Directors</h2>
            <p>
              RARMATRIX TECHNOLOGIES PRIVATE LIMITED is an officially incorporated entity in India, registered with the
              Registrar of Companies (ROC Chennai) under the Ministry of Corporate Affairs (MCA).
            </p>
          </div>

          <div className="corporate-metrics-grid">
            <div className="corp-card reveal in">
              <span className="corp-badge">Corporate Identity (CIN)</span>
              <h3 className="corp-value-code">{COMPANY_INFO.cin}</h3>
              <p>Registered under ROC Chennai, Ministry of Corporate Affairs, Government of India.</p>
            </div>

            <div className="corp-card reveal in">
              <span className="corp-badge">Statutory Status</span>
              <h3 className="corp-status-active">● {COMPANY_INFO.currentStatus}</h3>
              <p>Private Limited Company incorporated on {COMPANY_INFO.incorporationDate}.</p>
            </div>

            <div className="corp-card reveal in">
              <span className="corp-badge">Capital Structure</span>
              <h3 className="corp-value">{COMPANY_INFO.authorizedCapital}</h3>
              <p>Authorised Share Capital: ₹5L · Paid-Up Capital: ₹5L.</p>
            </div>

            <div className="corp-card reveal in">
              <span className="corp-badge">Industry Classification</span>
              <h3 className="corp-value-sm">IT &amp; Computer Services</h3>
              <p>{COMPANY_INFO.industryClassification} (MCA Classification).</p>
            </div>
          </div>

          {/* Board of Directors */}
          <div className="directors-section reveal in">
            <div className="directors-head">
              <h3>Board of Directors</h3>
              <p>Guiding strategic technology delivery, talent screening standards, and corporate governance.</p>
            </div>

            <div className="directors-grid">
              {COMPANY_INFO.boardOfDirectors.map((director) => (
                <div className="director-card" key={director.name}>
                  <div className="director-avatar">
                    {director.name.charAt(0)}
                  </div>
                  <div className="director-info">
                    <h4>{director.name}</h4>
                    <span className="director-title">{director.designation} · {COMPANY_INFO.shortName}</span>
                    <p>{director.bio}</p>
                    <a
                      href={director.profileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="director-link"
                    >
                      View Tracxn Profile &rarr;
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Registered Office & Compliance Box */}
          <div className="corp-compliance-box reveal in">
            <div className="compliance-col">
              <h4>🏛️ Registered Corporate Office</h4>
              <p>
                {COMPANY_INFO.registeredAddress.doorNo}, {COMPANY_INFO.registeredAddress.street},<br />
                {COMPANY_INFO.registeredAddress.locality}, {COMPANY_INFO.registeredAddress.subArea},<br />
                {COMPANY_INFO.registeredAddress.district},<br />
                {COMPANY_INFO.registeredAddress.state}, {COMPANY_INFO.registeredAddress.country} – {COMPANY_INFO.registeredAddress.pincode}
              </p>
              <div className="compliance-actions">
                <a
                  href={COMPANY_INFO.registeredAddress.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm"
                >
                  Open in Google Maps &rarr;
                </a>
                <a
                  href={COMPANY_INFO.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp-success btn-sm"
                >
                  WhatsApp: +91 8148920435
                </a>
              </div>
            </div>

            <div className="compliance-col filings-col">
              <h4>📋 Key Statutory Filings (ROC Chennai)</h4>
              <ul className="filings-list">
                {COMPANY_INFO.mcaFilings.map((filing) => (
                  <li key={filing.name}>
                    <strong>{filing.name}</strong>
                    <span>{filing.category} · {filing.filingDate}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Capability in One Place */}
      <section className="section-light">
        <div className="wrap about-strip">
          <div className="reveal in">
            <h2>Our capability, in one place</h2>
            <p className="lead-text">
              {COMPANY_INFO.legalName} is focused on helping organizations meet their technology
              workforce, infrastructure, and IT service requirements. Our capabilities combine vetted technical
              professionals, infrastructure engineering, turnkey project execution, and 24/7 SLA-backed IT support.
            </p>
            <div className="focus-tags">
              {['Technical Workforce', 'IT Infrastructure', 'Cloud & Cybersecurity', 'Turnkey Projects', 'SLA Support', 'Business Continuity'].map((t) => (
                <span className="focus-tag" key={t}>{t}</span>
              ))}
            </div>
          </div>
          <ModelDiagram />
        </div>
        <div className="wrap">
          <JourneyTimeline />
        </div>
      </section>

      {/* Why Us Section */}
      <section className="section-navy">
        <div className="wrap">
          <div className="section-head reveal in">
            <span className="eyebrow-dark">Why Rarmatrix</span>
            <h2>Built for operational reliability</h2>
          </div>
          <WhyUs />
        </div>
      </section>

      <CTASection />
    </>
  );
}
