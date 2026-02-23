import { createContext, useContext, useEffect, useState } from "react";
import { translations, LANGUAGES } from "../i18n.jsx";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const saved = localStorage.getItem("rc-language");
    if (saved && LANGUAGES.includes(saved)) {
      setLanguage(saved);
    }
  }, []);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("rc-language", lang);
  };

  const value = {
    language,
    t: translations[language] || translations.en,
    changeLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
