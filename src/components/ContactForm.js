import React, { useState, useEffect, useRef } from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faChevronDown, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './ContactForm.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        subject: 'Join Team',
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
                console.error('Failed to load Google Maps script. Check API key and permissions.');
            };

            window.initMap = initMap;
            document.head.appendChild(script);
        };

        const initMap = () => {
            const map = new window.google.maps.Map(mapRef.current, {
                center: { lat: 36.0358611, lng: 14.2429722}, // Coordinates for Malta
                zoom: 12,
            });

            const locations = [
                { position: { lat: 36.0358611, lng: 14.2429722 }, title: 'Gozo Office' },
            ];

            locations.forEach((location) => {
                const marker = new window.google.maps.Marker({
                    position: location.position,
                    map,
                    title: location.title,
                });

                const infoWindow = new window.google.maps.InfoWindow({
                    content: `<div><strong>${location.title}</strong><br>Coordinates: (${location.position.lat}, ${location.position.lng})</div>`,
                });

                marker.addListener('click', () => {
                    infoWindow.open(map, marker);
                });
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
                'service_3hya10f', // Replace with your EmailJS Service ID
                'template_qf7tzw6', // Replace with your EmailJS Template ID
                formRef.current,
                'qP8caj2X0zfDSPsh8' // Replace with your EmailJS User ID
            )
            .then(
                (result) => {
                    console.log('Email sent successfully:', result.text);
                    alert('Your message has been sent!');
                },
                (error) => {
                    console.error('Error sending email:', error.text);
                    alert('There was an error sending your message. Please try again later.');
                }
            );

        // Reset form fields
        setFormData({
            fullName: '',
            email: '',
            phone: '',
            subject: 'Join Team',
            message: '',
        });
    };

    return (
        <div className="contact-form-section" id="contact">
            <div className="contact-info-container">
                <h2 className="contact-form-title">Contact Us</h2>
                <div className="contact-details">
                    <div className="contact-item">
                        <div className="icon-container">
                            <FontAwesomeIcon icon={faWhatsapp} className="contact-icon" />
                        </div>
                        <div className="contact-info">
                            <h4>Malta</h4>
                            <p>+356 7944 5566</p>
                        </div>
                    </div>
                    <div className="contact-item">
                        <div className="icon-container">
                            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                        </div>
                        <div className="contact-info">
                            <h4>Email</h4>
                            <p className="ContactEmail">hello@daforte.com</p>
                        </div>
                    </div>
                    <div className="contact-item">
                        <div className="icon-container">
                            <FontAwesomeIcon icon={faWhatsapp} className="contact-icon" />
                        </div>
                        <div className="contact-info">
                            <h4>Gozo</h4>
                            <p>+356 7955 4811</p>
                        </div>
                    </div>
                </div>
                <div className="google-locations">
                    <h3>Gozo Location</h3>
                    <div id="map" className="map-container" ref={mapRef}></div>
                </div>
            </div>
            <div className="contact-form-container">
                <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group input-with-icon">
                        <label htmlFor="fullName">Full Name:</label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                        />
                        <FontAwesomeIcon icon={faUser} className="input-icon" />
                    </div>
                    <div className="form-group input-with-icon">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                    </div>
                    <div className="form-group input-with-icon">
                        <label htmlFor="phone">Phone:</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            pattern="\d{8}" // Regex to allow exactly 8 digits
                            title="Phone number must be exactly 8 digits"
                            required
                        />
                        <FontAwesomeIcon icon={faPhone} className="input-icon" />
                    </div>
                    <div className="form-group input-with-icon">
                        <label htmlFor="subject">Subject:</label>
                        <select
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        >
                            <option value="Join Team">Join Our Team</option>
                            <option value="List Property">List Your Property</option>
                        </select>
                        <FontAwesomeIcon icon={faChevronDown} className="select-icon" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="submit-button">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
