import React from 'react';
import { ThemeToggle } from './components/Shared';
import { Navigation } from './components/Navigation';
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
      minHeight: '100vh',
      width: '100vw',
      position: 'relative'
    }}>
      <Navigation />
      <ThemeToggle />
      
      {/* Introduction Section */}
      <div id="introduction" style={{ 
        padding: '4rem 2rem',
        background: 'url("/Introduction-Background.jpg") center/cover no-repeat',
        minHeight: '100vh',
        position: 'relative'
      }}>
        {/* Dark overlay for dark mode */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(10, 25, 47, 0.7)',
          zIndex: 1
        }} className="dark-overlay"></div>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'flex-start', 
          alignItems: 'flex-start', 
          width: '100%',
          gap: '3rem',
          maxWidth: '1200px',
          margin: '0 auto',
          paddingLeft: '2rem',
          paddingRight: '2rem',
          position: 'relative',
          zIndex: 2
        }}>
          {/* Pokemon Card on the left */}
          <div style={{ flexShrink: 0 }}>
            <PokemonCard />
          </div>
          
          {/* About Me section on the right */}
          <AboutMe />
        </div>
      </div>
      
      {/* Work Experience Section */}
      <div id="work-experience">
        <WorkExperience />
      </div>
      
      {/* Education Section */}
      <div id="education">
        <Education />
      </div>
      
      {/* Projects Section */}
      <div id="projects">
        <Projects />
      </div>
      
      {/* Skills Section */}
      <div id="skills">
        <Skills />
      </div>
      
      {/* Languages Section */}
      <div id="languages">
        <Languages />
      </div>
      
      {/* Contact Info Section */}
      <div id="contact-info">
        <ContactInfo />
      </div>
    </div>
  );
}

export default App;
