import { WHY_RARMATRIX } from '../../data/content';
import './WhyUs.css';

export default function WhyUs() {
  return (
    <div className="why-grid">
      {WHY_RARMATRIX.map((item, i) => (
        <div className="why-item reveal" key={item.title}>
          <div className="why-num">{String(i + 1).padStart(2, '0')}</div>
          <div>
            <h5>{item.title}</h5>
            <p>{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
