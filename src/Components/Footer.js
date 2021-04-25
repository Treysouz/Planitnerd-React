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
            <footer id='footer'>
               
                <div className='bottomFooter'>
                    <img
                        className='logo'
                        src={require('../Assets/Icons/logo.png')}
                        alt='Planitnerd'></img>
                    <div className='actionCallContainer'>
                        <div className='callToAction'>
                            <div className='inputContainer'>
                                <input
                                    type='email'
                                    placeholder='Enter your email'></input>
                                <button>Get Early Access</button>
                            </div>
                            <span className='errorMsg'>Email is required</span>
                        </div>
                    </div>
                    <div className='footerLinksContainer'>
                        <div className='textLinks'>
                            <a
                                className='footerLink'
                                href='https://planitnerd.s3.amazonaws.com/Planitnerd+Terms+of+Use.pdf'
                                target='_blank'
                                rel='noopener noreferrer'>
                                Terms of Service
                            </a>
                            <span>|</span>
                            <a
                                className='footerLink'
                                href='https://planitnerd.s3.amazonaws.com/Planitnerd+Privacy+Policy.pdf'
                                target='_blank'
                                rel='noopener noreferrer'>
                                Privacy Policy
                            </a>
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
                            <a
                                className='footerLink'
                                href='https://www.facebook.com/planitnerd'
                                target='_blank'
                                rel='noopener noreferrer'>
                                <FontAwesomeIcon
                                    icon={faFacebookF}></FontAwesomeIcon>
                            </a>
                            <a
                                className='footerLink'
                                href='https://www.instagram.com/planitnerd'
                                target='_blank'
                                rel='noopener noreferrer'>
                                <FontAwesomeIcon
                                    icon={faInstagram}></FontAwesomeIcon>
                            </a>
                            <a
                                className='footerLink'
                                href='https://twitter.com/planitnerd'
                                target='_blank'
                                rel='noopener noreferrer'>
                                <FontAwesomeIcon
                                    icon={faTwitter}></FontAwesomeIcon>
                            </a>
                            <a
                                className='footerLink'
                                href='https://www.linkedin.com/company/planitnerd'
                                target='_blank'
                                rel='noopener noreferrer'>
                                <FontAwesomeIcon
                                    icon={faLinkedinIn}></FontAwesomeIcon>
                            </a>
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
