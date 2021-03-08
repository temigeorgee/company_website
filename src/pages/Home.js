import React from 'react'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import Offer from '../components/Offer'
import Pricing from '../components/Pricing'
import Service from '../components/Service'
import{ offerObjOne } from './data'

function Home() {
    return (
        <>
        <Navbar/>
          <HeroSection />
          <Service/>
          <Offer {...offerObjOne}/>
          <Pricing/>
          <Footer/>
        </>
    )
}

export default Home
