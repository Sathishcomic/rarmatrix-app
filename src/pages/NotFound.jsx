import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section style={{ textAlign: 'center', padding: '160px 0' }}>
      <div className="wrap">
        <h1 style={{ fontSize: 40, fontWeight: 800, marginBottom: 12 }}>404</h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: 24 }}>
          The page you're looking for doesn't exist.
        </p>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </div>
    </section>
  );
}
