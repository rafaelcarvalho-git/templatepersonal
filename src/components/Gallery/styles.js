import styled from 'styled-components'
import { primaryColor, Container } from '../../global'
import img1 from '../../assets/img/gallery/img-1.jpg'
import img2 from '../../assets/img/gallery/img-2.jpg'
import img3 from '../../assets/img/gallery/img-3.jpg'
import img4 from '../../assets/img/gallery/img-4.jpg'
import img5 from '../../assets/img/gallery/img-5.jpeg'

export { img1, img2, img3, img4, img5 };

export const GalleryContainer = styled(Container)`
    padding-top: 3rem !important;
`;

export const GalleryTitle = styled.h2`
    max-width: 120px;
    border-bottom: 3.5px solid ${primaryColor};
    text-align: center;
    margin: 1.5rem auto 1rem auto;
`;

export const GalleryImage = styled.div`
    margin-top: 24px;
    background-repeat: no-repeat !important;
    background-position: center center !important;
    background-size: cover !important;
    height: 280px;
    cursor: pointer;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;

    @media (min-width: 768px) {
        height: 220px;

        &:hover, &:focus, &:active {
            -webkit-transform: scale(1.08);
            transform: scale(1.08);
        }
    }
`;

export const GalleryImageCol4 = styled.div`
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-left: auto;
    margin-right: auto;

    @media (min-width:768px) {
        flex: 0 0 33.333333%;
        max-width: 33.333333%;
    }

    & div {
        border-radius: .25rem; 
    }
`;

export const GalleryImageCol6 = styled.div`
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-left: auto;
    margin-right: auto;

    @media (min-width:768px) {
        flex: 0 0 50%;
        max-width: 50%;
    }

    & div {
        border-radius: .25rem; 
    }
`;





