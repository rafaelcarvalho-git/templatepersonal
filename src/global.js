import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import ReactLoading from 'react-loading'

export const colorBlack = '#252525'
export const colorWhite = '#FFFFFF'
export const primaryColor = '#4438b7'
export const secondaryColor = '#7a73cc'
export const tertiaryColor = '#5338b7'
export const quaternaryColor = '#aca5f3'
export const textShadow = '0 0 1em #252525, 0 0 1em #252525'
export const boxShadow = '0 .5rem 1rem rgba(33, 37, 41, .15)'


export const GlobalStyle = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css?family=Anton|Poppins:300,400,500,600,700&display=swap");
    * {
        padding: 0;
        margin: 0;
        font-family: Poppins, sans-serif;
    }
  a {
    text-decoration: none;
    transition: all 0.5s ease 0s;
  }
  
  a:hover {
    text-decoration: none;
    transition: all 0.5s ease 0s;
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--color-black);
    font-family: Anton, sans-serif;
  }
  
  p {
    font-family: Poppins, sans-serif;
    line-height: 1.8;
    font-size: 16px;
    margin-bottom: 0px;
    color: rgb(85, 85, 85);
    font-weight: 300;
  }
  
  h3 {
    font-size: 24px;
    line-height: 25px;
  }
  
  @media (max-width: 575px) {
    h3 {
      font-size: 20px;
    }
  }
  
  img {
    max-width: 100%;
  }
  
  a:focus,
  .button:focus,
  button:focus,
  .btn:focus {
    text-decoration: none;
    outline: none;
    box-shadow: none;
    transition: all 1s ease 0s;
  }
  
  

`;

export const Loader = styled(ReactLoading)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

export const Button = styled.button`
  display: inline-block;
  padding: 18px 50px;
  font-size: 15px;
  transition: all 0.5s ease 0s;
  text-transform: uppercase;
  border: 1px solid transparent;
  letter-spacing: 1.5px;
  background-size: 200%;
  color: white;
  background-image: linear-gradient(to right,${tertiaryColor} 0%, rgb(65, 56, 183) 50%,${tertiaryColor} 100%);
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
  
  &:hover, &:focus, &:active {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }
`;

export const Container = styled.div`
  padding-right: calc(1.5rem * .5);
  padding-left: calc(1.5rem * .5);
  margin-right: auto;
  margin-left: auto;

  @media (min-width:576px) {
      max-width: 540px;
  }

  @media (min-width:740px) {
      max-width: 720px;
  }

  @media (min-width:992px) {
      max-width: 960px;
  }

  @media (min-width:1200px) {
      max-width: 1140px;
  }

  @media (min-width:1400px) {
      max-width: 1320px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;