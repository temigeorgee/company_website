import React from 'react';
import { Button } from './Button';
import './Pricing.css';
import { FiFeather } from 'react-icons/fi';
import { BiCommand } from 'react-icons/bi';
import { HiAcademicCap } from 'react-icons/hi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function Pricing () {
  return (
    <IconContext.Provider value={{ color: '#1c2237', size: 64 }}>
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          <h1 className='pricing__heading'>Loan Packages </h1>
          <div className='pricing__container'>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <FiFeather />
                  
                </div>
                <h3>Light</h3>
                <h4>N8,000</h4>
                <p>per month</p>
                <ul className='pricing__container-features'>
                  <li>2% Interest rate</li>
                  <li>N100,000 Limit</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='purple'>
                  Choose Plan
                </Button>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <BiCommand />
                </div>
                <h3>Regular</h3>
                <h4>N200,000</h4>
                <p>per month</p>
                <ul className='pricing__container-features'>
                  <li>3.5% Interest rate</li>
                  <li>N2,000,000 Limit</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='transparent'>
                  Choose Plan
                </Button>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <HiAcademicCap />
                </div>
                <h3>Premium</h3>
                <h4>N500,000</h4>
                <p>per month</p>
                <ul className='pricing__container-features'>
                  <li>5% Interest rate</li>
                  <li>N20,000,000 Limit</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='purple'>
                  Choose Plan
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Pricing;
