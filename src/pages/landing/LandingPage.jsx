import { Link } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import { useLanguage } from "../../context/LanguageContext.jsx";
import Footer from "../../components/layout/Footer";

function LandingPage() {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />
      <main className="landing">
        {/* HERO SECTION */}
        <section className="landing__hero">
          <div className="landing__text">
            <h1>{t.heroTitle}</h1>
            <p>{t.heroSub}</p>
            <div className="landing__actions">
              <Link to="/donor" className="btn primary">
                {t.donateNow}
              </Link>
              <Link to="/recipient" className="btn secondary">
                {t.requestHelp}
              </Link>
            </div>
          </div>

          <div className="landing__highlight landing__highlight--alert">
            <h2>{t.activeDrives}</h2>
            <ul>
              <li>
                <strong>{t.drive1}</strong> · {t.driveStatusOngoing}
              </li>
              <li>
                <strong>{t.drive2}</strong> · {t.driveStatusCollecting}
              </li>
            </ul>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="landing__steps">
          <h2>{t.howWorks}</h2>
          <div className="steps">
            <div className="step">
              <h3>{t.stepDonateTitle}</h3>
              <p>{t.stepDonateText}</p>
            </div>
            <div className="step">
              <h3>{t.stepOrganizeTitle}</h3>
              <p>{t.stepOrganizeText}</p>
            </div>
            <div className="step">
              <h3>{t.stepDeliverTitle}</h3>
              <p>{t.stepDeliverText}</p>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="landing__about">
          <h2>{t.aboutTitle}</h2>
          <p>{t.aboutP1}</p>
          <p>{t.aboutP2}</p>
          <p>{t.aboutP3}</p>
        </section>

        {/* IMPACT */}
        <section className="landing__impact">
          <h2>{t.impactTitle}</h2>
          <ul>
            <li>{t.impactItem1}</li>
            <li>{t.impactItem2}</li>
            <li>{t.impactItem3}</li>
          </ul>
        </section>
        <section className="landing__impact">...</section>
      <Footer />
      </main>
    </>
  );
}

export default LandingPage;
