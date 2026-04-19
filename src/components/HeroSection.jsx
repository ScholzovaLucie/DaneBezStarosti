import Reveal from './Reveal';

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-grid">
        <div>
          <img src="/img/logo.png" alt="Daně bez starostí" className="hero-logo" />
          <div className="hero-eyebrow">Daňový poradce · KDP ČR</div>
          <h1>
            Vaše daně
            <br />v <em>dobrých rukou</em>
          </h1>
          <p className="hero-sub">
            Profesionální daňové poradenství, účetní a mzdové služby. Svěřte své povinnosti
            zkušenému odborníkovi a ušetřete starosti i čas.
          </p>
          <div className="hero-btns">
            <a href="#kontakt" className="btn-primary">
              Nezávazná konzultace
            </a>
            <a href="#sluzby" className="btn-outline">
              Naše služby
            </a>
          </div>
        </div>

        <Reveal className="hero-avatar-wrap">
          <img src="/img/avatar.jpeg" alt="Ing. Ivana Petrovická" className="hero-avatar" />
          <div className="hero-avatar-badge">
            <span className="hero-avatar-name">Ing. Ivana Petrovická</span>
            <span className="hero-avatar-role">Daňový poradce · osvědčení č. 4625</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default HeroSection;
