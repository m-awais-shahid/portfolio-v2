import React from 'react';
import portfolioData from '../../data/portfolioData.json';

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <div style={{ 
      padding: '4rem 2rem',
      background: 'var(--bg-section-projects)'
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
          Projects
        </h2>
        <p style={{ 
          fontSize: '1.1rem',
          color: 'var(--text-secondary)',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          fontFamily: 'var(--font-primary)'
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
              background: 'var(--bg-card)',
              border: '2px solid var(--border-primary)',
              borderRadius: '15px',
              padding: '2rem',
              backdropFilter: 'blur(10px)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              boxShadow: '0 8px 32px var(--shadow-card)'
            }}
          >
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ 
                fontSize: '1.5rem',
                fontWeight: '700',
                color: 'var(--text-accent)',
                marginBottom: '0.5rem',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                fontFamily: 'var(--font-heading)'
              }}>
                {project.name}
              </h3>
            </div>
            
            <div>
              <p style={{ 
                fontSize: '1rem',
                lineHeight: '1.6',
                color: 'var(--text-primary)',
                marginBottom: '1.5rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                textAlign: 'center',
                fontFamily: 'var(--font-primary)'
              }}>
                {project.description}
              </p>
              
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
                  Technologies Used:
                </h5>
                <div style={{ 
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} style={{ 
                      background: 'var(--btn-primary)',
                      color: '#ffffff',
                      padding: '0.4rem 1rem',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      border: '2px solid var(--border-primary)',
                      fontFamily: 'var(--font-primary)',
                      boxShadow: '0 4px 15px var(--shadow-primary)',
                      transition: 'all 0.3s ease'
                    }}>
                      {tech}
                    </span>
                  ))}
                  <a 
                    href={project.id === 3 ? project.githubLink : (project.liveLink || project.githubLink)}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ 
                      background: 'var(--btn-link)',
                      color: '#FFFFFF',
                      padding: '0.75rem 1.5rem',
                      borderRadius: '12px',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      transition: 'all 0.3s ease',
                      fontFamily: 'var(--font-primary)',
                      boxShadow: '0 4px 15px var(--btn-link-shadow)',
                      border: '2px solid var(--btn-link-border)',
                      display: 'inline-block',
                      minWidth: '140px',
                      textAlign: 'center',
                      marginLeft: 'auto'
                    }}
                  >
                    Go to Link
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
