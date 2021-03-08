import React from 'react'
import { MdFingerprint } from 'react-icons/md';
import { Link } from 'react-router-dom'
import { animateScroll as scroll } from "react-scroll";

import './Footer.css'

function Footer() {
    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
            <>
            <div className="footer">
            <div className="footer__container">
                    
                    <div class="footer__row">
                        <div class="footer-col-1">
                            <h3>
                                Download our app
                            </h3>
                            <p>Download our app for ios and Andorid mobile phones</p>
                            <div class="app-logo">
                              <img src="/images/app-store.png" alt=""/>  
                              <img src="/images/play-store.png" alt=""/>  

                            </div>
                        </div>
                        <div class="footer-col-2">
                          <Link to='/' className='footer-logo' onClick={toggleHome}>
                            <MdFingerprint className='navbar-icon' />
                            Tee
                            </Link>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus id quas corporis cumque a ea vitae libero minus ratione vel perferendis ipsam, placeat maxime assumenda unde temporibus, error architecto ut.</p>
                        </div>
                        <div class="footer-col-3">
                            <h3>
                            Useful Links
                            </h3>
                            <ul>
                                <li>Coupons</li>
                                <li>Blog Post</li>
                                <li>Return Policy</li>
                                <li>Join Afiliate</li>
                            </ul>
                        </div>
                        <div class="footer-col-4">
                            <h3>
                            follow us
                            </h3>
                            <ul>
                                <li>Facebook</li>
                                <li>Twitter</li>
                                <li>Instagram</li>
                                <li>Youtube</li>
                            </ul>
                        </div>
                    </div>
                    <hr/>
                    <p class="credit">Desgined by Teecup</p>
                </div>
            </div>
            </>
            
    )   
       
       
}

export default Footer;
