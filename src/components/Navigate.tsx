import { NavLink } from "react-router-dom"
import { useLocation } from "react-router-dom"
import '../styles/Navigate.css'

import logo from '../assets/logo.svg'

const Navigate = () => {
    const location = useLocation()
  return (
    <nav>
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
                <li className={location.pathname ===  "/advertiser" ? "active" : ""}><NavLink to='advertiser' role="button"><span className="text">Advertiser</span></NavLink></li>
                <li className={location.pathname ===  "/publisher" ? "active" : ""}> <NavLink to='publisher' role="button"><span className="text">Publisher</span></NavLink></li>
                <li className={location.pathname ===  "/adformats" ? "active" : ""}><NavLink to='adformats' role="button"><span className="text">Ad Formats</span></NavLink></li>
                <li className={location.pathname ===  "/contactus" ? "active" : ""}><NavLink to='contactus' role="button"><span className="text">Contact us</span></NavLink></li>
            </ul>
        </div>
        <div className="sign-in">
            <NavLink to='login'>Login</NavLink>
            <NavLink to='signup'>Sign Up</NavLink>
        </div>
    </nav>
  )
}

export default Navigate