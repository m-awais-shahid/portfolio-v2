import React, { useState, useEffect, useMemo } from 'react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  const sections = useMemo(() => [
    { id: 'introduction', label: 'Introduction' },
    { id: 'work-experience', label: 'Work Experience' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'languages', label: 'Languages' },
    { id: 'contact-info', label: 'Contact Info' }
  ], []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return (
    <nav style={{
      position: 'fixed',
      left: '1rem',
      top: '4rem',
      zIndex: 1000,
      background: 'var(--bg-card)',
      backdropFilter: 'blur(10px)',
      borderRadius: '15px',
      padding: '1.5rem 1rem',
      border: '2px solid var(--border-primary)',
      boxShadow: '0 8px 32px var(--shadow-card)',
      fontFamily: 'var(--font-primary)',
      transition: 'all 0.3s ease'
    }}>
      <ul style={{
        listStyle: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem'
      }}>
        {sections.map((section) => (
          <li key={section.id}>
            <button
              onClick={() => scrollToSection(section.id)}
              style={{
                background: activeSection === section.id 
                  ? 'var(--btn-primary)'
                  : 'transparent',
                color: activeSection === section.id ? 'var(--text-inverse)' : 'var(--text-primary)',
                border: activeSection === section.id 
                  ? '2px solid var(--border-primary)'
                  : '2px solid transparent',
                padding: '0.8rem 1.2rem',
                borderRadius: '10px',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                transition: 'all 0.3s ease',
                width: '100%',
                textAlign: 'left',
                minWidth: '140px',
                fontFamily: 'var(--font-primary)',
                boxShadow: activeSection === section.id 
                  ? '0 4px 15px var(--shadow-primary)'
                  : 'none'
              }}
              onMouseEnter={(e) => {
                if (activeSection !== section.id) {
                  e.target.style.background = 'var(--bg-card-hover)';
                  e.target.style.color = 'var(--text-accent)';
                  e.target.style.border = '2px solid var(--text-accent)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeSection !== section.id) {
                  e.target.style.background = 'transparent';
                  e.target.style.color = 'var(--text-primary)';
                  e.target.style.border = '2px solid transparent';
                }
              }}
            >
              {section.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
