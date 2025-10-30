import React from 'react';
import portfolioData from '../../data/portfolioData.json';

const Skills = () => {
  const { skills } = portfolioData;

  return (
    <div style={{ 
      padding: '4rem 2rem',
      background: 'var(--bg-section-skills)'
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
          Skills
        </h2>
        <p style={{ 
          fontSize: '1.1rem',
          color: 'var(--text-secondary)',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          fontFamily: 'var(--font-primary)'
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
                background: 'var(--bg-card)',
                border: '2px solid var(--border-primary)',
                borderRadius: '15px',
                padding: '1.5rem',
                textAlign: 'center',
                backdropFilter: 'blur(10px)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                boxShadow: '0 8px 32px var(--shadow-card)'
              }}
            >
              <span style={{ 
                fontSize: '1.1rem',
                fontWeight: '600',
                color: 'var(--text-primary)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                fontFamily: 'var(--font-primary)'
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
