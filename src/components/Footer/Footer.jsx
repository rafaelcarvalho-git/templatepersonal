import './Footer.css'
import { BsWhatsapp, BsInstagram, BsEnvelope, BsFacebook } from "react-icons/bs"
import Fade from 'react-reveal/Fade'

function Footer() {
    return (
        <footer>
            <Fade>
                <div className="container flex-column">
                    <div className="social_icon mb-3">
                        <a href="https://api.whatsapp.com/send/?phone=5588988573004&text&app_absent=0" target="_blank" rel="noreferrer noopener"><BsWhatsapp /></a>
                        <a href="https://www.instagram.com/rafaelcarvalho.py/" target="_blank" rel="noreferrer noopener"><BsInstagram /></a>
                        <a href="mailto:personal@gmail.com" target="_blank" rel="noreferrer noopener"><BsEnvelope /></a>
                        <a href="#" target="_blank" rel="noreferrer noopener"><BsFacebook /></a>
                    </div>
                    <p>&copy; {new Date().getFullYear()} - Personal</p>
                </div>
            </Fade>
        </footer>
    );
}

export default Footer;