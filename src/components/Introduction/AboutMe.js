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
      background: 'var(--bg-card)',
      borderRadius: '15px',
      boxShadow: '0 8px 32px var(--shadow-card)',
      border: '2px solid var(--border-primary)',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      transition: 'all 0.3s ease'
    }}>
      <h2 style={{
        fontFamily: 'var(--font-heading)',
        fontSize: '3rem',
        fontWeight: '700',
        color: 'var(--text-accent)',
        marginBottom: '1rem',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        textShadow: '0 2px 4px var(--shadow-primary)'
      }}>
        About Me
      </h2>
      <p style={{
        fontSize: '1.4rem',
        lineHeight: '1.7',
        color: 'var(--text-primary)',
        marginBottom: '1.5rem',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        fontFamily: 'var(--font-primary)',
        textAlign: 'left'
      }}>
        {personalInfo.description}
      </p>
    </div>
  );
};

export default AboutMe;
