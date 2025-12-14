import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./components/Naviagtion";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import IntroLoader from "./components/IntroLoader";

export default function App() {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    const hasPlayed = sessionStorage.getItem("introPlayed");

    if (!hasPlayed) {
      setShowIntro(true);
    }
  }, []);

  const handleIntroFinish = () => {
    sessionStorage.setItem("introPlayed", "true");
    setShowIntro(false);
  };

  return (
    <>
      {showIntro && <IntroLoader onFinish={handleIntroFinish} />}

      {!showIntro && (
        <div className="min-h-screen">
          <Navigation />
          <ScrollToTop />
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}
