import React from 'react';
import portfolioData from '../../data/portfolioData.json';

const WorkExperience = () => {
  const { workExperience } = portfolioData;

  return (
    <div style={{ 
      padding: '4rem 2rem',
      background: 'var(--bg-section-work)'
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
          Work Experience
        </h2>
        <p style={{ 
          fontSize: '1.1rem',
          color: 'var(--text-secondary)',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          fontFamily: 'var(--font-primary)'
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
                {job.position}
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
                {job.company}
              </h4>
              <p style={{ 
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                marginBottom: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                fontFamily: 'var(--font-primary)'
              }}>
                {job.duration} • {job.location}
              </p>
            </div>
            
            <div>
              <p style={{ 
                fontSize: '1rem',
                lineHeight: '1.6',
                color: 'var(--text-primary)',
                marginBottom: '1.5rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                fontFamily: 'var(--font-primary)'
              }}>
                {job.description}
              </p>
              
              {job.responsibilities && (
                <div style={{ marginBottom: '1.5rem' }}>
                  <h5 style={{ 
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: 'var(--text-accent)',
                    marginBottom: '1rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    fontFamily: 'var(--font-heading)'
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
                        color: 'var(--text-primary)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        fontFamily: 'var(--font-primary)'
                      }}>
                        <span style={{ 
                          color: 'var(--text-accent)',
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
                  color: 'var(--text-accent)',
                  marginBottom: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  fontFamily: 'var(--font-heading)'
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
                      background: 'var(--btn-primary)',
                      color: '#ffffff',
                      padding: '0.4rem 1rem',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      fontFamily: 'var(--font-primary)',
                      boxShadow: '0 4px 15px var(--shadow-primary)',
                      border: '2px solid var(--border-primary)',
                      transition: 'all 0.3s ease'
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