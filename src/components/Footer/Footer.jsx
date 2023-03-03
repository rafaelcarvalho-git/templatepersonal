import * as S from './styles'
import { BsWhatsapp, BsInstagram, BsEnvelope, BsFacebook } from 'react-icons/bs'
import Fade from 'react-reveal/Fade'
import { Container } from '../../global'

function Footer() {
    return (
        <S.Footer>
            <Fade>
                <Container >
                    <S.SocialIcons>
                        <S.Icon href="https://api.whatsapp.com/send/?phone=5588988573004&text&app_absent=0" target="_blank" rel="noreferrer noopener"><BsWhatsapp /></S.Icon>
                        <S.Icon href="https://www.instagram.com/rafaelcarvalho.py/" target="_blank" rel="noreferrer noopener"><BsInstagram /></S.Icon>
                        <S.Icon href="mailto:personal@gmail.com" target="_blank" rel="noreferrer noopener"><BsEnvelope /></S.Icon>
                        <S.Icon href="#" target="_blank" rel="noreferrer noopener"><BsFacebook /></S.Icon>
                    </S.SocialIcons>
                    <p>&copy; {new Date().getFullYear()} - Natson Personal</p>
                </Container>
            </Fade>
        </S.Footer>
    );
}

export default Footer;