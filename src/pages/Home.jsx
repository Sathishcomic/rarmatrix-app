import { Link } from 'react-router-dom';
import Hero from '../components/hero/Hero';
import TrustBar from '../components/ui/TrustBar';
import PillarCard from '../components/ui/PillarCard';
import RoleCard from '../components/ui/RoleCard';
import ServiceBandCard from '../components/ui/ServiceBandCard';
import IndustryCard from '../components/ui/IndustryCard';
import ProcessTimeline from '../components/ui/ProcessTimeline';
import ModelDiagram from '../components/ui/ModelDiagram';
import JourneyTimeline from '../components/ui/JourneyTimeline';
import WhyUs from '../components/ui/WhyUs';
import CTASection from '../components/ui/CTASection';
import StatsBar from '../components/ui/StatsBar';
import useReveal from '../hooks/useReveal';
import '../components/ui/AboutStrip.css';

import { SERVICE_BANDS, TECHNICAL_ROLES, DEPLOYMENT_PROCESS } from '../data/services';
import { PROJECT_CATEGORIES, INDUSTRIES } from '../data/content';

const PILLARS = [
  { num: '', title: 'IT Workforce Solutions', desc: 'Skilled technical professionals deployed according to your business requirements.' },
  { num: '', title: 'Managed IT Services', desc: 'Reliable technical support for business users and IT environments.' },
  { num: '', title: 'Infrastructure & Technology', desc: 'Design, deployment, maintenance and optimization of IT infrastructure.' },
  { num: '', title: 'Technology Projects', desc: 'End-to-end implementation and deployment for business technology projects.' },
];

export default function Home() {
  useReveal();

  return (
    <>
      <Hero />
      <TrustBar />

      {/* Core Business Pillars */}
      <section className="pillars">
        <div className="wrap">
          <div className="pillar-grid">
            {PILLARS.map((p) => <PillarCard key={p.title} {...p} />)}
          </div>
        </div>
      </section>

      {/* About RARMATRIX */}
      <section className="section-light" id="about">
        <div className="wrap about-strip">
          <div className="reveal">
            <span className="eyebrow-dark">About RARMATRIX</span>
            <h2>Technology people.<br />Business solutions.</h2>
            <p className="lead-text">
              RARMATRIX TECHNOLOGIES PRIVATE LIMITED (CIN: U62090TN2025PTC181661) is an active B2B technology partner
              registered with ROC Chennai. We specialize in deploying screened IT professionals, managing enterprise infrastructure,
              and delivering turnkey technology rollouts with 24/7 SLA governance.
            </p>
            <div className="focus-tags">
              {['Technical Workforce', 'Enterprise Infrastructure', 'Managed Cloud & IT', 'Turnkey Rollouts', 'SLA Support', 'Business Continuity'].map((t) => (
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

      {/* IT Workforce Solutions / Technical Professionals We Provide */}
      <section id="workforce">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow-dark">Build Your IT Team</span>
            <h2>Technical professionals we provide</h2>
            <p>
              When businesses need additional technical capability, RARMATRIX identifies, evaluates and
              deploys qualified IT professionals based on the client's requirements.
            </p>
          </div>
          <div className="card-grid">
            {TECHNICAL_ROLES.map((role) => <RoleCard key={role.title} title={role.title} items={role.items} />)}
          </div>
        </div>
      </section>

      {/* Resource Deployment Process */}
      <section className="section-light">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow-dark">How We Work</span>
            <h2>From requirement to deployment</h2>
          </div>
          <ProcessTimeline steps={DEPLOYMENT_PROCESS} />
        </div>
      </section>

      {/* Managed IT / Infrastructure / Cloud & Security / AMC / Projects / Procurement */}
      <section id="services">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow-dark">What We Deliver</span>
            <h2>Managed IT, infrastructure &amp; cloud</h2>
            <p>Beyond staffing, RARMATRIX provides operational support and technical delivery across your IT environment.</p>
          </div>
          <div className="service-band">
            {SERVICE_BANDS.map((band) => <ServiceBandCard key={band.id} {...band} />)}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section-light" id="projects-main">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow-dark">Technology Projects</span>
            <h2>Delivering IT projects end to end</h2>
            <p>From office setup to cloud migration, RARMATRIX plans, deploys and supports technology projects across infrastructure, cloud and managed environments.</p>
          </div>
          <div className="card-grid">
            {PROJECT_CATEGORIES.map((p) => <RoleCard key={p.title} title={p.title} items={p.items} />)}
          </div>
          <StatsBar variant="dark" />
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="section-light" id="industries">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow-dark">Industries We Serve</span>
            <h2>Across growing businesses &amp; enterprise environments</h2>
          </div>
          <div className="industry-grid">
            {INDUSTRIES.map((name) => <IndustryCard key={name} name={name} />)}
          </div>
        </div>
      </section>

      {/* Why RARMATRIX */}
      <section className="section-navy">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow-dark">Why Rarmatrix</span>
            <h2>Built for operational reliability</h2>
          </div>
          <WhyUs />
        </div>
      </section>

      <CTASection />

      {/* Resources teaser */}
      <section className="section-light">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <span className="eyebrow-dark" style={{ justifyContent: 'center', display: 'flex' }}>Rarmatrix Insights</span>
          <h2 style={{ marginBottom: 16 }}>Guides on IT staffing, infrastructure &amp; cloud</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 28 }}>
            Practical articles for IT managers, CIOs and business owners planning their technology strategy.
          </p>
          <Link to="/resources" className="btn btn-primary">Browse Resources</Link>
        </div>
      </section>
    </>
  );
}
