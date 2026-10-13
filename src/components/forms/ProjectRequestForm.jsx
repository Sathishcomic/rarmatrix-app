import { useState } from 'react';
import { submitToGoogleSheet } from '../../services/sheetsService';
import { COMPANY_INFO } from '../../data/company';
import { triggerConfetti } from '../../utils/confetti';
import './Form.css';

const PROJECT_TYPES = [
  'Turnkey Office IT Setup & Buildout',
  'Enterprise Network Deployment (LAN / Wi-Fi 6 / Firewall)',
  'Server & Storage Virtualization (VMware / Hyper-V)',
  'Cloud Migration (AWS / Microsoft Azure)',
  'Microsoft 365 & Security Suite Migration',
  'Cybersecurity Audit & Perimeter Hardening',
  'Bulk IT Asset / Laptop Rollout & Imaging',
  'Comprehensive IT AMC Transition',
  'Structured Cabling & Server Rack Installation',
  'Other Custom IT Project',
];

const initialState = {
  company: '',
  contact: '',
  email: '',
  phone: '',
  projectType: PROJECT_TYPES[0],
  location: 'Chennai',
  userCount: '50 - 100 Users',
  existingInfra: '',
  scope: '',
  timeline: 'Within 30 Days',
  budget: '',
  message: '',
};

export default function ProjectRequestForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ state: 'submitting', message: 'Transmitting project scope to Google Sheet...' });

    try {
      const result = await submitToGoogleSheet({
        formType: 'project',
        ...form,
      });

      if (result.success) {
        triggerConfetti();
        setStatus({
          state: 'success',
          message: result.message || 'Project request recorded successfully.',
        });
      } else {
        setStatus({
          state: 'error',
          message: result.message || 'Submission error. Please reach out via WhatsApp.',
        });
      }
    } catch (err) {
      console.error('Submission failed:', err);
      setStatus({
        state: 'error',
        message: 'Could not submit project inquiry. Please contact +91 8148920435.',
      });
    }
  }

  if (status.state === 'success') {
    const waText = encodeURIComponent(
      `Hello RARMATRIX Technology Solutions Team,\nI have submitted a Project Request on your website:\nCompany: ${form.company}\nContact: ${form.contact}\nProject: ${form.projectType}\nTimeline: ${form.timeline}\nPlease review and discuss.`
    );

    return (
      <div className="form-card form-success reveal in">
        <div className="success-icon">✓</div>
        <div className="sheet-sync-pill">
          <span className="sync-dot" /> Logged in Google Sheet Project Inquiries Database
        </div>
        <h3>Project Request Submitted</h3>
        <p>
          Thank you, <strong>{form.contact}</strong> from <strong>{form.company}</strong>.
          Our enterprise project architect at RARMATRIX will review your requirements and schedule a technical discovery call.
        </p>
        <p className="subtext">
          Expected discovery call window: within 2 to 4 business hours.
        </p>

        <div className="success-actions">
          <a
            href={`https://wa.me/${COMPANY_INFO.contact.whatsappRaw}?text=${waText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp-success"
          >
            <span>💬</span> Discuss via WhatsApp (+91 8148920435)
          </a>
          <button
            type="button"
            className="btn btn-outline btn-sm"
            onClick={() => {
              setForm(initialState);
              setStatus({ state: 'idle', message: '' });
            }}
          >
            Submit Another Project
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="form-card reveal in" onSubmit={handleSubmit}>
      <div className="form-header-badge">
        <span className="live-sheet-indicator">
          <span className="pulse-circle" /> Connected to Google Sheets Database
        </span>
        <span className="form-sla-badge">🏗️ Turnkey Execution &amp; SLA Handover</span>
      </div>

      <div className="form-intro">
        <h3>Initiate a Technology Project</h3>
        <p>
          From zero-downtime office IT rollouts to complex cloud migrations and structured LAN cabling,
          RARMATRIX delivers milestone-driven technology execution.
        </p>
      </div>

      <div className="form-grid">
        <div className="field">
          <label htmlFor="proj-company">Company / Organization *</label>
          <input
            id="proj-company"
            name="company"
            placeholder="e.g. Nexus Global Technologies"
            value={form.company}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="proj-contact">Contact Person Name *</label>
          <input
            id="proj-contact"
            name="contact"
            placeholder="e.g. Rajesh Narayanan (CTO / Head of IT)"
            value={form.contact}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="proj-email">Business Email *</label>
          <input
            id="proj-email"
            type="email"
            name="email"
            placeholder="rajesh@nexus.com"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="proj-phone">Phone / WhatsApp Number *</label>
          <input
            id="proj-phone"
            type="tel"
            name="phone"
            placeholder="+91 98401 23456"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field span-2">
          <label htmlFor="proj-projectType">Project Type *</label>
          <select
            id="proj-projectType"
            name="projectType"
            value={form.projectType}
            onChange={handleChange}
            required
          >
            {PROJECT_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div className="field">
          <label htmlFor="proj-location">Deployment City / Location</label>
          <input
            id="proj-location"
            name="location"
            placeholder="e.g. Chennai, Bangalore, or Multi-site"
            value={form.location}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label htmlFor="proj-userCount">User / Endpoint Count</label>
          <input
            id="proj-userCount"
            name="userCount"
            placeholder="e.g. 50 Workstations, 2 Servers"
            value={form.userCount}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label htmlFor="proj-timeline">Target Go-Live Timeline</label>
          <select
            id="proj-timeline"
            name="timeline"
            value={form.timeline}
            onChange={handleChange}
          >
            <option value="Urgent (Within 7-14 Days)">Urgent (Within 7 - 14 Days)</option>
            <option value="Within 30 Days">Within 30 Days</option>
            <option value="1 - 3 Months">1 - 3 Months</option>
            <option value="Planning / Budgeting Stage">Planning / Budgeting Stage</option>
          </select>
        </div>

        <div className="field">
          <label htmlFor="proj-budget">Approximate Budget Range</label>
          <input
            id="proj-budget"
            name="budget"
            placeholder="e.g. ₹2L - ₹5L or To be estimated"
            value={form.budget}
            onChange={handleChange}
          />
        </div>

        <div className="field span-2">
          <label htmlFor="proj-existingInfra">Existing Infrastructure Overview</label>
          <input
            id="proj-existingInfra"
            name="existingInfra"
            placeholder="e.g. Cisco Catalyst 2960 switches, Dell PowerEdge servers, Microsoft 365 Business Standard"
            value={form.existingInfra}
            onChange={handleChange}
          />
        </div>

        <div className="field span-2">
          <label htmlFor="proj-scope">Project Scope &amp; Deliverables Summary</label>
          <textarea
            id="proj-scope"
            name="scope"
            placeholder="Describe the key deliverables, site constraints, hardware requirements, or migration roadmap..."
            value={form.scope}
            onChange={handleChange}
            rows={3}
          />
        </div>
      </div>

      {status.state === 'error' && (
        <div className="form-error-banner">⚠️ {status.message}</div>
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
            'Start Your IT Project with RARMATRIX'
          )}
        </button>

        <p className="privacy-note">
          📁 All architectural scopes are treated with strict confidentiality under RARMATRIX non-disclosure terms.
        </p>
      </div>
    </form>
  );
}
