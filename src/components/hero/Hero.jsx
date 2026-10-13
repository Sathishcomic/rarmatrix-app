// HERO SECTION: the first impression on the Home page. It introduces the brand, services, and
// CTA paths, and the mesh/particles create the visual depth without the heavy video load.
import { Link } from 'react-router-dom';
import WireSphere from './WireSphere';
import ParticleField from './ParticleField';
import { COMPANY_INFO } from '../../data/company';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <ParticleField className="hero-canvas" />

      <div className="hero-orb hero-orb-a" />
      <div className="hero-orb hero-orb-b" />
      <div className="hero-orb hero-orb-c" />

      <div className="mesh-accent mesh-accent-a">
        <WireSphere nodes={12} radius={52} neighbors={2} speed={-0.008} tiltX={0.5} wobble={0.18} wobbleSpeed={1.2} color={[190, 150, 235]} focal={260} nodeRadius={3.2} glow={10} />
      </div>
      <div className="mesh-accent mesh-accent-b">
        <WireSphere nodes={10} radius={42} neighbors={2} speed={0.01} tiltX={0.22} wobble={0.2} wobbleSpeed={0.9} color={[130, 195, 255]} focal={220} nodeRadius={2.8} glow={8} />
      </div>

      <div className="wrap hero-grid">
        <div>
          <div className="hero-trust-tag">
            <span className="live-dot" />
            <span>RARMATRIX TECHNOLOGIES PVT LTD · CIN: {COMPANY_INFO.cin} · ROC CHENNAI</span>
          </div>

          <div className="eyebrow">
            <span className="eyebrow-dot" />
            IT STAFFING · INFRASTRUCTURE · MANAGED SERVICES · CLOUD PROJECTS
          </div>

          <h1>
            Your IT.<br />Our Responsibility.
          </h1>

          <p className="lede">
            <strong>{COMPANY_INFO.legalName}</strong> provides skilled IT professionals,
            enterprise infrastructure architecture, and managed technology services that help organizations
            build, operate, and scale high-reliability IT environments.
          </p>

          <div className="hero-btns">
            <Link to="/request-resource" className="btn btn-hero-primary">
              Request IT Resource
            </Link>
            <Link to="/services" className="btn btn-hero-outline">
              Explore Services
            </Link>
            <a
              href={COMPANY_INFO.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-hero-wa"
              title="Chat on WhatsApp"
            >
              <span>💬</span> WhatsApp: {COMPANY_INFO.contact.whatsapp}
            </a>
          </div>

          <div className="service-line">
            <span>IT Staffing</span>
            <span>Infrastructure</span>
            <span>Managed IT</span>
            <span>Cloud &amp; Security</span>
            <span>Turnkey Projects</span>
            <span>IT AMC</span>
          </div>
        </div>

        <div className="network-wrap" aria-hidden="true">
          <WireSphere
            nodes={38}
            radius={170}
            neighbors={6}
            speed={0.0025}
            tiltX={0.25}
            wobble={0.035}
            wobbleSpeed={0.7}
            color={[25, 151, 202]}
            focal={650}
            nodeRadius={6}
            glow={18}
            lineWidth={1.4}
            lineOpacity={0.55}
          />
        </div>
      </div>
      <div className="hero-seam" />
    </section>
  );
}
