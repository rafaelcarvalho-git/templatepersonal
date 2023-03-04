import * as S from './styles'
import { BsTelephone, BsGeoAlt, BsEnvelope } from 'react-icons/bs'
import Fade from 'react-reveal/Fade'
import { Container, Row, secondaryColor } from '../../global'

function Contact() {
    return (
        <S.Contact>
            <Container>
                <Row style={{ alignItems: 'center' }}>
                    <S.ContactItem href='tel:+88988573004'>
                        <BsTelephone style={{ fontSize: '46px', color: secondaryColor, marginBottom: '1.1rem' }} />
                        <h3>(88) 98812-3456</h3>
                        <p>Seg a sab 8h - 18h</p>
                    </S.ContactItem>


                    <S.ContactItem href='https://goo.gl/maps/H8iavTc2CnMzzvma7' target='_blank' rel='noreferrer noopener'>
                        <BsGeoAlt style={{ fontSize: '46px', color: secondaryColor, marginBottom: '1.1rem' }} />
                        <h3>Juazeiro do Norte</h3>
                        <p>Ceará, Brasil</p>
                    </S.ContactItem>


                    <S.ContactItem href='mailto:rafaskyplay@gmail.com'>
                        <BsEnvelope style={{ fontSize: '46px', color: secondaryColor, marginBottom: '1.1rem' }} />
                        <h3>personal@gmail.com</h3>
                        <p>Aguardo a sua mensagem</p>
                    </S.ContactItem>
                </Row>
            </Container>
        </S.Contact >
    );
}

export default Contact;