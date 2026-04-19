function NavBar() {
  return (
    <nav>
      <a className="logo" href="#top">
        <img src="/img/logo.png" alt="Daně bez starostí" className="logo-img" />
      </a>
      <ul className="nav-links">
        <li>
          <a href="#sluzby">Služby</a>
        </li>
        <li>
          <a href="#balicky">Spolupráce</a>
        </li>
        <li>
          <a href="#oznameni">Oznamování</a>
        </li>
        <li>
          <a href="#kontakt" className="nav-cta">
            Kontakt
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
