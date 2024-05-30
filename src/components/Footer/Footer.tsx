import { Link, useNavigate } from 'react-router-dom';
import '../../styles/Footer/Footer.css';

import skype from '../../assets/skype.svg';
import telegram from '../../assets/telegram.svg';
import linkedIn from '../../assets/linkedIn.svg';
import email from '../../assets/email.svg';

const Footer = () => {
    const navigate = useNavigate()
  const scrollToAboutUs = () => {
    navigate('/'); // Переход на главную страницу

    // Задержка, чтобы дождаться рендеринга главной страницы
    setTimeout(() => {

        window.scrollTo({top: 900, behavior: 'smooth'});
        
    }, 300); // Установите задержку, если необходимо
  };
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
            <Link to='/' onClick={scrollToAboutUs}>About us</Link>
        </div>
        <div className="footer-socials">
            <div className="footer-socials-media">
                <a href="skype:live:.cid.e6ef9e1c18a1fd69?chat">
                    <img src={skype} alt="skype" width={45}/>
                </a>
                <a href="https://t.me/InhouseAd">
                    <img src={telegram} alt="telegram" width={45}/>
                </a>
                <a href="https://www.linkedin.com/company/inhousead">
                    <img src={linkedIn} alt="LinkedIn" width={45}/>
                </a>
            </div>
            <div className="footer-socials-email">
                <img src={email} alt="" />
                <p>support@inhousead.net</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer;