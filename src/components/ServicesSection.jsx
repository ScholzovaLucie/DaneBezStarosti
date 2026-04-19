import { serviceCards } from '../data/content';
import Icon from './Icon';
import Reveal from './Reveal';

function ServicesSection() {
  return (
    <section className="services" id="sluzby">
      <div className="section-inner">
        <div className="section-eyebrow">Odborné služby</div>
        <h2 className="section-title">Co pro vás zajistíme</h2>
        <p className="section-sub">
          Péče o vaše daňové, účetní a mzdové povinnosti - spolehlivě a přesně.
        </p>

        <div className="services-grid">
          {serviceCards.map(({ title, description, icon, delay }) => (
            <Reveal key={title} as="article" className="svc-card" delay={delay}>
              <div className="svc-icon">
                <Icon paths={icon} />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
