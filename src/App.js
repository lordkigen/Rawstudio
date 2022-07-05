import React from 'react'
import './App.css'
import Artists from './container/artists/Artists'
import Broadcast from './container/broadcast/Broadcast'
import Contact from './container/contact/Contact'
import Features from './container/features/Features'
import Footer from './container/footer/Footer'
import Hero from './container/hero/Hero'


function App() {
  return (
    <div className='app__container'>
        <Hero/>
        <Features/>
        <Artists/>
        <Broadcast/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App