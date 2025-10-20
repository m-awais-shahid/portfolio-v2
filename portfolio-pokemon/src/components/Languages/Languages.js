import React from 'react';
import portfolioData from '../../data/portfolioData.json';

const Languages = () => {
  const { languages } = portfolioData;

  return (
    <div style={{ 
      padding: '4rem 2rem',
      background: 'linear-gradient(135deg, #16A085 0%, #27AE60 100%)'
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
          Languages
        </h2>
        <p style={{ 
          fontSize: '1.1rem',
          color: 'rgba(255, 255, 255, 0.8)',
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
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
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '15px',
                padding: '2rem',
                backdropFilter: 'blur(10px)',
                textAlign: 'center'
              }}
            >
              <div>
                <h3 style={{ 
                  fontSize: '2rem',
                  fontWeight: '700',
                  color: '#FFD700',
                  marginBottom: '0.5rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>
                  {language.name}
                </h3>
                <p style={{ 
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  color: '#FFFFFF',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
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
