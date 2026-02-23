import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext.jsx";

function Navbar() {
  const { language, changeLanguage, t } = useLanguage();

  return (
    <header className="navbar">
      <div className="navbar__logo">{t.appName}</div>
      <nav className="navbar__links">
        <Link to="/">{t.nav.home}</Link>
        <Link to="/donor">{t.nav.donor}</Link>
        <Link to="/recipient">{t.nav.recipient}</Link>
        <Link to="/logistics">{t.nav.logistics}</Link>
        <Link to="/admin">{t.nav.admin}</Link>

        <select
          className="navbar__lang"
          value={language}
          onChange={(e) => changeLanguage(e.target.value)}
        >
          <option value="en">English</option>
          <option value="hi">हिन्दी</option>
          <option value="te">తెలుగు</option>
          <option value="mr">मराठी</option>
        </select>

        <Link to="/login" className="navbar__btn">
          {t.nav.login}
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
