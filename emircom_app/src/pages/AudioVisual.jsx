import React from 'react';
import employeeImg from '../assets/eight.jpg';

const AudioVisual = () => (
  <div className="page">
    <h2>Audio Visual Solutions</h2>
    <p>
      Emircom provides cutting-edge audio-visual solutions for various industries,
      including corporate, education, and entertainment sectors.
    </p>
    <div className="contact-card">
      <img src={employeeImg} alt="Employee" />
      <div>
        <p><strong>Name:</strong> Jack</p>
        <p><strong>Position:</strong> Audio Visual Solutions Manager</p>
        <p><strong>Phone:</strong> +971-50-1234567</p>
      </div>
    </div>
  </div>
);

export default AudioVisual;