import React, { useState, useEffect, useRef } from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './ContactForm.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const formRef = useRef(null);
    const mapRef = useRef(null);

    useEffect(() => {
        const loadGoogleMaps = () => {
            if (document.getElementById('google-maps-script')) return;

            const script = document.createElement('script');
            script.id = 'google-maps-script';
            script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCucFRn_HJzaHYRSUHuQ3m8nTfjwDIYLng&callback=initMap`;
            script.async = true;
            script.defer = true;

            script.onerror = () => {
                console.error('Failed to load Google Maps script.');
            };

            window.initMap = initMap;
            document.head.appendChild(script);
        };

        const initMap = () => {
            const map = new window.google.maps.Map(mapRef.current, {
                center: { lat: 36.0358611, lng: 14.2429722 },
                zoom: 13,
            });
        
            // Add a marker to the map
            const marker = new window.google.maps.Marker({
                position: { lat: 36.0358611, lng: 14.2429722 }, // Same as the map center
                map: map,
                title: "Gozo, Malta", // Tooltip text when hovering over the marker
            });
        };

        loadGoogleMaps();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                'service_3hya10f',
                'template_qf7tzw6',
                formRef.current,
                'qP8caj2X0zfDSPsh8'
            )
            .then(() => {
                alert('Your message has been sent!');
                setFormData({
                    fullName: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: '',
                });
            })
            .catch(() => alert('There was an error sending your message.'));
    };

    return (
        <div className="contact-section" id="contact-section">
            <div className="contact-container">
                {/* Left Section: Contact Cards */}
                <div className="contact-details">
                    <div className="contact-card">
                        <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                        <div>
                            <h4>Phone Number</h4>
                            <p>+356 7944 5566</p>
                        </div>
                    </div>
                    <div className="contact-card">
                        <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                        <div>
                            <h4>Email Address</h4>
                            <p>hello@daforte.com</p>
                        </div>
                    </div>
                    <div className="contact-card">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
                        <div>
                            <h4>Location</h4>
                            <p>Gozo, Malta</p>
                        </div>
                    </div>
                </div>
    
                {/* Right Section: Contact Form */}
                <div className="form-section">
                    <h2>Send Us A Message</h2>
                    <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group input-with-icon">
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Your Name"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                            />
                            <FontAwesomeIcon icon={faUser} className="input-icon" />
                        </div>
                        <div className="form-group input-with-icon">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group input-with-icon">
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                            <FontAwesomeIcon icon={faPhone} className="input-icon" />
                        </div>
                        <div className="form-group input-with-icon">
                            <select
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled>
                                    Select Subject
                                </option>
                                <option value="Join Our Team">Join Our Team</option>
                                <option value="List A Property">List A Property</option>
                            </select>
                            <FontAwesomeIcon icon="fa-solid fa-chevron-down" className="input-icon"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <textarea
                            name="message"
                            placeholder="Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                        <button type="submit" className="submit-button">Send Message</button>
                    </form>
                </div>
            </div>
    
            {/* Map Section */}
            <div className="map-section">
                <h3>Find Us on Google Maps</h3>
                <p>Our location and details are shown below.</p>
                <div className="map-container" ref={mapRef}></div>
            </div>
        </div>
    );    
};    

export default ContactForm;
