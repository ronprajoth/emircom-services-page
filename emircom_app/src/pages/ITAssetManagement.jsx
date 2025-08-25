import React from 'react';
import employeeImg from '../assets/four.jpg';

const ITAssetManagement = () => (
  <div className="page">
    <h2>IT Asset Management</h2>
    <p>
      Emircom's IT Asset Management (ITAM) solutions provide comprehensive, systematic, and versatile approaches to help organizations effectively manage their IT infrastructure, 
      ensuring seamless integration, enhanced risk management, and maximum return on investment. We enable organizations to oversee hardware and software assets 
      while simplifying complex IT environments through strategic asset lifecycle management.
    </p>
    <p>
      Our ITAM framework helps organizations optimize costs, maintain license compliance, streamline contract negotiations, and drive digital transformation initiatives. 
      We provide end-to-end asset management services including discovery and inventory, license management, procurement optimization, lifecycle planning, 
      and disposal strategies that align with your business objectives and regulatory requirements.
    </p>
    <p>
      We help you build a comprehensive and systematic framework to help organizations optimize costs, maintain license compliance, streamline contract negotiations 
      and drive digital transformation. Our ITAM solutions integrate seamlessly with existing IT infrastructure and provide real-time visibility into asset utilization, 
      helping you make informed decisions about technology investments and resource allocation while ensuring compliance with industry standards and best practices.
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
        <p><strong>Name:</strong> Rahul Rajesh</p>
        <p><strong>Position:</strong> IT Asset Management Specialist</p>
        <p><strong>Phone:</strong> +971-50-1234567</p>
      </div>
    </div>
  </div>
);

export default ITAssetManagement;