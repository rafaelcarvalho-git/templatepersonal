import styled from 'styled-components'
import { Container, primaryColor, quaternaryColor, secondaryColor } from '../../global'
import headerImg from '../../assets/img/header-bg.png'

export const Header = styled.header`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #8EC5FC;
    background-image: linear-gradient(62deg, #a5d1fdc9 20%, #716accda 100%);
    background: url(${headerImg});
    background-position: center;
    background-attachment: fixed;
    background-size: cover;    
`;

export const HeaderContainer = styled(Container)` 
    text-align: center;
`;

export const HeaderTyped = styled.h2`
    text-shadow: 0 0 1em #252525, 0 0 1em #252525;
    margin: 1.5rem auto 2.5rem auto;
    color: white;
    font-family: Poppins, sans-serif;
    font-size: 28px;
    text-shadow: 0 0 0.1em #252525, 0 0 0.2em #252525;
    
    @media (max-width: 527px) {
        font-size: 32px;
    }

    @media (max-width: 394px) {
        font-size: 30px;
    }

    @media (max-width: 361px) {
        font-size: 29.5px;
    }
`;

export const HeaderIcons = styled.div`
    max-width: 280px;
    display: flex;
    justify-content: space-around;
    margin: auto auto 3rem auto;
    text-shadow: 0 0 1em #252525, 0 0 1em #252525;
`;

export const HeaderIcon = styled.a`
    font-size: 32px;
    color: white;
    transition: all 0.2s ease 0s;
    text-shadow: 0 0 0.2em black, 0 0 0.2em ${secondaryColor} !important;

    &:hover {
        color: ${secondaryColor};
    }

    @media (max-width: 527px) {
        font-size: 30px !important;      
    }
`;