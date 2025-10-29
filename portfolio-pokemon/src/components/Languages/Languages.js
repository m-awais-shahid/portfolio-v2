import React from 'react';
import portfolioData from '../../data/portfolioData.json';

const Languages = () => {
  const { languages } = portfolioData;

  return (
    <div style={{ 
      padding: '4rem 2rem',
      background: 'var(--bg-section-languages)'
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
          Languages
        </h2>
        <p style={{ 
          fontSize: '1.1rem',
          color: 'var(--text-secondary)',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          fontFamily: 'var(--font-primary)'
        }}>
          Communication skills across different languages
        </p>
      </div>

      <div style={{ 
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {languages.map((language, index) => (
            <div
              key={index}
              style={{ 
                background: 'var(--bg-card)',
                border: '2px solid var(--border-primary)',
                borderRadius: '15px',
                padding: '2rem',
                backdropFilter: 'blur(10px)',
                textAlign: 'center',
                boxShadow: '0 8px 32px var(--shadow-card)',
                transition: 'all 0.3s ease'
              }}
            >
              <div>
                <h3 style={{ 
                  fontSize: '2rem',
                  fontWeight: '700',
                  color: 'var(--text-accent)',
                  marginBottom: '0.5rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontFamily: 'var(--font-heading)'
                }}>
                  {language.name}
                </h3>
                <p style={{ 
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  fontFamily: 'var(--font-primary)'
                }}>
                  {language.level}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Languages;
