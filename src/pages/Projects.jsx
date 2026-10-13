import { Link } from 'react-router-dom';
import PageHero from '../components/ui/PageHero';
import RoleCard from '../components/ui/RoleCard';
import ProcessTimeline from '../components/ui/ProcessTimeline';
import StatsBar from '../components/ui/StatsBar';
import CTASection from '../components/ui/CTASection';
import useReveal from '../hooks/useReveal';
import { PROJECT_CATEGORIES, PROJECT_DELIVERY_PROCESS, CASE_STUDIES } from '../data/content';

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

      <section>
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow-dark">Case Studies</span>
            <h2>Real project outcomes, coming soon</h2>
            <p>We don't publish placeholder success stories. These will be replaced with verified case studies as projects are completed.</p>
          </div>
          <div className="case-grid">
            {CASE_STUDIES.map((c) => (
              <div className="case-card reveal" key={c.title}>
                <span className="case-badge">Case Study Coming Soon</span>
                <h5>{c.title}</h5>
                <dl>
                  <dt>Requirement</dt><dd>{c.requirement}</dd>
                  <dt>Solution</dt><dd>{c.solution}</dd>
                  <dt>Outcome</dt><dd>{c.outcome}</dd>
                </dl>
              </div>
            ))}
          </div>
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
