import React from 'react';
import portfolioData from '../../data/portfolioData.json';

const Skills = () => {
  const { skills } = portfolioData;

  return (
    <div style={{ 
      padding: '4rem 2rem',
      background: 'linear-gradient(135deg, #E74C3C 0%, #C0392B 100%)'
    }}>
      <div style={{ 
        textAlign: 'center',
        marginBottom: '3rem'
      }}>
        <h2 style={{ 
          fontSize: '2.5rem',
          fontWeight: '700',
          color: '#FFD700',
          marginBottom: '1rem',
          textTransform: 'uppercase',
          letterSpacing: '0.15em'
        }}>
          Skills
        </h2>
        <p style={{ 
          fontSize: '1.1rem',
          color: 'rgba(255, 255, 255, 0.8)',
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}>
          Technologies and tools I work with
        </p>
      </div>

      <div style={{ 
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          {skills.map((skill, index) => (
            <div
              key={index}
              style={{ 
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '10px',
                padding: '1.5rem',
                textAlign: 'center',
                backdropFilter: 'blur(10px)',
                transition: 'transform 0.3s ease'
              }}
            >
              <span style={{ 
                fontSize: '1.1rem',
                fontWeight: '600',
                color: '#FFFFFF',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                {skill}
              </span>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default Skills;
