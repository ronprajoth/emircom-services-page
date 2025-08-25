import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../assets/Emircom-Logo.jpg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Main Footer Sections */}
        <div className="footer-sections">
          {/* Our Solutions */}
          <div className="footer-section">
            <h3>Our Solutions</h3>
            <ul>
              <li><Link to="/telecom">Telecom</Link></li>
              <li><Link to="/managed-services">Managed Services</Link></li>
              <li><Link to="/cybersecurity">Security</Link></li>
              <li><Link to="/ai-data">AI & Data Analytics</Link></li>
              <li><Link to="/collaboration">Collaboration</Link></li>
              <li><Link to="/itam">Asset Management</Link></li>
              <li><Link to="/oil-gas">Oil and Gas</Link></li>
              <li><Link to="/audio-visual">Audio Visual</Link></li>
            </ul>
          </div>

          {/* Our Offices */}
          <div className="footer-section">
            <h3>Our Offices</h3>
            <p className="office-intro">We have 6 offices in 4 countries.</p>
            
            <div className="office-location">
              <h4>Abu Dhabi - UAE</h4>
              <p>P.O.Box: 34895, Zayed the 1st street, Al Zahiya, Abu Dhabi</p>
              <p>Tel: +971 2 6934300</p>
              <p>Fax: +971 2 6455288</p>
              <p>Email: enquiry@emircom.com</p>
            </div>

            <div className="office-location">
              <h4>Dubai - UAE</h4>
              <p>P.O.Box: 34895, Bay Square B2-201, Business Bay, Dubai</p>
              <p>Tel: +971 4 5094400</p>
              <p>Fax: +971 4 5094433</p>
              <p>Email: enquiry@emircom.com</p>
            </div>

            <div className="office-location">
              <h4>Riyadh - KSA</h4>
              <p>P.O.Box: 34895, Al Olaya, 2253 Al Urubah Rd, Riyadh</p>
              <p>Tel: +966 11 2655300</p>
              <p>Email: enquiry@emircom.com</p>
            </div>
          </div>

          {/* Contact & Logo */}
          <div className="footer-section contact-section">
            <div className="footer-logo">
              <img src={logo} alt="Emircom Logo" />
            </div>
            <div className="contact-info">
              <h3>How Can We Help You</h3>
              <p>Thank you for your interest in Emircom. Please use this form to contact us. We will get back to you as soon as we can.</p>
              <div className="contact-form">
                <select className="contact-select">
                  <option>Networking</option>
                  <option>Data Center</option>
                  <option>Security</option>
                  <option>Business Applications</option>
                  <option>Oil & Gas</option>
                  <option>Business Transformation</option>
                  <option>Asset Management</option>
                  <option>Telecom</option>
                  <option>Other</option>
                </select>
                <button className="contact-button">Submit</button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="footer-links">
              <a href="#">Privacy Policy</a>
              <span className="separator">|</span>
              <a href="#">Terms and Conditions</a>
            </div>
            <div className="copyright">
              Copyright © 2025 Emircom. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 