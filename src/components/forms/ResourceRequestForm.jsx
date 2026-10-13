import { useState } from 'react';
import { submitToGoogleSheet } from '../../services/sheetsService';
import { COMPANY_INFO } from '../../data/company';
import { triggerConfetti } from '../../utils/confetti';
import './Form.css';

const initialState = {
  company: '',
  contact: '',
  email: '',
  phone: '',
  jobRole: '',
  resourceCount: '1',
  skills: '',
  experience: '2 - 4 years',
  location: 'Chennai / Onsite',
  workModel: 'Onsite',
  engagement: 'Dedicated',
  startDate: '',
  duration: '6 Months',
  additional: '',
};

export default function ResourceRequestForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ state: 'submitting', message: 'Saving resource requirement to Google Sheet...' });

    try {
      const result = await submitToGoogleSheet({
        formType: 'resource',
        ...form,
      });

      if (result.success) {
        triggerConfetti();
        setStatus({
          state: 'success',
          message: result.message || 'Resource requirement recorded successfully.',
        });
      } else {
        setStatus({
          state: 'error',
          message: result.message || 'Submission failed. Please connect via WhatsApp.',
        });
      }
    } catch (err) {
      console.error('Submission failed:', err);
      setStatus({
        state: 'error',
        message: 'Could not submit request. Please call us at +91 8148920435.',
      });
    }
  }

  if (status.state === 'success') {
    const waText = encodeURIComponent(
      `Hello RARMATRIX Talent Deployment Team,\nI have submitted an IT Resource Requirement on your website:\nCompany: ${form.company}\nContact: ${form.contact}\nRole: ${form.jobRole}\nResource Count: ${form.resourceCount}\nPlease share candidate profiles.`
    );

    return (
      <div className="form-card form-success reveal in">
        <div className="success-icon">✓</div>
        <div className="sheet-sync-pill">
          <span className="sync-dot" /> Recorded in Google Sheet Resource Database
        </div>
        <h3>Requirement Submitted Successfully</h3>
        <p>
          Thank you, <strong>{form.contact}</strong> from <strong>{form.company}</strong>.
          Our technical sourcing team is identifying matching profiles for <strong>{form.jobRole}</strong>.
        </p>
        <p className="subtext">
          Expected profile turnaround time: 24 to 48 hours with verified skill screenings.
        </p>

        <div className="success-actions">
          <a
            href={`https://wa.me/${COMPANY_INFO.contact.whatsappRaw}?text=${waText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp-success"
          >
            <span>💬</span> Expedite via WhatsApp (+91 8148920435)
          </a>
          <button
            type="button"
            className="btn btn-outline btn-sm"
            onClick={() => {
              setForm(initialState);
              setStatus({ state: 'idle', message: '' });
            }}
          >
            Submit Another Requirement
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
        <span className="form-sla-badge">⚡ Profile Turnaround: 24-48 Hrs</span>
      </div>

      <div className="form-intro">
        <h3>Request Dedicated IT Professionals</h3>
        <p>
          Specify your role requirements and deployment model. We match screened, certified
          IT engineers ready for onsite or remote client onboarding.
        </p>
      </div>

      <div className="form-grid">
        <div className="field">
          <label htmlFor="res-company">Company Name *</label>
          <input
            id="res-company"
            name="company"
            placeholder="e.g. Acme Enterprise Pvt Ltd"
            value={form.company}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="res-contact">Contact Person *</label>
          <input
            id="res-contact"
            name="contact"
            placeholder="e.g. Suresh Kumar (IT Manager)"
            value={form.contact}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="res-email">Business Email *</label>
          <input
            id="res-email"
            type="email"
            name="email"
            placeholder="suresh@acme.com"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="res-phone">Phone / WhatsApp Number *</label>
          <input
            id="res-phone"
            type="tel"
            name="phone"
            placeholder="+91 98765 43210"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="res-jobRole">Required Job Role *</label>
          <input
            id="res-jobRole"
            name="jobRole"
            placeholder="e.g. L2 Desktop Engineer / Network Lead"
            value={form.jobRole}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="res-resourceCount">Number of Resources *</label>
          <input
            id="res-resourceCount"
            name="resourceCount"
            placeholder="e.g. 2"
            value={form.resourceCount}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field span-2">
          <label htmlFor="res-skills">Key Technical Skills &amp; Certifications</label>
          <input
            id="res-skills"
            name="skills"
            placeholder="e.g. CCNA, Fortinet, Windows Server 2022, Microsoft 365, Hardware break-fix"
            value={form.skills}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label htmlFor="res-experience">Experience Level</label>
          <select
            id="res-experience"
            name="experience"
            value={form.experience}
            onChange={handleChange}
          >
            <option value="1 - 2 years">Junior (1 - 2 years)</option>
            <option value="2 - 4 years">Mid-level (2 - 4 years)</option>
            <option value="4 - 7 years">Senior (4 - 7 years)</option>
            <option value="8+ years">Lead / Architect (8+ years)</option>
          </select>
        </div>

        <div className="field">
          <label htmlFor="res-location">Deployment City / Location</label>
          <input
            id="res-location"
            name="location"
            placeholder="e.g. Chennai (Tambaram / OMR / Guindy)"
            value={form.location}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label htmlFor="res-workModel">Work Model</label>
          <select id="res-workModel" name="workModel" value={form.workModel} onChange={handleChange}>
            <option value="Onsite">Onsite at Client Office</option>
            <option value="Hybrid">Hybrid Support</option>
            <option value="Remote">100% Remote Dedicated</option>
          </select>
        </div>

        <div className="field">
          <label htmlFor="res-engagement">Engagement Model</label>
          <select id="res-engagement" name="engagement" value={form.engagement} onChange={handleChange}>
            <option value="Dedicated">Dedicated Full-Time Resource</option>
            <option value="Contract">Fixed-Term Contract (3-12 months)</option>
            <option value="Project">Project Milestone Deployment</option>
            <option value="Managed Service">Fully Managed SLA Team</option>
          </select>
        </div>

        <div className="field">
          <label htmlFor="res-startDate">Expected Start Date</label>
          <input
            id="res-startDate"
            type="date"
            name="startDate"
            value={form.startDate}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label htmlFor="res-duration">Expected Duration</label>
          <input
            id="res-duration"
            name="duration"
            placeholder="e.g. 6 Months / Long-term"
            value={form.duration}
            onChange={handleChange}
          />
        </div>

        <div className="field span-2">
          <label htmlFor="res-additional">Additional Requirements or Job Description Notes</label>
          <textarea
            id="res-additional"
            name="additional"
            placeholder="Shift timings, specific client SLAs, background check criteria, or system environment..."
            value={form.additional}
            onChange={handleChange}
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
            'Submit Resource Requirement'
          )}
        </button>

        <p className="privacy-note">
          🔒 RARMATRIX ensures quick candidate vetting, background verification, and compliance assurance.
        </p>
      </div>
    </form>
  );
}
