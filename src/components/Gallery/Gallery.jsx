import * as S from './styles'
import Fade from 'react-reveal/Fade'
import { Row } from '../../global'
import { img1, img2, img3, img4, img5 } from './styles'

function Gallery() {
    return (
        <section>
            <Fade>
                <S.GalleryContainer>
                    <S.GalleryTitle>Galeria</S.GalleryTitle>
                    <Row>
                        <S.GalleryImageCol4>
                            <S.GalleryImage style={{ background: `url(${img1})` }}></S.GalleryImage>
                        </S.GalleryImageCol4>
                        <S.GalleryImageCol4>
                            <S.GalleryImage style={{ backgroundImage: `url(${img2})` }}></S.GalleryImage>
                        </S.GalleryImageCol4>
                        <S.GalleryImageCol4>
                            <S.GalleryImage style={{ backgroundImage: `url(${img3})` }}></S.GalleryImage>
                        </S.GalleryImageCol4>
                        <S.GalleryImageCol6>
                            <S.GalleryImage style={{ backgroundImage: `url(${img4})` }}></S.GalleryImage>
                        </S.GalleryImageCol6>
                        <S.GalleryImageCol6>
                            <S.GalleryImage style={{ backgroundImage: `url(${img5})` }}></S.GalleryImage>
                        </S.GalleryImageCol6>
                    </Row>
                </S.GalleryContainer>
            </Fade>
        </section>
    );
}

export default Gallery;