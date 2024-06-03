import React, { useState, useEffect, lazy, Suspense, useRef } from "react";
import { NavLink, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { RenderedProvider } from "./pages/RenderedContext";
import { motion } from 'framer-motion'

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
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [format, setFormat] = useState<string>('pop');
  const [open, setOpen] = useState<boolean>(false);
  const navbarRef = useRef<HTMLUListElement>(null);
  

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    const setClick = (e: MouseEvent) => {
      console.log(e.target)
    }
    window.addEventListener('click', setClick)
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('click', setClick)
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return (
    <RenderedProvider>
      <div className="box">
        <Router>
          <header className={scrolled ? 'scrolled' : ''}>
            <Navigate open={open} setOpen={setOpen} />
            {open && (
              <motion.ul initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: .7}} className="mini-bar">
                <li  onClick={() => setOpen(false)} className={location.pathname === "/advertiser" ? "active" : ""}>
                  <NavLink to='/advertiser' role="button"><span className="text">Advertiser</span></NavLink>
                </li>
                <li  onClick={() => setOpen(false)} className={location.pathname === "/publisher" ? "active" : ""}>
                  <NavLink to='/publisher' role="button"><span className="text">Publisher</span></NavLink>
                </li>
                <li  onClick={() => setOpen(false)} className={location.pathname === "/adformats" ? "active" : ""}>
                  <NavLink to='/adformats' role="button"><span className="text">Ad Formats</span></NavLink>
                </li>
                <li  onClick={() => setOpen(false)} className={location.pathname === "/contactus" ? "active" : ""}>
                  <NavLink to='/contactus' role="button"><span className="text">Contact us</span></NavLink>
                </li>
              </motion.ul>
            )}
            <HeaderBackground className="header-back" />
          </header>
          <div className="container">
            <Suspense fallback={<h2></h2>}>
              <Routes>
                <Route path="/" element={<Home setFormat={setFormat} format={format} />} />
                <Route path="/advertiser" element={<Advertiser setFormat={setFormat} format={format} />} />
                <Route path="/publisher" element={<Publisher />} />
                <Route path="/adformats" element={<AdFormats />} />
                <Route path="/contactus" element={<ContactUs />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </div>
          <Footer setFormat={setFormat} />
        </Router>
      </div>
    </RenderedProvider>
  );
};

export default App;
