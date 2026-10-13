import './ModelDiagram.css';

const STEPS = [
  'Client identifies IT requirement',
  'RARMATRIX sources & screens professionals',
  'Client interview & approval',
  'RARMATRIX employs & deploys the resource',
  'Onsite / remote / hybrid engagement',
  'Ongoing resource management & support',
];

export default function ModelDiagram() {
  return (
    <div className="model-diagram reveal">
      {STEPS.map((label) => (
        <div className="flow-step" key={label}>
          <div className="flow-dot" />
          <span className="label">{label}</span>
        </div>
      ))}
    </div>
  );
}
