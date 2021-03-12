import React from 'react'
import {Link} from 'react-router-dom'
import Animatedimage from './Animatedimage';
import { Button } from './Button';
import './Offer.css'

function Offer({
    lightBg,
    topLine,
    lightText,
    lightTextDesc,
    headline,
    description,
    buttonLabel,
    img,
    alt,
    imgStart
  }) {

    return (
      <>
        <div
          className={lightBg ? 'offer__hero-section' : 'offer__hero-section darkBg'}
        >
          <div className='container'>
            <div
              className='row offer__hero-row'
              style={{
                display: 'flex',
                flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
              }}
            >
              <div className='col'>
                <div className='offer__hero-text-wrapper'>
                  <div className='top-line'>{topLine}</div>
                  <h1 className={lightText ? 'heading' : 'heading dark'}>
                    {headline}
                  </h1>
                  <p
                    className={
                      lightTextDesc
                        ? 'offer__hero-subtitle'
                        : 'offer__hero-subtitle dark'
                    }
                  >
                    {description}
                  </p>
                  <Link to='/register'>
                    <Button buttonSize='btn--wide' buttonColor='light__purple'>
                      {buttonLabel}
                    </Button>
                  </Link>
                </div>
              </div>
              <div className='col'>
                <div className='offer__hero-img-wrapper'>
                  <Animatedimage className='offer__hero-img'/>
                  {/* <img src={img} alt={alt}  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

export default Offer
