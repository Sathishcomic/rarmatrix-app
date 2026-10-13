// HEADER: top navigation, CTA buttons, and dropdown behavior for desktop + mobile.
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../../data/navigation';
import logoUrl from '../../assets/rarmatrix-logo.png';
import './Header.css';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownToggle = (label) => {
    setOpenDropdown((current) => (current === label ? null : label));
  };

  return (
    <header>
      <div className="wrap header-inner">
        <Link to="/" className="logo" onClick={() => { setMobileOpen(false); setOpenDropdown(null); }}>
          <img src={logoUrl} alt="RARMATRIX Technologies Pvt Ltd" className="logo-img" />
        </Link>

        <nav className="main-nav" aria-label="Main navigation">
          {NAV_LINKS.map((link) =>
            link.dropdown ? (
              <div
                className={`nav-item has-dropdown ${openDropdown === link.label ? 'is-open' : ''}`}
                key={link.label}
                onMouseEnter={() => setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
                onFocus={() => setOpenDropdown(link.label)}
                onBlur={() => setOpenDropdown(null)}
              >
                <button
                  type="button"
                  className="nav-link-button"
                  onClick={() => handleDropdownToggle(link.label)}
                  onFocus={() => setOpenDropdown(link.label)}
                  aria-expanded={openDropdown === link.label}
                  tabIndex={0}
                >
                  {link.label} <span className="nav-caret">▾</span>
                </button>
                <div className="nav-dropdown">
                  {link.dropdown.map((item) => (
                    <Link to={item.to} key={item.title} onClick={() => setOpenDropdown(null)}>
                      <strong>{item.title}</strong>
                      <span>{item.desc}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link to={link.to} key={link.label}>
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="header-cta">
          <Link to="/request-resource" className="btn btn-outline">Request IT Resource</Link>
          <Link to="/contact" className="btn btn-primary">Talk to Our Team</Link>
        </div>

        <button className="menu-toggle" onClick={() => setMobileOpen((v) => !v)} aria-label="Toggle menu">
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>

      {mobileOpen && (
        <div className="mobile-nav">
          {NAV_LINKS.map((link) => (
            <div key={link.label} className="mobile-nav-group">
              <Link to={link.to} onClick={() => setMobileOpen(false)}>{link.label}</Link>
              {link.dropdown && (
                <div className="mobile-nav-sub">
                  {link.dropdown.map((item) => (
                    <Link to={item.to} key={item.title} onClick={() => setMobileOpen(false)}>
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link to="/request-resource" className="btn btn-outline" onClick={() => setMobileOpen(false)}>Request IT Resource</Link>
          <Link to="/contact" className="btn btn-primary" onClick={() => setMobileOpen(false)}>Talk to Our Team</Link>
        </div>
      )}
    </header>
  );
}
