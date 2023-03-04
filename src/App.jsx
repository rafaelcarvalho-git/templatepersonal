import './assets/css/bootstrap.min.css'
import React, { useState } from 'react'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Gallery from './components/Gallery/Gallery'
import { GlobalStyle, Loader, primaryColor } from './global'

function App() {
  const [loading, setLoading] = useState(false);

  setTimeout(() => {
    setLoading(true);
  }, 1000);


  return (
    <>
      <GlobalStyle />
      {loading === false
        ? <Loader type={'spin'} color={primaryColor} height={95} width={95} />
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