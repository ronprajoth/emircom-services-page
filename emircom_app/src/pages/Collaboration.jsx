import React from 'react';
import employeeImg from '../assets/two.jpg';

const Collaboration = () => (
  <div className="page">
    <h2>Collaboration</h2>
    <p>
      Emircom's Collaboration solutions are designed to enhance team productivity and empower distributed workforces through advanced communication technologies, 
      collaboration tools, and video communication systems that work seamlessly across geographies and devices. In today's global business environment, 
      we help organizations build collaborative and productive teams through technology that enhances efficiency and pursuit of shared goals.
    </p>
    <p>
      Our comprehensive collaboration portfolio includes unified communications platforms, video conferencing solutions, contact center technologies, 
      and enterprise social collaboration tools. We enable remote collaboration across devices through integrated platforms that foster seamless experiences 
      for enhanced productivity, improved customer relationships, and sustainable business growth in the digital age.
    </p>
    <p>
      We help you build robust IT infrastructure and scalable networks that accelerate innovation, reduce cost and complexity, and enhance security. 
      Partnering with leading global vendors, we deliver a wide range of collaboration solutions for your business, from the data center through to the mobile worker. 
      We support your technology adoption and digital transformation journey with seamless deployment of connected services, enhancing productivity, 
      enabling efficiency and delivering a differentiated experience to your end users, in tune with your customer goals.
    </p>
    
    <h3 style={{ 
      color: '#2c3e50', 
      marginTop: '2rem', 
      marginBottom: '1rem',
      fontSize: '1.4rem',
      fontWeight: '600',
      borderBottom: '2px solid #667eea',
      paddingBottom: '0.5rem',
      display: 'inline-block'
    }}>
      Contact:
    </h3>
    
    <div className="contact-card">
      <img src={employeeImg} alt="Employee" />
      <div>
        <p><strong>Name:</strong> Sajal Chandra</p>
        <p><strong>Position:</strong> Collaboration Solutions Manager</p>
        <p><strong>Phone:</strong> +971-50-1234567</p>
      </div>
    </div>
  </div>
);

export default Collaboration;