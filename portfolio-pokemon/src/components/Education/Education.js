import React from 'react';
import portfolioData from '../../data/portfolioData.json';

const Education = () => {
  const { education } = portfolioData;

  return (
    <div style={{ 
      padding: '4rem 2rem',
      background: 'linear-gradient(135deg, #2C3E50 0%, #34495E 100%)'
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
          Education
        </h2>
        <p style={{ 
          fontSize: '1.1rem',
          color: 'rgba(255, 255, 255, 0.8)',
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
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
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '10px',
              padding: '2rem',
              marginBottom: '2rem'
            }}
          >
            <div style={{ marginBottom: '1rem' }}>
              <h3 style={{ 
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#FFD700',
                marginBottom: '0.5rem',
                textTransform: 'uppercase',
                letterSpacing: '0.12em'
              }}>
                {edu.degree}
              </h3>
              <h4 style={{ 
                fontSize: '1.2rem',
                fontWeight: '600',
                color: '#FFFFFF',
                marginBottom: '0.3rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}>
                {edu.institution}
              </h4>
              <p style={{ 
                fontSize: '1rem',
                color: 'rgba(255, 255, 255, 0.7)',
                marginBottom: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                {edu.duration} • {edu.location}
              </p>
              {edu.gpa && (
                <p style={{ 
                  fontSize: '1rem',
                  color: '#FFD700',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  GPA: {edu.gpa}
                </p>
              )}
            </div>
            
            <div>
              <p style={{ 
                fontSize: '1rem',
                lineHeight: '1.6',
                color: '#FFFFFF',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
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
