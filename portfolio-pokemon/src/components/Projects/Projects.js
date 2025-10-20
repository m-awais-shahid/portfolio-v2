import React from 'react';
import portfolioData from '../../data/portfolioData.json';

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <div style={{ 
      padding: '4rem 2rem',
      background: 'linear-gradient(135deg, #8E44AD 0%, #9B59B6 100%)'
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
          Projects
        </h2>
        <p style={{ 
          fontSize: '1.1rem',
          color: 'rgba(255, 255, 255, 0.8)',
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}>
          Showcase of my development work
        </p>
      </div>

      <div style={{ 
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '2rem'
      }}>
        {projects.map((project, index) => (
          <div
            key={index}
            style={{ 
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '15px',
              padding: '2rem',
              backdropFilter: 'blur(10px)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
          >
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ 
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#FFD700',
                marginBottom: '0.5rem',
                textTransform: 'uppercase',
                letterSpacing: '0.12em'
              }}>
                {project.name}
              </h3>
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
                {project.description}
              </p>
              
              <div style={{ marginBottom: '1.5rem' }}>
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
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} style={{ 
                      background: 'rgba(255, 215, 0, 0.2)',
                      color: '#FFD700',
                      padding: '0.3rem 0.8rem',
                      borderRadius: '15px',
                      fontSize: '0.9rem',
                      fontWeight: '500',
                      textTransform: 'uppercase',
                      letterSpacing: '0.03em',
                      border: '1px solid rgba(255, 215, 0, 0.3)'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div style={{ 
                display: 'flex',
                justifyContent: 'center'
              }}>
                <a 
                  href={project.liveLink || project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ 
                    background: '#FFD700',
                    color: '#000000',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Go to Link
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
