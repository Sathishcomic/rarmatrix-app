import PageHero from '../components/ui/PageHero';
import RoleCard from '../components/ui/RoleCard';
import CTASection from '../components/ui/CTASection';
import useReveal from '../hooks/useReveal';
import { RESOURCE_MODELS, TECHNICAL_ROLES, ENGAGEMENT_MODELS } from '../data/services';

export default function Solutions() {
  useReveal();

  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Build your IT team with RARMATRIX"
        desc="When businesses need additional technical capability, RARMATRIX identifies, evaluates and deploys qualified IT professionals based on the client's requirements."
      />

      <section>
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow-dark">Resource Models</span>
            <h2>Flexible ways to engage</h2>
          </div>
          <div className="model-grid">
            {RESOURCE_MODELS.map((m) => (
              <div className="model-card reveal" id={m.id} key={m.id}>
                <h5>{m.title}</h5>
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow-dark">Technical Professionals We Provide</span>
            <h2>Roles RARMATRIX recruits and deploys</h2>
          </div>
          <div className="card-grid">
            {TECHNICAL_ROLES.map((role) => <RoleCard key={role.title} title={role.title} items={role.items} />)}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow-dark">Flexible Engagement Models</span>
            <h2>Choose what fits your operation</h2>
          </div>
          <div className="model-grid">
            {ENGAGEMENT_MODELS.map((m) => (
              <div className="model-card reveal" key={m.title}>
                <h5>{m.title}</h5>
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
