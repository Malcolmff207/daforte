import React from 'react';
import './HomeSection.css'; // Include your CSS styling
import Logo from '../images/DaforteLogoText.svg'; 
const HomeSection = () => {
    return (
        <section className="home-section">
            <div className="overlay">
                <h1 className="title">Welcome to the new</h1>
                <img className='logo' src={Logo} alt="DaForte Logo" />
                <p className="subtitle">Our website is currently <b className="highlight">under development</b></p>
            </div>
        </section>
    );
};

export default HomeSection;
