import './assets/css/bootstrap.min.css'
import React, { useState } from 'react'
import ReactLoading from 'react-loading'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Gallery from './components/Gallery/Gallery'

import { GlobalStyle, Container } from './global'

function App() {
  const [loading, setLoading] = useState(false);

  setTimeout(() => {
    setLoading(true);
  }, 1000);


  return (
    <>
      <GlobalStyle />
      {loading === false
        ? <ReactLoading className="loader mx-auto my-auto" type={"spin"} color={"#4438b7"} height={100} width={100} />
        :
        <>
          <Header />
          <About />
          <Gallery />
          <Contact />
          <Footer />
        </>
      }
    </>
  );

}

export default App;