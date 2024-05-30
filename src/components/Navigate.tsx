import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react"; // Добавлен useState
import { motion } from 'framer-motion'

import '../styles/Navigate.css';

import logo from '../assets/logo.svg';

const Navigate = () => {
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false); // Состояние для отслеживания прокрутки страницы

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
        <motion.nav 
        initial={{ opacity: 0, scale: 1.3}}
        animate={{opacity: 1, scale: 1}}
        transition={{delay: .9, duration: 1}}
        className={scrolled ? 'scrolled' : ''}> {/* Применение класса в зависимости от состояния прокрутки */}
            <div className="logosContain">
                <NavLink to="/">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <p>InhouseAd</p>
                    </div>
                </NavLink>
            </div>
            <div className="navbar navbar-1">
                <ul>
                    <li className={location.pathname === "/advertiser" ? "active" : ""}><NavLink to='advertiser' role="button"><span className="text">Advertiser</span></NavLink></li>
                    <li className={location.pathname === "/publisher" ? "active" : ""}> <NavLink to='publisher' role="button"><span className="text">Publisher</span></NavLink></li>
                    <li className={location.pathname === "/adformats" ? "active" : ""}><NavLink to='adformats' role="button"><span className="text">Ad Formats</span></NavLink></li>
                    <li className={location.pathname === "/contactus" ? "active" : ""}><NavLink to='contactus' role="button"><span className="text">Contact us</span></NavLink></li>
                </ul>
            </div>
            <div className="sign-in">
                <NavLink to='login'>Login</NavLink>
                <NavLink to='signup'>Sign Up</NavLink>
            </div>
        </motion.nav>
    );
};

export default Navigate;
