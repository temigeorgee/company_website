import React from 'react'
import Accoutbox from '../components/Form/Accoutbox'
import { Link as LinkR } from 'react-router-dom'
import { MdFingerprint } from 'react-icons/md';


function Register() {
    return (
        <div className='register'>
              <LinkR to='/' className='register-logo'>
              <MdFingerprint className='' />
              Tee
            </LinkR>
            <div className="register-container">
            <Accoutbox/> 
            </div>
        </div>
    )
}

export default Register
