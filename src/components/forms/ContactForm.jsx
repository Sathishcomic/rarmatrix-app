import { useState } from 'react';
import { submitToGoogleSheet } from '../../services/sheetsService';
import { COMPANY_INFO } from '../../data/company';
import { triggerConfetti } from '../../utils/confetti';
import './Form.css';

const REQUIREMENT_TYPES = [
  'IT Staffing & Resource Deployment',
  'Dedicated Onsite IT Engineer',
  'Managed IT Support & Helpdesk',
  'Network & Infrastructure Setup',
  'Server Deployment & Virtualization',
  'Cloud Migration (AWS / Azure)',
  'Cybersecurity & Endpoint Protection',
  'Comprehensive IT AMC',
  'Hardware & License Procurement',
  'Turnkey Office IT Setup',
  'Other Custom Requirement',
];

const initialState = {
  name: '',
  company: '',
  email: '',
  phone: '',
  city: 'Chennai',
  industry: '',
  requirementType: '',
  resourceCount: '',
  skill: '',
  projectRequirement: '',
  location: '',
  engagementType: 'Onsite / Dedicated',
  startDate: '',
  message: '',
};

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState({ state: 'idle', message: '' }); // idle | submitting | success | error

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ state: 'submitting', message: 'Saving enquiry to Google Sheets database...' });

    try {
      const result = await submitToGoogleSheet({
        formType: 'contact',
        ...form,
      });

      if (result.success) {
        triggerConfetti();
        setStatus({
          state: 'success',
          message: result.message || "Thank you! We've received your enquiry.",
        });
      } else {
        setStatus({
          state: 'error',
          message: result.message || 'Something went wrong. Please reach out via WhatsApp.',
        });
      }
    } catch (err) {
      console.error('Submission failed:', err);
      setStatus({
        state: 'error',
        message: 'Could not send enquiry. Please contact us directly at +91 8148920435.',
      });
    }
  }

  if (status.state === 'success') {
    const waText = encodeURIComponent(
      `Hello RARMATRIX Technologies,\nI just submitted an enquiry on your website.\nName: ${form.name}\nCompany: ${form.company}\nRequirement: ${form.requirementType || 'IT Services'}`
    );

    return (
      <div className="form-card form-success reveal in">
        <div className="success-icon">✓</div>
        <div className="sheet-sync-pill">
          <span className="sync-dot" /> Saved to Google Sheets Lead Database
        </div>
        <h3>Enquiry Submitted Successfully</h3>
        <p>
          Thank you, <strong>{form.name}</strong>. Our enterprise IT consulting team at RARMATRIX Technologies
          has logged your requirement and will contact you within 2 business hours.
        </p>

        <div className="success-actions">
          <a
            href={`https://wa.me/${COMPANY_INFO.contact.whatsappRaw}?text=${waText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp-success"
          >
            <span>💬</span> Quick WhatsApp Connect (+91 8148920435)
          </a>
          <button
            type="button"
            className="btn btn-outline btn-sm"
            onClick={() => {
              setForm(initialState);
              setStatus({ state: 'idle', message: '' });
            }}
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="form-card reveal in" onSubmit={handleSubmit}>
      <div className="form-header-badge">
        <span className="live-sheet-indicator">
          <span className="pulse-circle" /> Connected to Live Google Sheets
        </span>
        <span className="form-sla-badge">⚡ Response SLA: 2 Hours</span>
      </div>

      <div className="form-intro">
        <h3>Connect with Our Technology Team</h3>
        <p>
          Fill out your business requirements below to receive a customized proposal, resource profile,
          or architecture consultation.
        </p>
      </div>

      <div className="form-grid">
        <div className="field">
          <label htmlFor="name">Your Name *</label>
          <input
            id="name"
            name="name"
            placeholder="e.g. Ramesh Kumar"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="company">Company / Organization *</label>
          <input
            id="company"
            name="company"
            placeholder="e.g. TechCorp Solutions"
            value={form.company}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="email">Business Email *</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="name@company.com"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="phone">Phone / WhatsApp Number *</label>
          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder="+91 98765 43210"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="city">City / Region</label>
          <input
            id="city"
            name="city"
            placeholder="e.g. Chennai, Bangalore, Hyderabad"
            value={form.city}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label htmlFor="industry">Industry Sector</label>
          <input
            id="industry"
            name="industry"
            placeholder="e.g. Manufacturing, IT/ITES, BFSI, Healthcare"
            value={form.industry}
            onChange={handleChange}
          />
        </div>

        <div className="field span-2">
          <label htmlFor="requirementType">Primary Requirement *</label>
          <select
            id="requirementType"
            name="requirementType"
            value={form.requirementType}
            onChange={handleChange}
            required
          >
            <option value="">Select your requirement type</option>
            {REQUIREMENT_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div className="field">
          <label htmlFor="resourceCount">Number of Resources (if Staffing)</label>
          <input
            id="resourceCount"
            name="resourceCount"
            placeholder="e.g. 2 Desktop Engineers, 1 Network Lead"
            value={form.resourceCount}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label htmlFor="skill">Specific Skills / Technologies</label>
          <input
            id="skill"
            name="skill"
            placeholder="e.g. Cisco CCNA, Azure, Fortinet, Windows Server"
            value={form.skill}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label htmlFor="engagementType">Deployment Model</label>
          <select
            id="engagementType"
            name="engagementType"
            value={form.engagementType}
            onChange={handleChange}
          >
            <option value="Onsite / Dedicated">Onsite / Dedicated IT Resource</option>
            <option value="Remote / Hybrid">Remote / Hybrid Support</option>
            <option value="Project-Based">Project-Based Milestone Delivery</option>
            <option value="Annual Maintenance (AMC)">Comprehensive IT AMC</option>
          </select>
        </div>

        <div className="field">
          <label htmlFor="startDate">Target Start Date</label>
          <input
            id="startDate"
            type="date"
            name="startDate"
            value={form.startDate}
            onChange={handleChange}
          />
        </div>

        <div className="field span-2">
          <label htmlFor="projectRequirement">Brief Project / Scope Overview</label>
          <input
            id="projectRequirement"
            name="projectRequirement"
            placeholder="e.g. Setting up 50 workstations, migrating mailboxes to Microsoft 365, or 24/7 helpdesk"
            value={form.projectRequirement}
            onChange={handleChange}
          />
        </div>

        <div className="field span-2">
          <label htmlFor="message">Additional Requirements or Questions</label>
          <textarea
            id="message"
            name="message"
            placeholder="Please share any specific requirements, existing IT challenges, or SLA expectations..."
            value={form.message}
            onChange={handleChange}
          />
        </div>
      </div>

      {status.state === 'error' && (
        <div className="form-error-banner">
          ⚠️ {status.message}
        </div>
      )}

      <div className="form-footer-action">
        <button
          type="submit"
          className="btn btn-primary form-submit"
          disabled={status.state === 'submitting'}
        >
          {status.state === 'submitting' ? (
            <>
              <span className="spinner-dot" /> Transmitting to Google Sheet...
            </>
          ) : (
            'Submit Enquiry to RARMATRIX'
          )}
        </button>

        <p className="privacy-note">
          🔒 Your details are securely transmitted directly to RARMATRIX TECHNOLOGIES PRIVATE LIMITED. We respect NDA and corporate privacy.
        </p>
      </div>
    </form>
  );
}
