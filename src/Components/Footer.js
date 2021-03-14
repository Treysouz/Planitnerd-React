import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebookF,
    faInstagram,
    faTwitter,
    faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

export default class Footer extends Component {
    render() {
        return (
            <footer id="footer">
                <div className='topFooter'>
                    <h2>Are You A Points Guru? We Want To Hear From You!</h2>
                    <p>
                        <b>Contact us </b>to become a guide & get paid to help
                        others navigate their points strategies.
                    </p>
                </div>
                <div className='bottomFooter'>
                    <img
                        className='logo'
                        src={require('../Assets/Icons/logo.png')}
                        alt='Planitnerd'></img>
                    <div className='callToAction'>
                        <input
                            type='email'
                            placeholder='Enter your email'></input>{' '}
                        <button>Get early access</button>
                        <span className='errorMsg'>Email is required</span>
                    </div>

                    <div className='footerLinksContainer'>
                        <div className='textLinks'>
                            <Link className='footerLink' to='/'>
                                Terms of Service
                            </Link>
                            <span>|</span>
                            <Link className='footerLink' to='/'>
                                Privacy Policy
                            </Link>
                            <span>|</span>
                            <Link className='footerLink' to='/blog'>
                                Contact Us
                            </Link>
                        </div>
                    </div>
                    <div className='copyrightContainer'>
                        <p>
                            © Copyright 2021 | Planitnerd, Inc. All Rights
                            Reserved
                        </p>
                    </div>
                    <div className='footerLinksContainer'>
                        <div className='iconLinks'>
                            <Link className='footerLink' to='/'>
                                <FontAwesomeIcon
                                    icon={faFacebookF}></FontAwesomeIcon>
                            </Link>
                            <Link className='footerLink' to='/'>
                                <FontAwesomeIcon
                                    icon={faInstagram}></FontAwesomeIcon>
                            </Link>
                            <Link className='footerLink' to='/blog'>
                                <FontAwesomeIcon
                                    icon={faTwitter}></FontAwesomeIcon>
                            </Link>
                            <Link className='footerLink' to='/blog'>
                                <FontAwesomeIcon
                                    icon={faLinkedinIn}></FontAwesomeIcon>
                            </Link>
                        </div>
                    </div>
                    {/* <div className='badgeContainer'>
                        <img className="badge"
          src={require("../Assets/Icons/google-play-badge.png")}>
          </img>
                    </div> */}
                </div>
            </footer>
        );
    }
}
