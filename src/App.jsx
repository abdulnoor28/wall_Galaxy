import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import Footer from './components/Footer'
import Consultation from './components/Consultation'

const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Products/>
      <Consultation/>
      <Footer/>
    </>
  )
}

export default App
