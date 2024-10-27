import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Footer from './components/Footer.jsx'

function App() {

  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <Projects/>
      <Footer/>
    </>
  )
}

export default App
