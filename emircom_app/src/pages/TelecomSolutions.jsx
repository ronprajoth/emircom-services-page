import React from 'react';
import employeeImg from '../assets/six.jpg';

const TelecomSolutions = () => (
  <div className="page">
    <h2>Telecom Solutions</h2>
    <p>
      Emircom offers telecom infrastructure and platform solutions for CSPs,
      including UCaaS, CPaaS, 5G functions, HLR & HSS, and more.
    </p>
    <div className="contact-card">
      <img src={employeeImg} alt="Employee" />
      <div>
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Position:</strong> Telecom Solutions Manager</p>
        <p><strong>Phone:</strong> +971-50-1234567</p>
      </div>
    </div>
  </div>
);

export default TelecomSolutions;