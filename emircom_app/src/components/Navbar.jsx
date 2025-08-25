import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/Emircom-Logo.jpg';

const Navbar = () => (
  <nav className="navbar">
    <Link to="/" className="logo-link">
      <img src={logo} alt="Emircom Logo" className="logo-img" />
    </Link>
    <div className="nav-links">
      <Link to="/telecom">Telecom</Link>
      <Link to="/managed-services">Managed Services</Link>
      <Link to="/cybersecurity">Cybersecurity</Link>
      <Link to="/ai-data">AI & Data</Link>
      <Link to="/collaboration">Collaboration</Link>
      <Link to="/itam">ITAM</Link>
      <Link to="/oil-gas">Oil & Gas</Link>
      <Link to="/audio-visual">Audio Visual</Link>
    </div>
  </nav>
);

export default Navbar;
