import { useState, useRef } from 'react';
import { submitToGoogleSheet, fileToBase64 } from '../../services/sheetsService';
import { COMPANY_INFO } from '../../data/company';
import { triggerConfetti } from '../../utils/confetti';
import './Form.css';

const ROLES = [
  'Desktop Support Engineer (L1 / L2)',
  'Network Engineer (LAN / WAN / Cisco / Firewall)',
  'System Administrator (Windows Server / Linux / Active Directory)',
  'Field Support & Infrastructure Deployment Engineer',
  'Cloud Engineer (AWS / Azure / Hybrid)',
  'Cybersecurity & Endpoint Protection Specialist',
  'Microsoft 365 & Workspace Administration Engineer',
  'IT Helpdesk Coordinator / Service Desk Lead',
  'IT Asset & Procurement Specialist',
  'Project Engineer (Turnkey IT Deployments)',
  'Other Technical Specialist',
];

const EXPERIENCE_OPTIONS = [
  'Fresher (0 - 1 year)',
  '1 - 2 years',
  '2 - 4 years',
  '4 - 6 years',
  '6 - 10 years',
  '10+ years (Lead / Architect)',
];

const NOTICE_PERIODS = [
  'Immediate Joiner (0 - 7 days)',
  '15 Days',
  '30 Days',
  '45 - 60 Days',
  'Serving Notice Period',
];

export default function CareerApplyForm({ selectedRole = '', onRoleChange }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    role: selectedRole || ROLES[0],
    experience: '1 - 2 years',
    city: 'Chennai',
    noticePeriod: 'Immediate Joiner (0 - 7 days)',
    expectedCtc: '',
    linkedinUrl: '',
    resumeLink: '',
    notes: '',
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [fileError, setFileError] = useState('');
  const [dragActive, setDragActive] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState(null);
  const fileInputRef = useRef(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (name === 'role' && onRoleChange) {
      onRoleChange(value);
    }
  }

  function handleFileChange(e) {
    const file = e.target.files?.[0];
    validateAndSetFile(file);
  }

  function validateAndSetFile(file) {
    setFileError('');
    if (!file) return;

    // Check size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      setFileError('File size exceeds 10MB. Please upload a smaller PDF/DOCX or share a Google Drive link.');
      return;
    }

    const validExtensions = ['.pdf', '.doc', '.docx'];
    const fileName = file.name.toLowerCase();
    const isValid = validExtensions.some((ext) => fileName.endsWith(ext));

    if (!isValid) {
      setFileError('Only PDF, DOC, or DOCX formats are supported.');
      return;
    }

    setSelectedFile(file);
  }

  function handleDrag(e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  }

  function handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      validateAndSetFile(e.dataTransfer.files[0]);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!selectedFile && !form.resumeLink.trim()) {
      setFileError('Please either upload your resume file (PDF/DOCX) or paste a Google Drive/LinkedIn link.');
      return;
    }

    setSubmitting(true);

    try {
      let filePayload = {};
      if (selectedFile) {
        const fileInfo = await fileToBase64(selectedFile);
        filePayload = {
          fileName: fileInfo.fileName,
          fileType: fileInfo.fileType,
          fileSize: fileInfo.fileSize,
          fileData: fileInfo.base64,
        };
      }

      const payload = {
        formType: 'career',
        ...form,
        ...filePayload,
      };

      const res = await submitToGoogleSheet(payload);

      if (res.success) {
        triggerConfetti();
        const refId = 'RAR-' + Math.floor(100000 + Math.random() * 900000);
        setSubmissionResult({
          refId,
          name: form.name,
          role: form.role,
          message: res.message,
        });
      } else {
        setFileError(res.message || 'Submission encountered an error. Please connect via WhatsApp.');
      }
    } catch (err) {
      console.error('Error submitting application:', err);
      setFileError('Submission failed. Please connect with our recruitment team via WhatsApp: +91 8148920435');
    } finally {
      setSubmitting(false);
    }
  }

  if (submissionResult) {
    const waText = encodeURIComponent(
      `Hello RARMATRIX Talent Team,\nI have applied for the role: ${submissionResult.role}\nMy Name: ${submissionResult.name}\nApplication Ref ID: ${submissionResult.refId}\nPlease review my resume.`
    );

    return (
      <div className="form-card form-success reveal in">
        <div className="success-icon">✓</div>
        <div className="sheet-sync-pill">
          <span className="sync-dot" /> Profile & Resume Saved in RARMATRIX Careers Sheet
        </div>
        <h3>Application Received Successfully!</h3>
        <p>
          Thank you, <strong>{submissionResult.name}</strong>. Your application for <strong>{submissionResult.role}</strong>{' '}
          has been safely registered with Application Reference <code>{submissionResult.refId}</code>.
        </p>
        <p className="subtext">
          Our technical screening team evaluates candidate credentials based on current enterprise client deployments.
          Qualified applicants will be contacted for an initial screening call.
        </p>

        <div className="success-actions">
          <a
            href={`https://wa.me/${COMPANY_INFO.contact.whatsappRaw}?text=${waText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp-success"
          >
            <span>💬</span> Fast-Track via WhatsApp (+91 8148920435)
          </a>
          <button
            type="button"
            className="btn btn-outline btn-sm"
            onClick={() => {
              setSelectedFile(null);
              setSubmissionResult(null);
            }}
          >
            Submit Another Application
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="form-card career-form reveal in" onSubmit={handleSubmit}>
      <div className="form-header-badge">
        <span className="live-sheet-indicator">
          <span className="pulse-circle" /> Google Sheets Candidate Database
        </span>
        <span className="form-sla-badge">🎯 Immediate Client Deployments</span>
      </div>

      <div className="form-intro">
        <h3>Submit Your Resume &amp; Candidate Profile</h3>
        <p>
          Join our enterprise engineering bench. We deploy skilled IT professionals for onsite,
          hybrid, and project contracts across Tamil Nadu and pan-India client locations.
        </p>
      </div>

      <div className="form-grid">
        <div className="field">
          <label htmlFor="applicant-name">Full Name *</label>
          <input
            id="applicant-name"
            name="name"
            placeholder="Full name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="applicant-email">Email Address *</label>
          <input
            id="applicant-email"
            type="email"
            name="email"
            placeholder="Email address"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="applicant-phone">WhatsApp / Mobile Number *</label>
          <input
            id="applicant-phone"
            type="tel"
            name="phone"
            placeholder="Phone number"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="applicant-city">Current Location / City *</label>
          <input
            id="applicant-city"
            name="city"
            placeholder="City or region"
            value={form.city}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field span-2">
          <label htmlFor="applicant-role">Target Role *</label>
          <select
            id="applicant-role"
            name="role"
            value={form.role}
            onChange={handleChange}
            required
          >
            {ROLES.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>

        <div className="field">
          <label htmlFor="applicant-exp">Total IT Experience *</label>
          <select
            id="applicant-exp"
            name="experience"
            value={form.experience}
            onChange={handleChange}
            required
          >
            {EXPERIENCE_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div className="field">
          <label htmlFor="applicant-notice">Notice Period *</label>
          <select
            id="applicant-notice"
            name="noticePeriod"
            value={form.noticePeriod}
            onChange={handleChange}
            required
          >
            {NOTICE_PERIODS.map((np) => (
              <option key={np} value={np}>
                {np}
              </option>
            ))}
          </select>
        </div>

        <div className="field">
          <label htmlFor="applicant-ctc">Expected CTC (Annual / Monthly)</label>
          <input
            id="applicant-ctc"
            name="expectedCtc"
            placeholder="Expected compensation"
            value={form.expectedCtc}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label htmlFor="applicant-linkedin">LinkedIn / Portfolio Link</label>
          <input
            id="applicant-linkedin"
            name="linkedinUrl"
            placeholder="LinkedIn or portfolio URL"
            value={form.linkedinUrl}
            onChange={handleChange}
          />
        </div>

        {/* RESUME UPLOAD SECTION */}
        <div className="field span-2">
          <label>Resume / CV File * (Saved directly to Google Drive &amp; Sheet)</label>
          <div
            className={`file-dropzone ${dragActive ? 'dragover' : ''} ${selectedFile ? 'has-file' : ''}`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.doc,.docx"
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />

            {selectedFile ? (
              <div className="file-preview-card">
                <span className="file-icon">📄</span>
                <div className="file-info">
                  <strong>{selectedFile.name}</strong>
                  <span>{(selectedFile.size / (1024 * 1024)).toFixed(2)} MB · Ready to upload</span>
                </div>
                <button
                  type="button"
                  className="btn-remove-file"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedFile(null);
                  }}
                  title="Remove file"
                >
                  ✕
                </button>
              </div>
            ) : (
              <div className="dropzone-prompt">
                <div className="upload-cloud-icon">☁️</div>
                <p>
                  <strong>Click to upload</strong> or drag &amp; drop your resume here
                </p>
                <span className="dropzone-hint">PDF, DOC, DOCX up to 10MB</span>
              </div>
            )}
          </div>

          <div className="or-divider">
            <span>OR provide a public Google Drive / Dropbox link</span>
          </div>

          <input
            name="resumeLink"
            placeholder="Google Drive resume link"
            value={form.resumeLink}
            onChange={handleChange}
            className="resume-link-input"
          />
        </div>

        <div className="field span-2">
          <label htmlFor="applicant-notes">Key Technical Skills &amp; Certifications</label>
          <textarea
            id="applicant-notes"
            name="notes"
            placeholder="Describe relevant skills and experience"
            value={form.notes}
            onChange={handleChange}
            rows={3}
          />
        </div>
      </div>

      {fileError && <div className="form-error-banner">⚠️ {fileError}</div>}

      <div className="form-footer-action">
        <button
          type="submit"
          className="btn btn-primary form-submit"
          disabled={submitting}
        >
          {submitting ? (
            <>
              <span className="spinner-dot" /> Uploading Resume to Google Sheet...
            </>
          ) : (
            'Submit Candidate Application'
          )}
        </button>

        <p className="privacy-note">
          📁 All applicant profiles and uploaded resumes are stored securely in RARMATRIX's private Google Sheet &amp; Google Drive database.
        </p>
      </div>
    </form>
  );
}
