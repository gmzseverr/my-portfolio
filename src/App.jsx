import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isTurkish, setIsTurkish] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleLanguage = () => setIsTurkish(!isTurkish);

  return (
    <div className={darkMode ? "dark" : "light"}>
      <Header
        isDarkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        isTurkish={isTurkish}
        toggleLanguage={toggleLanguage}
      />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero isTurkish={isTurkish} />
              <Skills />
              <Profile />
              <Projects />
            </>
          }
        />
      </Routes>

      <Footer />
    </div>
  );
}
