import './Contact.css'
import { BsTelephone, BsGeoAlt, BsEnvelope } from "react-icons/bs"
import Fade from 'react-reveal/Fade'

function Contact() {
    return (
        <section className="text-center py-2 my-5">
            <div className="container my-5">
                <div className="row align-items-center">
                    <Fade>
                        <a href="tel:+88988573004" className="contact-item-hover col-lg-4 mb-5 mb-lg-0 text-decoration-none">
                            <BsTelephone className="contact-icon mb-3" />
                            <h3>(88) 98812-3456</h3>
                            <p>Seg a sab 8h - 18h</p>
                        </a>
                    </Fade>
                    <Fade up>
                        <a href="https://goo.gl/maps/H8iavTc2CnMzzvma7" target="_blank" rel="noreferrer noopener" className="contact-item-hover col-lg-4 mb-5 mb-lg-0 text-decoration-none">
                            <BsGeoAlt className="contact-icon mb-3" />
                            <h3>Juazeiro do Norte</h3>
                            <p>Ceará, Brasil</p>
                        </a>
                    </Fade>
                    <Fade>
                        <a href="mailto:rafaskyplay@gmail.com" className="contact-item-hover col-lg-4 mb-5 mb-lg-0 text-decoration-none">
                            <BsEnvelope className="contact-icon mb-3" />
                            <h3>personal@gmail.com</h3>
                            <p>Aguardo a sua mensagem</p>
                        </a>
                    </Fade>
                </div>
            </div>
        </section >
    );
}

export default Contact;