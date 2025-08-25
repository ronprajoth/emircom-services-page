import React from 'react';
import employeeImg from '../assets/seven.jpg';

const OilAndGas = () => (
  <div className="page">
    <h2>Oil and Gas</h2>
    <p>
      Emircom's Oil & Gas Business Unit is your trusted partner for turnkey telecom solutions, specializing in delivering comprehensive telecom and security solutions 
      tailored to the unique demands of the Oil & Gas, Petrochemical, Energy, Marine, and Mining sectors. With over 30 years of experience in providing customized 
      telecom systems purpose-built for these critical industries, we understand the complex challenges and stringent requirements of remote and hazardous environments.
    </p>
    <p>
      In the Oil and Gas industry, poor telecom networks can mean millions in lost revenue. With teams spread across isolated rigs and remote operations, 
      seamless communication is critical but hard to achieve. Our integrated networks combine the latest hardware, software, and infrastructure to design robust systems 
      that withstand tough conditions while prioritizing worker safety and operational efficiency in the most challenging environments.
    </p>
    <p>
      We provide customized telecom systems purpose-built for Oil & Gas, Petrochemical, Energy, Marine, and Mining sector companies' unique needs. Our solutions include 
      ruggedized communication equipment, satellite connectivity, SCADA systems integration, emergency response communications, and comprehensive security systems 
      that ensure reliable operations in the most remote and demanding locations while meeting industry-specific regulatory requirements and safety standards.
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
        <p><strong>Name:</strong> Mohammad Aboud</p>
        <p><strong>Position:</strong> Oil & Gas Solutions Manager</p>
        <p><strong>Phone:</strong> +971-50-1234567</p>
      </div>
    </div>
  </div>
);

export default OilAndGas; 