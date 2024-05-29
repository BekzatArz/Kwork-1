import { useEffect, useState, lazy, Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const Home = lazy(() => import('./pages/Home'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Advertiser = lazy(() => import('./pages/Advertiser'));
const Publisher = lazy(() => import('./pages/Publisher'));
const AdFormats = lazy(() => import('./pages/AdFormats'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const Login = lazy(() => import('./pages/Login'));
const SignUp = lazy(() => import('./pages/SignUp'));

import './styles/App.css';

import Navigate from "./components/Navigate";
import Footer from "./components/Footer/Footer";

import HeaderBackground from './assets/HeaderBackground';

const App = () => {
  const [scrolled, setScrolled] = useState<boolean> (false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="box">
      <Router>
        <header className={scrolled ? 'scrolled' : ''}>
          <Navigate />
          <HeaderBackground className="header-back" />
        </header>
        <div className="container">
        <Suspense fallback={<h2>Loading...</h2>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/advertiser" element={<Advertiser />} />
            <Route path="/publisher" element={<Publisher />} />
            <Route path="/adformats" element={<AdFormats />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          </Suspense>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;