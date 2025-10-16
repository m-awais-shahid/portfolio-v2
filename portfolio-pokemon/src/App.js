import React from 'react';
import PokemonCard from './components/PokemonCard';
import ThemeToggle from './components/ThemeToggle';
import portfolioData from './data/portfolioData.json';
import './App.css';
import './styles/themes.css';

function App() {
  const { personalInfo } = portfolioData;

  return (
    <div className="App" style={{ 
      background: 'var(--gradient-primary, linear-gradient(135deg, #F7F3F0 0%, #E8DDD4 100%))',
      minHeight: '100vh',
      width: '100vw',
      position: 'relative'
    }}>
      <ThemeToggle />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container" style={{ 
          display: 'flex', 
          justifyContent: 'flex-start', 
          alignItems: 'flex-start', 
          minHeight: '100vh',
          width: '100%',
          padding: '2rem',
          gap: '3rem'
        }}>
          {/* Pokemon Card on the left */}
          <div style={{ flexShrink: 0 }}>
            <PokemonCard />
          </div>
          
          {/* Description section on the right */}
          <div style={{ 
            flex: 1,
            maxWidth: '600px',
            padding: '2rem',
            background: 'var(--bg-card, rgba(255, 255, 255, 0.9))',
            borderRadius: '15px',
            boxShadow: '0 8px 32px var(--shadow-light, rgba(0, 0, 0, 0.1))',
            border: '2px solid var(--border-primary, #D4C4B0)',
            backdropFilter: 'blur(10px)'
          }}>
            <h2 style={{
              fontFamily: "'Space Grotesk', 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif",
              fontSize: '2rem',
              fontWeight: '700',
              color: 'var(--text-secondary, #8B4513)',
              marginBottom: '1.5rem',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              About Me
            </h2>
            <p style={{
              fontFamily: "'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif",
              fontSize: '1.1rem',
              lineHeight: '1.7',
              color: 'var(--text-primary, #5D4E37)',
              fontWeight: '400',
              textAlign: 'justify'
            }}>
              {personalInfo.description}
            </p>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section style={{
        padding: '4rem 2rem',
        background: 'var(--gradient-work, linear-gradient(135deg, #8B4513 0%, #D2691E 50%, #CD853F 100%))',
        minHeight: '100vh'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{
            fontFamily: "'Space Grotesk', 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif",
            fontSize: '2.5rem',
            fontWeight: '700',
            color: 'var(--text-secondary, #FFD700)',
            marginBottom: '1rem'
          }}>
            Work Experience
          </h2>
          <p style={{
            fontFamily: "'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif",
            fontSize: '1.1rem',
            color: 'var(--text-muted, rgba(255, 255, 255, 0.8))'
          }}>
            My journey through the digital realm
          </p>
        </div>
        
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {portfolioData.workExperience.map((job, index) => (
            <div key={index} style={{
              background: 'var(--bg-card, rgba(255, 255, 255, 0.1))',
              border: '2px solid var(--border-primary, rgba(255, 255, 255, 0.2))',
              borderRadius: '15px',
              padding: '2rem',
              marginBottom: '2rem',
              boxShadow: '0 8px 32px var(--shadow-light, rgba(0, 0, 0, 0.1))',
              backdropFilter: 'blur(10px)'
            }}>
              <h3 style={{
                fontFamily: "'Space Grotesk', 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif",
                fontSize: '1.5rem',
                fontWeight: '700',
                color: 'var(--text-secondary, #FFD700)',
                marginBottom: '0.5rem'
              }}>
                {job.position}
              </h3>
              <h4 style={{
                fontFamily: "'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif",
                fontSize: '1.2rem',
                fontWeight: '600',
                color: 'var(--text-primary, #FFFFFF)',
                marginBottom: '0.3rem'
              }}>
                {job.company}
              </h4>
              <p style={{
                fontFamily: "'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif",
                fontSize: '1rem',
                color: 'var(--text-muted, rgba(255, 255, 255, 0.7))',
                marginBottom: '1rem'
              }}>
                {job.duration}
              </p>
              <p style={{
                fontFamily: "'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif",
                fontSize: '1rem',
                lineHeight: '1.6',
                color: 'var(--text-primary, #FFFFFF)',
                marginBottom: '1.5rem'
              }}>
                {job.description}
              </p>
              <div>
                <h5 style={{
                  fontFamily: "'Space Grotesk', 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif",
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: 'var(--text-secondary, #FFD700)',
                  marginBottom: '1rem'
                }}>
                  Technologies Used:
                </h5>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {job.technologies.map((tech, techIndex) => (
                    <span key={techIndex} style={{
                      fontFamily: "'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif",
                      background: 'var(--border-accent, #FFD700)',
                      color: 'var(--text-inverse, #000000)',
                      padding: '0.3rem 0.8rem',
                      borderRadius: '15px',
                      fontSize: '0.9rem',
                      fontWeight: '500',
                      boxShadow: '0 2px 8px var(--shadow-light, rgba(0, 0, 0, 0.1))'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
