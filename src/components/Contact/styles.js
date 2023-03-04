import styled from 'styled-components'

export const Contact = styled.section`
    text-align: center;
    margin-top: 7rem;
    margin-bottom: 7rem;
`;

export const ContactItem = styled.a`
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    text-decoration: none;
    cursor: pointer;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
    margin-bottom: 3rem;
    
    @media (min-width: 768px) {
        &:hover, &:focus, &:active {
            -webkit-transform: scale(1.08);
            transform: scale(1.08);
        }
    }

    @media (min-width:992px) {
        margin-bottom: 0 !important;   
        flex: 0 0 33.333333%;
        max-width: 33.333333%;
    }
`;