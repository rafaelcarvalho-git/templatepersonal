import './About.css'
import about from '../../assets/img/about_img_1.png'
import Fade from 'react-reveal/Fade'
import { BsWhatsapp, BsFillPersonLinesFill } from "react-icons/bs"
import { FaUserGraduate, FaGraduationCap } from "react-icons/fa"

function About() {
    return (
        <section>
            <div className="about container my-5">
                <Fade up>
                    <div className="row align-items-center justify-content-between">
                        <div className="col-md-5">
                            <div className="about-img text-center">
                                <img src={about} alt="foto personal" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="about-text">
                                <h2 className="mb-5 about-under">Sobre Mim</h2>
                                <div className="about-text-inner">
                                    <p> <span>Place very blessed second meat them So meat very cle stars metal darkness grass,
                                        midst be yield that after second place fruit made fourth likeness living
                                        creepeth italian multiply. That after second place fruit made fourth likeness
                                        living. Blessed second meat them So meat very cle stars metal darkness grass.</span>
                                    </p>
                                </div>
                                <div className="about-informations">
                                    <div className="about-info d-flex mb-3">
                                        <FaUserGraduate className="about-icon mr-3" /><p>Bacharelado em Ed. Física</p>
                                    </div>
                                    <div className="about-info d-flex mb-3">
                                        <FaGraduationCap className="about-icon mr-3" /><p>Pós Graduação em Nutrição</p>
                                    </div>
                                    <div className="about-info d-flex">
                                        <BsFillPersonLinesFill className="about-icon mr-3" /><p>CREF: 12345-6</p>
                                    </div>
                                </div>
                                <a href="https://api.whatsapp.com/send/?phone=5588988573004&text&app_absent=0" target="_blank" rel="noreferrer noopener" className="btn-1 btn-float mt-5"><BsWhatsapp className="m-ico" /> entre em contato</a>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        </section>
    );
}

export default About;