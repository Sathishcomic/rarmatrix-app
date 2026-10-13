import PageHero from '../components/ui/PageHero';
import useReveal from '../hooks/useReveal';
import { RESOURCE_ARTICLES } from '../data/content';

export default function Resources() {
  useReveal();

  return (
    <>
      <PageHero
        eyebrow="RARMATRIX Insights"
        title="Guides on IT staffing, infrastructure & cloud"
        desc="Practical articles for IT managers, CIOs and business owners planning their technology strategy."
      />

      <section>
        <div className="wrap">
          <div className="article-grid">
            {RESOURCE_ARTICLES.map((a) => (
              <div className="article-card reveal" key={a.title}>
                <span className="article-category">{a.category}</span>
                <h5>{a.title}</h5>
                <span className="card-link">Read Article <span className="card-link-arrow">&rarr;</span></span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
