import { SERVICE_BANDS } from '../../data/services';
import './ServiceMarquee.css';

export default function ServiceMarquee() {
  const offerings = SERVICE_BANDS.map((service) => service.title);

  return (
    <div className="service-marquee" aria-label="IT staffing, managed support, infrastructure, cloud, projects and procurement">
      <div className="service-marquee-track" aria-hidden="true">
        {[0, 1].map((copy) => (
          <div className="service-marquee-group" key={copy}>
            {offerings.map((offering) => (
              <span className="service-marquee-item" key={`${copy}-${offering}`}>
                {offering}<i />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}