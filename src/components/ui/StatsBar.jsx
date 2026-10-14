import './StatsBar.css';

const CAPABILITIES = [
  { title: 'IT talent', label: 'Dedicated · onsite · remote' },
  { title: 'Managed support', label: 'User · endpoint · infrastructure' },
  { title: 'Technology projects', label: 'Plan · deploy · hand over' },
  { title: 'Cloud & security', label: 'Assessment · implementation · support' },
];

const DELIVERY_STAGES = [
  { title: 'Discover', label: 'Requirements and current environment' },
  { title: 'Plan', label: 'Scope, resources and delivery approach' },
  { title: 'Deploy', label: 'Implementation and validation' },
  { title: 'Support', label: 'Handover and ongoing assistance' },
];

export default function StatsBar({ variant = 'trust' }) {
  const items = variant === 'trust' ? CAPABILITIES : DELIVERY_STAGES;

  return (
    <div className={variant === 'trust' ? 'trust-strip reveal' : 'stats-strip reveal'}>
      {items.map((item) => (
        <div key={item.title} className={variant === 'trust' ? 'trust-block' : 'stat-block'}>
          <div className="stat-num">{item.title}</div>
          <div className={variant === 'trust' ? 'trust-label' : 'stat-label'}>{item.label}</div>
        </div>
      ))}
    </div>
  );
}
