import { createContext, useContext, useEffect, useState } from "react";
import { getBrowserLocale } from "../services/helper";
import enLocale from "../scripts/locale_en.json";

const queryString = require("query-string");
const parsed = queryString.parse(window.location.search);
const defaultLocale = getBrowserLocale() || "en";
const hl = decodeURIComponent(parsed.hl ? parsed.hl : defaultLocale);
const LanguageContext = createContext();

export function useLanguage() {
  return useContext(LanguageContext);
}

let localeData = {};

function t(key, defaultValue) {
  return localeData[key].message || defaultValue;
}

export function LanguageProvider({ children }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const init = async () => {
      try {
        const data = await fetch(`/_locales/${hl}/messages.json`);
        localeData = await data.json();
      } catch (e) {
        localeData = enLocale;
      }
      setLoading(false);
    };
    init();
  }, []);
  const value = { t, hl };
  return (
    <LanguageContext.Provider value={value}>
      {loading ? <div id="spinner-1"></div> : children}
    </LanguageContext.Provider>
  );
}
