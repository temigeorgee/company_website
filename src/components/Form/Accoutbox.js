import React from 'react'
import './Accountbox.css'
import Loginform from './Loginform'

function Accoutbox() {
    return (
        <>
            <div className="box-container">
                <div className="top-container">
                    <div className="backdrop">
                    </div>
                    <div className="header-container">
                    <h2 className="header-text">Welcome</h2>
                                <h2 className="header-text">Back</h2>
                                <h5 className="small-text">
                                    Please log in to your account
                                </h5>
                        </div>
                </div>
                <Loginform/>
            </div>
        </>
    )
}

export default Accoutbox
