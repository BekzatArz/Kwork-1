import { Link } from 'react-router-dom'
import '../styles/Footer/Footer.css'

import skype from '../assets/skype.svg'
import telegram from '../assets/telegram.svg'
import linkedIn from '../assets/linkedIn.svg'

const Footer = () => {
  return (
    <footer>
        <div className='footer-links'>
            <Link to='/advertiser'>Advertiser</Link>
            <Link to='/publisher'>Publisher</Link>
            <div className='footer-childs'>
                <Link to='/adformats'>Ad Formats</Link>
                <div className='child-links'>
                    <Link to='/'>Pop</Link>
                    <Link to='/'>Push</Link>
                    <Link to='/'>Inpage</Link>
                    <Link to='/'>Native</Link>
                </div>
            </div>
            <div className="footer-childs">
                <Link to='/'>Support</Link>
                <div className='child-links'>
                Privacy policy <br />
                Terms and Conditions
                </div>
            </div>
            <Link to='/'>About us</Link>
        </div>
        <div className="footer-socials">
            <div className="footer-socials-media">
                <div className="social-">
                </div>
                <img src={skype} alt="skype" />
                <img src={telegram} alt="telegram" />
                <img src={linkedIn} alt="LinkedIn" />
            </div>
        </div>
    </footer>
  )
}

export default Footer