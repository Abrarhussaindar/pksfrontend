import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Home } from './pages/Home/Home';
import { NoPage } from './pages/NoPage/NoPage';
import "./assets/scss/style.scss"
import { AboutUs } from './pages/AboutUs/AboutUs';
import { ContactUs } from './pages/ContactUs/ContactUs';
import { Services } from './pages/Services/Services';
import { Login } from './pages/auth/Login/Login';
import { Register } from './pages/auth/Register/Register';
import { PrivacyPolicy } from './pages/PrivacyPolicy/PrivacyPolicy';
import { Disclaimer } from './pages/Disclaimer/Disclaimer';
import { TermsConditions } from './pages/TermsConditions/TermsConditions';
import { SiteMap } from './pages/SiteMap/SiteMap';
import { ReturnRefund } from './pages/ReturnRefund/ReturnRefund';
import { Cart } from './pages/Cart/Cart';
import { Profile } from './pages/Profile/Profile';
import { Order } from './pages/Order/Order';
import { Wishlist } from './pages/Wishlist/Wishlist';
import { Help } from './pages/Help/Help';
import { CustomerServices } from './pages/CustomerServices/CustomerServices';

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
        <Route path="/cart" element={<Cart />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/site-map" element={<SiteMap />} />
        <Route path="/return-refund" element={<ReturnRefund />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/help" element={<Help />} />
        <Route path="/customer-service" element={<CustomerServices />} />

        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  )
}
