import React from 'react'
import Lottie from 'react-lottie'
import './Contact.css'
import {Button} from './Button'
import * as contactus from '../contact.json'

const defaultOptions2 = {
  loop: true,
  autoplay: true, 
  animationData: contactus.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

function Contact() {
    return (
        <div className="contacts__container" id='contacts'>
            <div className="container">
            <div className="row">
                <div className='col'>
                <h1 className="title">Contact<span className="sub__title"> us</span></h1>
                <br/>
                <h6 className="description">
                    We would love to get a feedback from you and help with any complaint/
                    questions you.
                </h6>
                <div className="form" id="contact">
                    <div className="first-row">
                        <input type="text" placeholder="Name" required autofocus className='nameInput' />
                        <input type="number" placeholder="Tel. number" required className='numberInput' />
                    </div>
                    <input type="text" placeholder="Email Address" required className='emailInput'/>
                    <textarea type="text" placeholder="Your message.."></textarea>
                </div>
                <br/>
                <Button className='btns'  buttonColor='light__purple' buttonSize='btn--wide'>Send</Button>                </div>
                <div className="col">
                <div className="contacts__img">
                <Lottie options={defaultOptions2} height={350} width={350}/>
                </div>
            </div>
            </div>
        </div>
                
            
            
        </div>
    )
}

export default Contact
