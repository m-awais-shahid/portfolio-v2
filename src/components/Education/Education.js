import React from 'react';
import portfolioData from '../../data/portfolioData.json';

const Education = () => {
  const { education } = portfolioData;

  return (
    <div style={{ 
      padding: '4rem 2rem',
      background: 'var(--bg-section-education)'
    }}>
      <div style={{ 
        textAlign: 'center',
        marginBottom: '3rem'
      }}>
        <h2 style={{ 
          fontSize: '2.5rem',
          fontWeight: '700',
          color: 'var(--text-accent)',
          marginBottom: '1rem',
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
          textShadow: '0 2px 4px var(--shadow-primary)',
          fontFamily: 'var(--font-heading)'
        }}>
          Education
        </h2>
        <p style={{ 
          fontSize: '1.1rem',
          color: 'var(--text-secondary)',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          fontFamily: 'var(--font-primary)'
        }}>
          My academic journey and certifications
        </p>
      </div>

      <div style={{ 
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        {education.map((edu, index) => (
          <div
            key={index}
            style={{ 
              background: 'var(--bg-card)',
              border: '2px solid var(--border-primary)',
              borderRadius: '15px',
              padding: '2rem',
              marginBottom: '2rem',
              boxShadow: '0 8px 32px var(--shadow-card)',
              transition: 'all 0.3s ease'
            }}
          >
            <div style={{ marginBottom: '1rem' }}>
              <h3 style={{ 
                fontSize: '1.5rem',
                fontWeight: '700',
                color: 'var(--text-accent)',
                marginBottom: '0.5rem',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                fontFamily: 'var(--font-heading)'
              }}>
                {edu.degree}
              </h3>
              <h4 style={{ 
                fontSize: '1.2rem',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '0.3rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                fontFamily: 'var(--font-primary)'
              }}>
                {edu.institution}
              </h4>
              <p style={{ 
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                marginBottom: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                fontFamily: 'var(--font-primary)'
              }}>
                {edu.duration} • {edu.location}
              </p>
            </div>
            
            <div>
              <p style={{ 
                fontSize: '1rem',
                lineHeight: '1.6',
                color: 'var(--text-primary)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                fontFamily: 'var(--font-primary)'
              }}>
                {edu.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
