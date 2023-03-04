import styled from 'styled-components'
import { Container, primaryColor } from '../../global'

export const About = styled.section`
    @media (max-width: 767px) {
        h2 {
            margin-left: auto;
            margin-right: auto;
        }
    }
`;

export const AboutImg = styled.div`
    text-align: center;

    @media (max-width: 575px) {
        padding-left: 15px;
        padding-right: 15px;
    }

    @media (max-width: 767px) {
        max-width: 420px;
        margin: auto;

    }
`;

export const AboutContainer = styled(Container)`
    margin-top: 3rem;
    margin-bottom: 3rem;

    @media (max-width: 767px) {
        text-align: center;
    }

    @media (max-width: 991px) {
        padding: 0;
    }
`;


export const AboutInfo = styled.div`
    display: flex;
    margin-bottom: 1rem;
`;

export const AboutText = styled.div`
    @media (max-width: 575px) {
            padding-left: 15px;
            padding-right: 15px;
            margin-top: 50px;
    }

    @media only screen and (min-width: 576px) and (max-width: 767px) {
            margin-top: 50px;

    }

    @media only screen and (min-width: 768px) and (max-width: 991px) {
            margin-top: 50px;

    }

    @media (max-width: 575px) {
        & h2 {
            margin-bottom: 15px;
        }
    }

    @media only screen and (min-width: 768px) and (max-width: 991px) {
        & h2 {
            font-size: 25px;
            margin-bottom: 15px;
        }
    }

    @media only screen and (min-width: 991px) and (max-width: 1200px) {
        & h2 {
            font-size: 30px;
            margin-bottom: 15px;
        }
    }
`;

export const AboutTextInner = styled.div`
    position: relative;
    padding-left: 30px;
    border-left: 5px solid ${primaryColor};
    margin-top: 19px;
    margin-bottom: 46px;
`;

export const AboutColMd5 = styled.div`
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width:768px) {
        flex: 0 0 41.666667%;
        max-width: 41.666667%
    }
`;

export const AboutColMd6 = styled.div`
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width:768px) {
        flex: 0 0 50%;
        max-width: 50%;
    }
`;
