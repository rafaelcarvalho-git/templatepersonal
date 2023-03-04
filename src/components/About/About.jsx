import * as S from './styles'
import about from '../../assets/img/about_img_1.png'
import Fade from 'react-reveal/Fade'
import { BsWhatsapp, BsFillPersonLinesFill } from 'react-icons/bs'
import { FaUserGraduate, FaGraduationCap } from 'react-icons/fa'
import { Button, Row, primaryColor, secondaryColor } from '../../global'

function About() {
    return (
        <S.About>
            <S.AboutContainer>
                <Fade up>
                    <Row style={{ alignItems: 'center', justifyContent: 'space-between' }}>
                        <S.AboutColMd5>
                            <S.AboutImg>
                                <img src={about} alt='foto personal' />
                            </S.AboutImg>
                        </S.AboutColMd5>
                        <S.AboutColMd6>
                            <S.AboutText>
                                <h2 style={{ maxWidth: '142px', borderBottom: `3.5px solid ${primaryColor}` }}>Sobre Mim</h2>
                                <S.AboutTextInner>
                                    <p> <span>Place very blessed second meat them So meat very cle stars metal darkness grass,
                                        midst be yield that after second place fruit made fourth likeness living
                                        creepeth italian multiply. That after second place fruit made fourth likeness
                                        living. Blessed second meat them So meat very cle stars metal darkness grass.</span>
                                    </p>
                                </S.AboutTextInner>
                                <div>
                                    <S.AboutInfo>
                                        <FaUserGraduate style={{ fontSize: '24px', color: secondaryColor, marginRight: '1rem' }} /><p>Bacharelado em Ed. Física</p>
                                    </S.AboutInfo>
                                    <S.AboutInfo>
                                        <FaGraduationCap style={{ fontSize: '24px', color: secondaryColor, marginRight: '1rem' }} /><p>Pós Graduação em Nutrição</p>
                                    </S.AboutInfo>
                                    <S.AboutInfo style={{ marginBottom: '0' }}>
                                        <BsFillPersonLinesFill style={{ fontSize: '24px', color: secondaryColor, marginRight: '1rem' }} /><p>CREF: 12345-6</p>
                                    </S.AboutInfo>
                                </div>
                                <Button href='https://api.whatsapp.com/send/?phone=5588988573004&text&app_absent=0' target='_blank' rel='noreferrer noopener' style={{ marginTop: '3rem' }}><BsWhatsapp style={{ marginBottom: '3px', marginRight: '4px' }} /> entre em contato</Button>
                            </S.AboutText>
                        </S.AboutColMd6>
                    </Row>
                </Fade>
            </S.AboutContainer>
        </S.About>
    );
}

export default About;