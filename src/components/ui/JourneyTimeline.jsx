import { JOURNEY } from '../../data/content';
import './JourneyTimeline.css';

export default function JourneyTimeline() {
  return (
    <div className="journey">
      <span className="eyebrow-dark" style={{ display: 'block', textAlign: 'center', marginBottom: 6 }}>Our Journey</span>
      <h3 className="journey-title">Built step by step, engagement by engagement</h3>
      <div className="journey-track">
        {JOURNEY.map((j) => (
          <div className="journey-item reveal" key={j.title}>
            <div className="journey-dot" />
            <span className="journey-year">{j.year}</span>
            <h6>{j.title}</h6>
            <p>{j.desc}</p>
          </div>
        ))}
      </div>
      <p className="stats-note">
        RARMATRIX TECHNOLOGIES PRIVATE LIMITED · CIN: U62090TN2025PTC181661 · ROC Chennai · Active
      </p>
    </div>
  );
}
