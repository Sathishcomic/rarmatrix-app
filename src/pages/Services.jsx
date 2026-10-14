import PageHero from '../components/ui/PageHero';
import ServiceBandCard from '../components/ui/ServiceBandCard';
import ProcessTimeline from '../components/ui/ProcessTimeline';
import CTASection from '../components/ui/CTASection';
import useReveal from '../hooks/useReveal';
import { SERVICE_BANDS, DEPLOYMENT_PROCESS } from '../data/services';
import { TECH_ECOSYSTEM } from '../data/content';
import ServiceMarquee from '../components/ui/ServiceMarquee';

export default function Services() {
  useReveal();

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Managed IT, infrastructure, cloud & more"
        desc="RARMATRIX delivers operational support and technical execution across your IT environment — not just staffing."
      />

      <ServiceMarquee />

      <section>
        <div className="wrap">
          <div className="service-band">
            {SERVICE_BANDS.map((band) => <ServiceBandCard key={band.id} {...band} />)}
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow-dark">How Engagements Work</span>
            <h2>From requirement to deployment</h2>
          </div>
          <ProcessTimeline steps={DEPLOYMENT_PROCESS} />
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow-dark">Technology We Work With</span>
            <h2>Ecosystem across endpoints, network, cloud & security</h2>
            <p>Only technologies RARMATRIX actually works with are listed — no implied official partnerships.</p>
          </div>
          <div className="tech-ecosystem">
            {Object.entries(TECH_ECOSYSTEM).map(([category, items]) => (
              <div className="tech-group reveal" key={category}>
                <h6>{category}</h6>
                <ul>{items.map((i) => <li key={i}>{i}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
