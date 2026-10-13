import { useState } from 'react';
import { COMPANY_INFO } from '../../data/company';
import './SocialSidebar.css';

export default function SocialSidebar() {
  const [hidden, setHidden] = useState(false);

  return (
    <>
      <div className={`social-panel ${hidden ? 'social-hidden' : ''}`}>
        <button className="social-hide-btn" title="Hide Sidebar" onClick={() => setHidden(true)}>✕</button>

        <a
          href={COMPANY_INFO.contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon social-whatsapp"
          title={`Chat on WhatsApp (${COMPANY_INFO.contact.whatsapp})`}
        >
          <span className="social-live-pulse" />
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.47 14.38c-.29-.15-1.71-.85-1.98-.94-.27-.1-.46-.15-.66.15-.2.29-.76.94-.93 1.13-.17.2-.34.22-.63.07-.29-.15-1.22-.45-2.33-1.44-.86-.77-1.44-1.71-1.61-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.66-1.59-.9-2.18-.24-.57-.48-.5-.66-.5-.17-.01-.37-.01-.56-.01-.2 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.44s1.05 2.83 1.19 3.02c.15.2 2.06 3.15 5 4.42.7.3 1.24.48 1.67.61.7.22 1.34.19 1.84.12.56-.08 1.71-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.13-.27-.2-.56-.35z" />
            <path d="M12.02 2C6.5 2 2.02 6.48 2.02 12c0 1.85.5 3.58 1.36 5.07L2 22l5.07-1.33A9.95 9.95 0 0012.02 22C17.54 22 22 17.52 22 12S17.54 2 12.02 2zm0 18.13c-1.66 0-3.2-.46-4.53-1.25l-.32-.19-3.01.79.8-2.94-.21-.3A8.11 8.11 0 013.9 12c0-4.47 3.64-8.11 8.12-8.11S20.14 7.53 20.14 12s-3.64 8.13-8.12 8.13z" />
          </svg>
        </a>

        <a
          href={COMPANY_INFO.contact.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon social-instagram"
          title="Follow @rarmatrix on Instagram"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.31-1.46.72-2.13 1.39A5.87 5.87 0 00.62 4.14C.32 4.9.12 5.78.06 7.05 0 8.33 0 8.74 0 12s.01 3.67.06 4.95c.06 1.27.26 2.15.56 2.91.31.79.72 1.46 1.39 2.13a5.87 5.87 0 002.13 1.39c.76.3 1.64.5 2.91.56C8.33 24 8.74 24 12 24s3.67-.01 4.95-.06c1.27-.06 2.15-.26 2.91-.56a5.87 5.87 0 002.13-1.39 5.87 5.87 0 001.39-2.13c.3-.76.5-1.64.56-2.91.06-1.28.06-1.69.06-4.95s0-3.67-.06-4.95c-.06-1.27-.26-2.15-.56-2.91a5.87 5.87 0 00-1.39-2.13A5.87 5.87 0 0019.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0z" />
            <path d="M12 5.84A6.16 6.16 0 1012 18.16 6.16 6.16 0 0012 5.84zm0 10.16a4 4 0 110-8 4 4 0 010 8z" />
            <circle cx="18.41" cy="5.59" r="1.44" />
          </svg>
        </a>

        <a
          href={COMPANY_INFO.contact.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon social-linkedin"
          title="Connect on LinkedIn"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.07 2.07 0 110-4.14 2.07 2.07 0 010 4.14zM7.12 20.45H3.56V9h3.56v11.45z" />
          </svg>
        </a>

        <a
          href={`tel:${COMPANY_INFO.contact.rawPhone}`}
          className="social-icon social-call"
          title={`Call Us (${COMPANY_INFO.contact.primaryPhone})`}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.2c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8z" />
          </svg>
        </a>
      </div>

      <button
        className={`social-show-btn ${hidden ? 'visible' : ''}`}
        onClick={() => setHidden(false)}
        title="Open Quick Contact Bar"
      >
        <span className="social-live-pulse" />
        💬
      </button>
    </>
  );
}
