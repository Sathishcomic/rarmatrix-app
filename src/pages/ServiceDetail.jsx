import { Link, useParams } from 'react-router-dom';
import PageHero from '../components/ui/PageHero';
import CTASection from '../components/ui/CTASection';
import ServiceMarquee from '../components/ui/ServiceMarquee';
import { SERVICE_BANDS } from '../data/services';
import './ServiceDetail.css';

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const service = SERVICE_BANDS.find((item) => item.id === serviceId);

  if (!service) {
    return (
      <section className="service-detail-missing">
        <div className="wrap">
          <span className="eyebrow-dark">Service</span>
          <h1>We couldn't find that service</h1>
          <p>Browse our services to see how we can support your IT environment.</p>
          <Link to="/services" className="btn btn-primary">View all services</Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <PageHero eyebrow="RARMATRIX Services" title={service.title} desc={service.overview} />
      <ServiceMarquee />
      <section className="service-detail-section">
        <div className="wrap service-detail-layout">
          <div className="service-detail-intro">
            <span className="eyebrow-dark">What we can support</span>
            <h2>Practical delivery, shaped around your environment</h2>
            <p>{service.desc} The final scope is agreed with your team after we understand your current setup and requirements.</p>
            <div className="band-tags">
              {service.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
          </div>
          <div className="service-detail-offerings">
            <h3>Typical areas of work</h3>
            <ul>
              {service.deliverables.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
        <div className="wrap service-detail-back">
          <Link to="/services" className="card-link"><span aria-hidden="true">&larr;</span> All services</Link>
        </div>
      </section>
      <CTASection />
    </>
  );
}