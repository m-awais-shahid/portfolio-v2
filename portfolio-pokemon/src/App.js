import React from 'react';
import { ThemeToggle } from './components/Shared';
import { PokemonCard, AboutMe } from './components/Introduction';
import { WorkExperience } from './components/WorkExperience';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Languages } from './components/Languages';
import { ContactInfo } from './components/ContactInfo';
import './App.css';

function App() {
  return (
    <div className="App" style={{ 
      background: 'var(--gradient-primary, linear-gradient(135deg, #F7F3F0 0%, #E8DDD4 100%))',
      minHeight: '100vh',
      width: '100vw',
      position: 'relative'
    }}>
      <ThemeToggle />
      
      {/* Introduction Section */}
      <section className="introduction-section">
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
          
          {/* About Me section on the right */}
          <AboutMe />
        </div>
      </section>
      
      {/* Work Experience Section */}
      <WorkExperience />
      
      {/* Education Section */}
      <Education />
      
      {/* Projects Section */}
      <Projects />
      
      {/* Skills Section */}
      <Skills />
      
      {/* Languages Section */}
      <Languages />
      
      {/* Contact Info Section */}
      <ContactInfo />
    </div>
  );
}

export default App;
