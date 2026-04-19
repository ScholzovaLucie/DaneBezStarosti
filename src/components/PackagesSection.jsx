import { packageCards } from '../data/content';
import Reveal from './Reveal';

function PackagesSection() {
  return (
    <section className="packages" id="balicky">
      <div className="section-inner">
        <div className="section-eyebrow">Formy spolupráce</div>
        <h2 className="section-title">Zvolte si rozsah péče</h2>
        <p className="section-sub">
          Od jednorázových konzultací až po kompletní převzetí veškerých povinností vaší
          organizace.
        </p>

        <div className="pkg-grid">
          {packageCards.map(({ tier, name, items, ctaLabel, ctaClassName, featured, tag, delay }) => (
            <Reveal
              key={name}
              as="article"
              className={`pkg-card${featured ? ' featured' : ''}`}
              delay={delay}
            >
              {tag ? <div className="featured-tag">{tag}</div> : null}
              <div className="pkg-tier">{tier}</div>
              <div className="pkg-name">{name}</div>
              <ul className="pkg-list">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a href="#kontakt" className={ctaClassName}>
                {ctaLabel}
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PackagesSection;
