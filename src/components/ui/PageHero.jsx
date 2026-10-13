export default function PageHero({ eyebrow, title, desc }) {
  return (
    <section className="page-hero">
      <div className="wrap">
        {eyebrow && <span className="eyebrow-dark mono">{eyebrow}</span>}
        <h1>{title}</h1>
        {desc && <p>{desc}</p>}
      </div>
    </section>
  );
}
