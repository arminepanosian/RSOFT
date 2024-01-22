import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import { Home , Testimonials , Contact } from "./containers";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./locales/en/translation.json";
import translationRU from "./locales/ru/translation.json";
import translationAM from "./locales/am/translation.json";
import { Footer, Menu } from "./components";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEN,
    },
    ru: {
      translation: translationRU,
    },
    am: {
      translation: translationAM,
    },
  },
  lng: localStorage.getItem("lang") || "ru",
  fallbackLng: "ru",
  interpolation: {
    escapeValue: false,
  },
});

export const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Menu />
      <div style={{position:"relative",top:"60px"}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/review" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};
