import { useState, useRef } from 'react';
import PageHero from '../components/ui/PageHero';
import CareerApplyForm from '../components/forms/CareerApplyForm';
import useReveal from '../hooks/useReveal';
import { COMPANY_INFO } from '../data/company';

const FEATURED_ROLES = [
  {
    id: 'desktop-l1-l2',
    title: 'Desktop Support Engineer (L1 / L2)',
    department: 'End-User Computing',
    location: 'Chennai / Client Onsite (West Tambaram & OMR)',
    type: 'Full-Time · Dedicated Onsite',
    experience: '1 - 3 Years',
    skills: ['Windows 10/11', 'Office 365', 'Hardware Troubleshooting', 'Outlook / Teams', 'Asset Tagging'],
    description: 'Provide level 1 and 2 technical support for corporate users, troubleshoot desktop hardware, peripheral devices, OS configurations, and day-one IT setups.',
  },
  {
    id: 'network-eng',
    title: 'Network & Security Engineer',
    department: 'Infrastructure & Connectivity',
    location: 'Chennai / Tamil Nadu Clients',
    type: 'Full-Time · Enterprise Client',
    experience: '2 - 5 Years',
    skills: ['Cisco CCNA', 'Fortinet / Sophos', 'VLANs & Routing', 'Switching', 'Structured Cabling'],
    description: 'Deploy, configure, and maintain local area networks, enterprise Wi-Fi 6 access points, core switches, and perimeter firewall security rules.',
  },
  {
    id: 'sysadmin',
    title: 'System Administrator (Server & AD)',
    department: 'Server & Directory Services',
    location: 'Chennai / Hybrid',
    type: 'Full-Time · Managed Support',
    experience: '3 - 6 Years',
    skills: ['Windows Server 2022', 'Active Directory', 'DHCP/DNS', 'Hyper-V / VMware', 'Backup DR'],
    description: 'Administer domain controllers, user access control policies, group policies (GPOs), VM clusters, and routine disaster recovery backups.',
  },
  {
    id: 'cloud-engineer',
    title: 'Cloud & Microsoft 365 Engineer',
    department: 'Cloud Solutions',
    location: 'Remote / Chennai',
    type: 'Full-Time · Practice Practice',
    experience: '2 - 5 Years',
    skills: ['Microsoft Azure', 'AWS EC2 / S3', 'M365 Admin', 'Exchange Online', 'Intune MDM'],
    description: 'Execute cloud migrations, configure tenant security baselines, administer Microsoft 365 services, and manage multi-cloud client environments.',
  },
  {
    id: 'it-helpdesk',
    title: 'IT Helpdesk Coordinator / Service Desk Lead',
    department: 'SLA Operations',
    location: 'West Tambaram, Chennai',
    type: 'Full-Time · Shifts',
    experience: '1 - 4 Years',
    skills: ['ITIL Process', 'Ticketing Tools (Jira / Zoho)', 'SLA Tracking', 'Vendor Escalation', 'Reporting'],
    description: 'Manage incoming IT tickets, coordinate technician dispatches across client premises, track resolution SLAs, and deliver weekly metrics.',
  },
];

export default function Careers() {
  useReveal();
  const [selectedRole, setSelectedRole] = useState(FEATURED_ROLES[0].title);
  const formRef = useRef(null);

  function handleApplyClick(roleTitle) {
    setSelectedRole(roleTitle);
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Join RARMATRIX Technologies"
        title="Build Your Enterprise IT Career"
        desc="We recruit, screen, and deploy skilled technology professionals across infrastructure, cloud, security, and enterprise end-user computing."
      />

      {/* Trust Metrics Bar */}
      <section className="section-career-metrics">
        <div className="wrap">
          <div className="career-metric-grid">
            <div className="metric-box reveal">
              <span className="metric-number">150+</span>
              <span className="metric-label">IT Engineers Deployed</span>
            </div>
            <div className="metric-box reveal">
              <span className="metric-number">96 Hrs</span>
              <span className="metric-label">Rapid Client Placement Cycle</span>
            </div>
            <div className="metric-box reveal">
              <span className="metric-number">24/7</span>
              <span className="metric-label">Helpdesk &amp; Technical Support</span>
            </div>
            <div className="metric-box reveal">
              <span className="metric-number">West Tambaram</span>
              <span className="metric-label">HQ &amp; Training Labs (Chennai 600045)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Roles */}
      <section>
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow-dark">Active Client Openings</span>
            <h2>Roles We Are Actively Screening For</h2>
            <p>
              RARMATRIX is expanding its technical workforce across Tamil Nadu and pan-India client sites.
              Click <strong>Apply Now</strong> on any opening to fast-track your resume submission.
            </p>
          </div>

          <div className="job-cards-list">
            {FEATURED_ROLES.map((role) => (
              <div className="job-card reveal in" key={role.id}>
                <div className="job-card-header">
                  <div>
                    <span className="job-dept-badge">{role.department}</span>
                    <h3 className="job-title">{role.title}</h3>
                    <div className="job-meta">
                      <span>📍 {role.location}</span>
                      <span>💼 {role.type}</span>
                      <span>⏱️ Exp: {role.experience}</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => handleApplyClick(role.title)}
                  >
                    Apply Now &rarr;
                  </button>
                </div>

                <p className="job-desc">{role.description}</p>

                <div className="job-skills-wrap">
                  {role.skills.map((s) => (
                    <span className="job-skill-pill" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="section-light" ref={formRef} id="apply-section">
        <div className="wrap">
          <div className="section-head center reveal">
            <span className="eyebrow-dark">Online Candidate Portal</span>
            <h2>Submit Your Resume to Google Sheets</h2>
            <p>
              Upload your resume (PDF/DOCX) or paste your Drive link below.
              Our talent acquisition and technical screening desk will process your application based on client requirements.
            </p>
          </div>

          <CareerApplyForm
            selectedRole={selectedRole}
            onRoleChange={(newRole) => setSelectedRole(newRole)}
          />

          <div className="talent-whatsapp-strip reveal in">
            <div className="whatsapp-strip-inner">
              <div className="strip-text">
                <h4>Have questions or need immediate hiring assistance?</h4>
                <p>Chat directly with the RARMATRIX talent acquisition desk on WhatsApp.</p>
              </div>
              <a
                href={COMPANY_INFO.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp-success"
              >
                <span>💬</span> WhatsApp HR: {COMPANY_INFO.contact.whatsapp}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
