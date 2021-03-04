import React from 'react'
import HeroSection from '../components/HeroSection'
import Offer from '../components/Offer'
import Pricing from '../components/Pricing'
// import Services from '../components/Services'
import{ homeObjThree } from './data'

function Home() {
    return (
        <>
          <HeroSection />
          <Offer {...homeObjThree}/>
          <Pricing/>

        </>
    )
}

export default Home
