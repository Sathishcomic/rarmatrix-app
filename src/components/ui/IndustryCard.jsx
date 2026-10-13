import './Cards.css';

export default function IndustryCard({ name }) {
  return (
    <div className="industry-card reveal">
      {name} <span>&rarr;</span>
    </div>
  );
}
