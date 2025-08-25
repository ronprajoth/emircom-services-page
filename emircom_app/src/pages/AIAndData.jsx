import React from 'react';
import employeeImg from '../assets/three.jpg';

const AIAndData = () => (
  <div className="page">
    <h2>AI & Data Analytics</h2>
    <p>
      Emircom's AI & Data Analytics division specializes in transforming raw data into actionable intelligence that drives informed decision-making and business growth. 
      Our comprehensive suite of services includes advanced analytics, machine learning solutions, predictive modeling, business intelligence platforms, 
      and AI-powered automation tools designed to unlock the full potential of your data assets.
    </p>
    <p>
      We help organizations build robust data infrastructure and implement scalable analytics solutions that enable real-time insights, pattern recognition, 
      and predictive capabilities. Our expertise spans across data engineering, data science, and AI model development, ensuring you can harness the power 
      of artificial intelligence to optimize operations, enhance customer experiences, and identify new business opportunities.
    </p>
    <p>
      Our solutions are designed to bridge the gap between on-premises infrastructure and cloud adoption, creating seamless data workflows and analytics pipelines. 
      We provide end-to-end support from data strategy and governance to implementation and ongoing optimization, helping you establish a data-driven culture 
      that supports sustainable digital transformation and competitive advantage in today's rapidly evolving business landscape.
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
        <p><strong>Name:</strong> Aditya Menon</p>
        <p><strong>Position:</strong> AI & Data Analytics Manager</p>
        <p><strong>Phone:</strong> +971-50-1234567</p>
      </div>
    </div>
  </div>
);

export default AIAndData;