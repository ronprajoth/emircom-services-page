import React from 'react';
import employeeImg from '../assets/one.jpg';

const CyberSecurity = () => (
  <div className="page">
    <h2>Cybersecurity</h2>
    <p>
      Emircom's cybersecurity practice is built on the principle of vendor and technology neutrality, ensuring we provide unbiased, objective security solutions 
      that truly safeguard your data, intellectual property, and brand reputation. Our comprehensive security portfolio includes endpoint and data center security, 
      Secure Access Service Edge (SASE), Identity and Privilege Access Management (IAM/PAM), and network infrastructure security.
    </p>
    <p>
      We conduct thorough market research to stay ahead of emerging cyber threats and security developments, enabling us to provide high-level security reviews 
      that help organizations understand their security posture and implement effective risk mitigation strategies. Our team of certified security professionals 
      works closely with leading vendors and applications to deliver cutting-edge solutions tailored to your unique security requirements.
    </p>
    <p>
      Our cybersecurity approach emphasizes impartiality and comprehensive protection across physical and digital environments. We provide access to industry-leading 
      security technologies and applications, ensuring your organization benefits from the most advanced threat detection, prevention, and response capabilities 
      available in the dynamic cybersecurity landscape.
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
        <p><strong>Name:</strong> Reshma Sara</p>
        <p><strong>Position:</strong> Cybersecurity Solutions Manager</p>
        <p><strong>Phone:</strong> +971-50-1234567</p>
      </div>
    </div>
  </div>
);

export default CyberSecurity;

   