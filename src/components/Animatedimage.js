import React from 'react'
import Lottie from 'react-lottie'
import * as money from '../money.json'

const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: money.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

function Animatedimage() {
    return (
        <div>
            <Lottie options={defaultOptions} height={350} width={350}/>
        </div>
    )
}

export default Animatedimage
