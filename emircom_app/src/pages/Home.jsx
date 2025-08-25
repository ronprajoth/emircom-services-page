import React from 'react';
import telecom from '../assets/telecom.jpg';
import managed from '../assets/managed.jpg';
import cybersecurity from '../assets/cybersecurity.jpg';
import AI from '../assets/AI.jpg';
import collaboration from '../assets/collaboration.jpg';
import IT from '../assets/IT.jpg';
import oil from '../assets/oil.jpg';
import audio from '../assets/audio.jpg';
import dubai from '../assets/dubai.jpg';

const services = [
  {
    title: 'Telecom Solutions',
    img: telecom,
    link: '/telecom',
    desc: 'Cutting-edge telecom infrastructure and platforms for CSPs.'
  },
  {
    title: 'Managed Services',
    img: managed,
    link: '/managed-services',
    desc: 'Comprehensive managed IT and network services.'
  },
  {
    title: 'Cybersecurity',
    img: cybersecurity,
    link: '/cybersecurity',
    desc: 'Robust cybersecurity solutions for enterprises.'
  },
  {
    title: 'AI & Data Analytics',
    img: AI,
    link: '/ai-data',
    desc: 'AI-driven insights and analytics for smarter decisions.'
  },
  {
    title: 'Collaboration',
    img: collaboration,
    link: '/collaboration',
    desc: 'Unified communications and collaboration tools.'
  },
  {
    title: 'IT Asset Management',
    img: IT,
    link: '/itam',
    desc: 'Efficient management of IT assets and resources.'
  },
  {
    title: 'Oil and Gas',
    img: oil,
    link: '/oil-gas',
    desc: 'Turnkey telecom solutions for Oil & Gas, Petrochemical, Energy, Marine, and Mining sectors.'
  },
  {
    title: 'Audio Visual',
    img: audio,
    link: '/audio-visual',
    desc: 'Cutting-edge audio-visual solutions for seamless communication and collaboration.'
  },
];

const Home = () => (
  <div>
    {/* Hero Section */}
    <div
      style={{
        position: 'relative',
        height: '400px',
        backgroundImage: `url(${dubai})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '0px',
        overflow: 'hidden',
        marginBottom: '2rem',
        boxShadow: '0 6px 24px rgba(102, 126, 234, 0.2)'
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.8), rgba(118, 75, 162, 0.8))',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#ffffff',
        }}
      >
        <h1 style={{ fontSize: '2.8rem', marginBottom: '1rem', letterSpacing: 1, color: '#ffffff', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>Welcome to Emircom</h1>
        <div style={{ maxWidth: 800, textAlign: 'center', padding: '0 2rem' }}>
          <p style={{ fontSize: '1.3rem', marginBottom: '1rem', opacity: 0.95, lineHeight: 1.6, color: '#f8f9fa' }}>
            Emircom is a leading Information and Communications Technology (ICT) and digital transformation enabler based in the UAE. 
            Established in 1984 in Abu Dhabi, we have built a reputation for delivering innovative, reliable, and cutting-edge technology solutions 
            across the UAE, Saudi Arabia, and Egypt.
          </p>
          <p style={{ fontSize: '1.1rem', opacity: 0.9, lineHeight: 1.5, color: '#e8eaf6' }}>
            Over four decades, we have grown into a trusted partner for enterprises and government entities, offering comprehensive services 
            in Telecom Infrastructure, Managed Services, Cybersecurity, AI & Data Analytics, Unified Communications, and IT Asset Management. 
            Through strong partnerships with global technology leaders such as Cisco, Dell, Fortinet, Microsoft, SAS, and others, 
            we are uniquely positioned to deliver robust solutions tailored to your specific needs.
          </p>
        </div>
      </div>
    </div>

    {/* Softer, Blended Mission Section */}
    <div 
      style={{ 
        textAlign: 'center', 
        fontSize: '1.15rem',
        background: 'rgba(245, 247, 250, 0.85)',
        color: '#4b4b6b',
        padding: '1.5rem 2rem',
        borderRadius: '14px',
        margin: '0 auto 2.5rem auto',
        maxWidth: 900,
        boxShadow: '0 2px 12px rgba(102, 126, 234, 0.07)',
        border: '1px solid #e3e6f0',
        position: 'relative',
        zIndex: 2
      }}
    >
      <strong style={{ fontSize: '1.25rem', color: '#764ba2' }}>Our Mission:</strong>
      <p style={{ margin: '1rem 0 0 0', lineHeight: 1.6, color: '#4b4b6b', fontWeight: 500 }}>
        To deliver robust, reliable, and innovative technology solutions, driving sustainable digital transformation 
        aligned with UAE AI Strategy 2031 and Saudi Vision 2030. We are committed to empowering organizations 
        with cutting-edge technology that enables growth, efficiency, and competitive advantage in the digital age.
      </p>
    </div>

    {/* Dashboard Service Grid */}
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem',
        marginBottom: '2.5rem',
      }}
    >
      {services.map((service, index) => (
        <a
          key={service.title}
          href={service.link}
          style={{
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          <div
            style={{
              background: '#ffffff',
              borderRadius: '16px',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              cursor: 'pointer',
              border: '1px solid #e9ecef',
              padding: '2.2rem 1.7rem 2.2rem 1.7rem',
              minHeight: 380
            }}
            className="dashboard-card"
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.1)';
            }}
          >
            <div
              style={{
                width: '100%',
                height: '160px',
                background: '#f5f7fa',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '12px'
              }}
            >
              <img
                src={service.img}
                alt={service.title}
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  borderRadius: '12px'
                }}
              />
            </div>
            <div style={{ padding: '1.5rem 0 0 0', width: '100%', background: '#ffffff' }}>
              <h3 style={{ margin: '0 0 0.8rem 0', color: '#2c3e50', fontSize: '1.3rem' }}>{service.title}</h3>
              <p style={{ margin: 0, color: '#5a6c7d', fontSize: '1rem', lineHeight: 1.5 }}>{service.desc}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  </div>
);

export default Home;

