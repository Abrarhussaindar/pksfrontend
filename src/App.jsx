import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Home } from './pages/Home/Home';
import { NoPage } from './pages/NoPage/NoPage';
import "./assets/scss/style.scss"

export const App = () => {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  )
}
