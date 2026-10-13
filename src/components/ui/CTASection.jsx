import { Link } from 'react-router-dom';
import './CTASection.css';

export default function CTASection() {
  return (
    <section id="contact-cta">
      <div className="wrap">
        <div className="cta-dual">
          <div className="cta-box primary reveal">
            <h3>Need Technical Professionals?</h3>
            <p>Tell us your requirement and we'll identify, screen and deploy the right IT resource for your team.</p>
            <Link to="/request-resource" className="btn btn-white">Request an IT Resource</Link>
          </div>
          <div className="cta-box secondary reveal">
            <h3>Have an IT Requirement?</h3>
            <p>Talk to our team about managed support, infrastructure, cloud or a technology project.</p>
            <Link to="/contact" className="btn btn-white">Talk to Our Team</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
