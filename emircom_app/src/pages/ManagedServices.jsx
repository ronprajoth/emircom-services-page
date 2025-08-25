import React from 'react';
import employeeImg from '../assets/five.jpg';

const ManagedServices = () => (
  <div className="page">
    <h2>Managed Services</h2>
    <p>
      Emircom's Managed Services division provides comprehensive, end-to-end IT and network management solutions that enable organizations to focus on their core business 
      while we handle the complexity of their technology infrastructure. Our managed services portfolio encompasses network management, cloud integration, 
      security operations, data analytics, and 24/7 technical support across the UAE and KSA.
    </p>
    <p>
      Our PowerManage suite of services includes PowerManage SD-WAN for intelligent network management, PowerDefend MXDR for advanced threat detection and response, 
      PowerConnect Networking for seamless connectivity solutions, and comprehensive outsourcing and staff augmentation services. We leverage our 40 years of expertise 
      to optimize resources, reduce operational complexity, and enable strategic growth for our clients.
    </p>
    <p>
      With our state-of-the-art Network Operations Center (NOC) and Security Operations Center (SOC), we provide proactive monitoring, incident response, 
      and continuous optimization of your IT environment. Our certified engineers and technicians ensure maximum uptime, enhanced security posture, 
      and improved performance while reducing total cost of ownership and minimizing business disruption.
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
        <p><strong>Name:</strong> Jasper Smile</p>
        <p><strong>Position:</strong> Managed Services Director</p>
        <p><strong>Phone:</strong> +971-50-1234567</p>
      </div>
    </div>
  </div>
);

export default ManagedServices;