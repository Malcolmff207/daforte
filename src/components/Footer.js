import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css'; // Include your CSS styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-content">
                    <div className="footer-menu">
                        <ul className="menu-items">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#contact">Join Daforte</a></li>
                            <li><a href="#contact">List Your Properties</a></li>
                        </ul>
                    </div>
                    <div className="footer-socials">
                        <a href='https://www.facebook.com/profile.php?id=61555613764859&mibextid=LQQJ4d&rdid=cCgV8cfFnI9nqxSq&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15UtpvLwCA%2F%3Fmibextid%3DLQQJ4d'><div className="social-icon"><FontAwesomeIcon icon={['fab', 'facebook']} /></div></a>
                        <a href="https://www.youtube.com/@daforte4575"><div className="social-icon"><FontAwesomeIcon icon={['fab', 'youtube']} /></div></a>
                        <a href="https://www.linkedin.com/company/daforte-real-estate/"><div className="social-icon"><FontAwesomeIcon icon={['fab', 'linkedin']} /></div></a>
                        <a href='https://wa.me/35679445566'><div className="social-icon"><FontAwesomeIcon icon={['fab', 'whatsapp']} /></div></a>
                    </div>
                </div>
            </div>
            <div className="horizontal-separator"></div>
            <div className="footer-bottom">
                <p>
                    Copyright <b>&copy;</b> Created by &ensp; <span id="myLogo">mFF.</span> &ensp; All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;