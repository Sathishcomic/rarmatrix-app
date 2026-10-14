import { Link } from 'react-router-dom';
import PageHero from '../components/ui/PageHero';
import RoleCard from '../components/ui/RoleCard';
import ProcessTimeline from '../components/ui/ProcessTimeline';
import StatsBar from '../components/ui/StatsBar';
import CTASection from '../components/ui/CTASection';
import useReveal from '../hooks/useReveal';
import { PROJECT_CATEGORIES, PROJECT_DELIVERY_PROCESS } from '../data/content';

export default function Projects() {
  useReveal();

  return (
    <>
      <PageHero
        eyebrow="Technology Projects"
        title="Delivering IT projects end to end"
        desc="From office setup to cloud migration, RARMATRIX plans, deploys and supports technology projects across infrastructure, cloud and managed environments."
      />

      <section>
        <div className="wrap">
          <div className="card-grid">
            {PROJECT_CATEGORIES.map((p) => <RoleCard key={p.title} title={p.title} items={p.items} />)}
          </div>
          <StatsBar variant="dark" />
        </div>
      </section>

      <section className="section-light">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow-dark">Project Delivery Process</span>
            <h2>Discover, design, deploy, support</h2>
          </div>
          <ProcessTimeline steps={PROJECT_DELIVERY_PROCESS} />
        </div>
      </section>

      <section className="section-light">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <h2 style={{ marginBottom: 16 }}>Start your IT project with RARMATRIX</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 28 }}>
            Tell us your scope, timeline and existing infrastructure — we'll plan the engagement from there.
          </p>
          <Link to="/start-project" className="btn btn-primary">Start Your IT Project</Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
