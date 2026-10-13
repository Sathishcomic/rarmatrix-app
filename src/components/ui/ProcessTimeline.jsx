import './ProcessTimeline.css';

export default function ProcessTimeline({ steps }) {
  return (
    <div className="timeline">
      {steps.map((s) => (
        <div className="t-step reveal" key={s.step || s.title}>
          <div className="t-num">{s.step || ''}</div>
          <h5>{s.title}</h5>
          <p>{s.desc}</p>
        </div>
      ))}
    </div>
  );
}
