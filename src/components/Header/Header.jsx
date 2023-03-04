import * as S from './styles'
import Zoom from 'react-reveal/Zoom'
import { BsWhatsapp, BsInstagram, BsEnvelope, BsFacebook } from 'react-icons/bs'
import Typed from 'react-typed'
import logo from '../../assets/img/logo.png'
import { Button } from '../../global'

function Header() {
    return (
        <S.Header>
            <Zoom>
                <S.HeaderContainer>
                    <img src={logo} alt='personal trainer' />
                    <S.HeaderTyped>
                        <Typed strings={[
                            'Personal Trainer',
                            'Lutador Profissional',
                            'Atleta',
                            'Dançarino']}
                            typeSpeed={50} backSpeed={60} loop />
                    </S.HeaderTyped>
                    <S.HeaderIcons>
                        <S.HeaderIcon target='_blank' rel='noreferrer noopener' href='https://github.com/rafaelcarvalho-git'><BsWhatsapp /></S.HeaderIcon>
                        <S.HeaderIcon target='_blank' rel='noreferrer noopener' href='https://api.whatsapp.com/send/?phone=5588988573004&text&app_absent=0'><BsInstagram /></S.HeaderIcon>
                        <S.HeaderIcon target='_blank' rel='noreferrer noopener' href='https://www.linkedin.com/in/rafaelcarvalho-ti/'><BsEnvelope /></S.HeaderIcon>
                        <S.HeaderIcon target='_blank' rel='noreferrer noopener' href='mailto:rafaskyplay@gmail.com'><BsFacebook /></S.HeaderIcon>
                    </S.HeaderIcons>
                    <Button href='#'>Agende sua aula experimental</Button>
                </S.HeaderContainer>
            </Zoom>
        </S.Header>
    );
}

export default Header;