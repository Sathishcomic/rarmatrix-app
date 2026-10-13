import StatsBar from './StatsBar';
import './TrustBar.css';

export default function TrustBar() {
  return (
    <section className="trust-bar">
      <div className="wrap">
        <StatsBar variant="trust" />
      </div>
    </section>
  );
}
