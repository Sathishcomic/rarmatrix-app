import './Cards.css';

export default function RoleCard({ title, items }) {
  return (
    <div className="card reveal">
      <div className="card-icon">▣</div>
      <h5>{title}</h5>
      <ul>
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}
