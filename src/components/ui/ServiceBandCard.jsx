import { Link } from 'react-router-dom';
import './Cards.css';

export default function ServiceBandCard({ id, title, desc, tags, cta }) {
  return (
    <div className="band-card reveal" id={id}>
      <h5>{title}</h5>
      <p>{desc}</p>
      <div className="band-tags">
        {tags.map((t) => <span key={t}>{t}</span>)}
      </div>
      <Link to={`/services/${id}`} className="card-link">Know More <span className="card-link-arrow">&rarr;</span></Link>
      <br />
      <Link to="/contact" className="btn btn-outline" style={{ marginTop: 12, fontSize: '12.5px', padding: '9px 16px' }}>
        {cta}
      </Link>
    </div>
  );
}
