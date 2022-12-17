import './Header.css'
import Zoom from 'react-reveal/Zoom'
import Typed from 'react-typed'
import { BsWhatsapp, BsInstagram, BsEnvelope, BsFacebook } from "react-icons/bs"

function Header() {
    return (
        <header>
            <div className="container">
                <Zoom>
                    <div className="header-text text-center mt-4">
                        <h5>Olá, eu sou</h5>
                        <h1 className="header-under mx-auto">RAFAEL CARVALHO</h1>
                        <h2 className="header-subtitle mt-3 mb-5"><Typed strings={[
                            'Personal Trainer',
                            'Lutador Profissional',
                            'Atleta',
                            'Dançarino']}
                            typeSpeed={50}
                            backSpeed={60} loop />
                        </h2>
                        <div className="header-icons mx-auto d-flex mb-5">
                            <a target="_blank" rel="noreferrer noopener" href="https://github.com/rafaelcarvalho-git" className="header-icon mx-auto"><BsWhatsapp /></a>
                            <a target="_blank" rel="noreferrer noopener" href="https://api.whatsapp.com/send/?phone=5588988573004&text&app_absent=0" className="header-icon mx-auto"><BsInstagram /></a>
                            <a target="_blank" rel="noreferrer noopener" href="https://www.linkedin.com/in/rafaelcarvalho-ti/" className="header-icon mx-auto"><BsEnvelope /></a>
                            <a target="_blank" rel="noreferrer noopener" href="mailto:rafaskyplay@gmail.com" className="header-icon mx-auto"><BsFacebook /></a>
                        </div>
                        <a href="#" className="btn-1 btn-float">Agende sua aula experimental</a>
                    </div>
                </Zoom>
            </div>
        </header>
    );
}

export default Header;