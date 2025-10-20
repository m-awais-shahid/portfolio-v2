import React from 'react';
import portfolioData from '../../data/portfolioData.json';

const WorkExperience = () => {
  const { workExperience } = portfolioData;

  return (
    <div style={{ 
      padding: '4rem 2rem',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
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
          Work Experience
        </h2>
        <p style={{ 
          fontSize: '1.1rem',
          color: 'rgba(255, 255, 255, 0.8)',
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}>
          My journey through the digital realm
        </p>
      </div>

      <div style={{ 
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        {workExperience.map((job, index) => (
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
                {job.position}
              </h3>
              <h4 style={{ 
                fontSize: '1.2rem',
                fontWeight: '600',
                color: '#FFFFFF',
                marginBottom: '0.3rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}>
                {job.company}
              </h4>
              <p style={{ 
                fontSize: '1rem',
                color: 'rgba(255, 255, 255, 0.7)',
                marginBottom: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                {job.duration} • {job.location}
              </p>
            </div>
            
            <div>
              <p style={{ 
                fontSize: '1rem',
                lineHeight: '1.6',
                color: '#FFFFFF',
                marginBottom: '1.5rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                {job.description}
              </p>
              
              {job.responsibilities && (
                <div style={{ marginBottom: '1.5rem' }}>
                  <h5 style={{ 
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: '#FFD700',
                    marginBottom: '1rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em'
                  }}>
                    Key Responsibilities:
                  </h5>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {job.responsibilities.map((responsibility, idx) => (
                      <li key={idx} style={{ 
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.5rem',
                        marginBottom: '0.5rem',
                        color: '#FFFFFF',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}>
                        <span style={{ 
                          color: '#FFD700',
                          marginTop: '0.2rem'
                        }}>•</span>
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div>
                <h5 style={{ 
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: '#FFD700',
                  marginBottom: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em'
                }}>
                  Technologies Used:
                </h5>
                <div style={{ 
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem'
                }}>
                  {job.technologies.map((tech, idx) => (
                    <span key={idx} style={{ 
                      background: '#FFD700',
                      color: '#000000',
                      padding: '0.3rem 0.8rem',
                      borderRadius: '15px',
                      fontSize: '0.9rem',
                      fontWeight: '500',
                      textTransform: 'uppercase',
                      letterSpacing: '0.03em'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;