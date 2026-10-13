import { useEffect, useRef, useState } from 'react';
import { STATS } from '../../data/content';
import './StatsBar.css';

function CountUp({ target, suffix }) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const duration = 1400;
          const start = performance.now();
          function tick(now) {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
            else setValue(target);
          }
          requestAnimationFrame(tick);
          io.unobserve(el);
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target]);

  return <div ref={ref} className="stat-num">{value}{suffix}</div>;
}

export default function StatsBar({ variant = 'trust' }) {
  return (
    <>
      <div className={variant === 'trust' ? 'trust-strip reveal' : 'stats-strip reveal'}>
        {STATS.map((s) => (
          <div key={s.label} className={variant === 'trust' ? 'trust-block' : 'stat-block'}>
            <CountUp target={s.count} suffix={s.suffix} />
            <div className={variant === 'trust' ? 'trust-label' : 'stat-label'}>{s.label}</div>
          </div>
        ))}
      </div>
      <p className="stats-note">Sample figures shown for demonstration — replace with your verified numbers before launch.</p>
    </>
  );
}
