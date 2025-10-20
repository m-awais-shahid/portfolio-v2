import React from 'react';
import portfolioData from '../../data/portfolioData.json';

const AboutMe = () => {
  const { personalInfo } = portfolioData;

  return (
    <div style={{ 
      flex: 1,
      maxWidth: '600px',
      height: '520px',
      padding: '2rem',
      background: 'var(--bg-card, rgba(255, 255, 255, 0.9))',
      borderRadius: '15px',
      boxShadow: '0 8px 32px var(--shadow-light, rgba(0, 0, 0, 0.1))',
      border: '2px solid var(--border-primary, #D4C4B0)',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      <h2 style={{
        fontFamily: 'var(--font-heading)',
        fontSize: '2rem',
        fontWeight: '700',
        color: 'var(--text-secondary, #8B4513)',
        marginBottom: '1.5rem',
        textTransform: 'uppercase',
        letterSpacing: '1px'
      }}>
        About Me
      </h2>
      <p style={{
        fontFamily: 'var(--font-primary)',
        fontSize: '1.1rem',
        lineHeight: '1.7',
        color: 'var(--text-primary, #5D4E37)',
        fontWeight: '400',
        textAlign: 'justify'
      }}>
        {personalInfo.description}
      </p>
    </div>
  );
};

export default AboutMe;
