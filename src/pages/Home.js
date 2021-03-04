import React from 'react'
import HeroSection from '../components/HeroSection'
import Offer from '../components/Offer'
import Pricing from '../components/Pricing'
import Service from '../components/Service'
import{ homeObjThree } from './data'

function Home() {
    return (
        <>
          <HeroSection />
          <Service/>
          <Offer {...homeObjThree}/>
          <Pricing/>

        </>
    )
}

export default Home
