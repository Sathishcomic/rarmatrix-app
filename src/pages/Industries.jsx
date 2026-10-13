import PageHero from '../components/ui/PageHero';
import IndustryCard from '../components/ui/IndustryCard';
import CTASection from '../components/ui/CTASection';
import useReveal from '../hooks/useReveal';
import { INDUSTRIES } from '../data/content';
import '../components/ui/AboutStrip.css';

const TARGET_CLIENTS = [
  'IT companies', 'Software companies', 'Product companies', 'GCCs', 'Manufacturing companies',
  'Automotive companies', 'Banks and financial institutions', 'Hospitals', 'Retail organizations',
  'Logistics companies', 'Educational institutions', 'Real estate companies', 'Engineering companies',
  'BPO/KPO organizations', 'SMEs', 'Large corporate offices', 'Multi-location businesses',
];

export default function Industries() {
  useReveal();

  return (
    <>
      <PageHero
        eyebrow="Industries We Serve"
        title="Across growing businesses & enterprise environments"
        desc="RARMATRIX supports both growing businesses and large enterprise environments with technology workforce, infrastructure and IT operations."
      />

      <section>
        <div className="wrap">
          <div className="industry-grid">
            {INDUSTRIES.map((name) => <IndustryCard key={name} name={name} />)}
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow-dark">Who We Work With</span>
            <h2>Target client profile</h2>
          </div>
          <div className="tag-cloud reveal">
            {TARGET_CLIENTS.map((c) => <span key={c} className="focus-tag">{c}</span>)}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
