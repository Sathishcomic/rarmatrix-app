import './Cards.css';

export default function PillarCard({ num, title, desc }) {
  return (
    <div className="pillar reveal">
      <div className="pillar-num">{num}</div>
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  );
}
