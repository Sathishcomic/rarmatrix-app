import { Link } from 'react-router-dom';
import { FOOTER_LINKS } from '../../data/navigation';
import { COMPANY_INFO } from '../../data/company';
import logoUrl from '../../assets/rarmatrix-logo.png';
import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo-chip">
              <img src={logoUrl} alt="RARMATRIX Technologies Pvt Ltd" className="logo-img" />
            </div>
            <p>
              <strong>{COMPANY_INFO.legalName}</strong>
              <br /><br />
              Enterprise IT Staffing, Infrastructure Architecture, Managed Cloud Services, and End-to-End Technology Projects.
            </p>
            <div className="footer-cin-badge">
              <span>CIN: {COMPANY_INFO.cin}</span>
              <span className="footer-status-pill">Active · ROC Chennai</span>
            </div>
          </div>

          <div className="footer-col">
            <h6>Services</h6>
            <ul>{FOOTER_LINKS.services.map((s) => <li key={s}>{s}</li>)}</ul>
          </div>

          <div className="footer-col">
            <h6>Industries</h6>
            <ul>{FOOTER_LINKS.industries.map((s) => <li key={s}>{s}</li>)}</ul>
          </div>

          <div className="footer-col">
            <h6>Company</h6>
            <ul>{FOOTER_LINKS.company.map((l) => <li key={l.label}><Link to={l.to}>{l.label}</Link></li>)}</ul>
          </div>

          <div className="footer-col">
            <h6>Business</h6>
            <ul>{FOOTER_LINKS.business.map((l) => <li key={l.label}><Link to={l.to}>{l.label}</Link></li>)}</ul>
          </div>

          <div className="footer-col footer-address">
            <h6>Registered Office</h6>
            <ul>
              <li>
                {COMPANY_INFO.registeredAddress.doorNo}, {COMPANY_INFO.registeredAddress.street},<br />
                {COMPANY_INFO.registeredAddress.locality}, {COMPANY_INFO.registeredAddress.district},<br />
                {COMPANY_INFO.registeredAddress.state}, {COMPANY_INFO.registeredAddress.country} – {COMPANY_INFO.registeredAddress.pincode}
              </li>
              <li>
                <a href={`tel:${COMPANY_INFO.contact.rawPhone}`} className="footer-link-highlight">
                  📞 {COMPANY_INFO.contact.primaryPhone}
                </a>
              </li>
              <li>
                <a href={COMPANY_INFO.contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="footer-whatsapp-link">
                  💬 WhatsApp: {COMPANY_INFO.contact.whatsapp}
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY_INFO.contact.email}`} className="footer-link-highlight">
                  ✉️ {COMPANY_INFO.contact.email}
                </a>
              </li>
              <li className="footer-social-strip">
                <a href={COMPANY_INFO.contact.instagramUrl} target="_blank" rel="noopener noreferrer" title="Instagram">
                  📸 Instagram
                </a>
                <span>·</span>
                <a href={COMPANY_INFO.contact.linkedinUrl} target="_blank" rel="noopener noreferrer" title="LinkedIn">
                  💼 LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {COMPANY_INFO.legalName}. All rights reserved.
          </span>
          <span className="footer-bottom-meta">
            Reg. ROC Chennai · CIN: {COMPANY_INFO.cin} · Tamil Nadu, India
          </span>
          <span>Privacy Policy · Terms of Service · SLA Agreement</span>
        </div>
      </div>
    </footer>
  );
}
