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

        <Reveal className="hero-card">
          <div className="hero-card-name">Ing. Ivana Petrovická</div>
          <div className="hero-card-role">Daňový poradce</div>
          <div className="hero-divider" />
          <div className="hero-row">
            <span className="hero-row-label">Osvědčení KDP</span>
            <span className="hero-row-val">č. 4625</span>
          </div>
          <div className="hero-row">
            <span className="hero-row-label">Telefon</span>
            <span className="hero-row-val">+420 602 184 029</span>
          </div>
          <div className="hero-row">
            <span className="hero-row-label">E-mail</span>
            <span className="hero-row-val hero-email">petrovicka@danebezstarosti.cz</span>
          </div>
          <div className="hero-row">
            <span className="hero-row-label">Sídlo</span>
            <span className="hero-row-val">Zvole 100, 552 25 Rychnovek</span>
          </div>
          <div className="hero-badge">Člen Komory daňových poradců ČR</div>
        </Reveal>
      </div>
    </section>
  );
}

export default HeroSection;
