import styled from 'styled-components'
import { primaryColor, quaternaryColor } from '../../global'

export const Footer = styled.footer`
    padding: 30px 0px;
    text-align: center;
    border-top: 1px solid rgba(90, 81, 219, 0.175);
`;

export const SocialIcons = styled.div`
    margin-bottom: 1rem !important;    
`;

export const Icon = styled.a`
    height: 40px;
    width: 40px;
    display: inline-block;
    border-radius: 50%;
    background-color: ${quaternaryColor};
    color: white !important;
    line-height: 40px;
    color: rgb(255, 255, 255);
    margin: 0px 5px;
    transition: all 0.5s ease 0s;    

    &:hover, &:focus, &:active {
        background-color: ${primaryColor};
    }
`;



