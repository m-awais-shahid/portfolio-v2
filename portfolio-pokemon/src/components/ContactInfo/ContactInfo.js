import React from 'react';
import portfolioData from '../../data/portfolioData.json';

const ContactInfo = () => {
  const { contactInfo } = portfolioData;

  const handleEmailCopy = async () => {
    try {
      await navigator.clipboard.writeText(contactInfo.email);
      alert('Email copied to clipboard!');
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = contactInfo.email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      alert('Email copied to clipboard!');
    }
  };

  return (
    <div style={{ 
      padding: '4rem 2rem',
      background: 'linear-gradient(135deg, #1A1A2E 0%, #16213E 100%)'
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
          Contact Info
        </h2>
        <p style={{ 
          fontSize: '1.1rem',
          color: 'rgba(255, 255, 255, 0.8)',
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}>
          Let's connect and work together
        </p>
      </div>

      <div style={{ 
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <div style={{ 
          background: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '15px',
          padding: '3rem',
          backdropFilter: 'blur(10px)',
          textAlign: 'center'
        }}>
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ 
              fontSize: '1.8rem',
              fontWeight: '700',
              color: '#FFD700',
              marginBottom: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em'
            }}>
              Muhammad Awais Shahid
            </h3>
            <p style={{ 
              fontSize: '1.2rem',
              fontWeight: '600',
              color: '#FFFFFF',
              marginBottom: '0.5rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Software Engineer
            </p>
            <p style={{ 
              fontSize: '1rem',
              color: 'rgba(255, 255, 255, 0.8)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              {contactInfo.location}
            </p>
          </div>

          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
            marginBottom: '2rem'
          }}>
            <a 
              href={contactInfo.xing}
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                color: '#000000',
                padding: '1rem 1.5rem',
                borderRadius: '12px',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                minWidth: '200px',
                minHeight: '60px'
              }}
            >
              <img 
                src="/icons/xing.png" 
                alt="Xing" 
                style={{ 
                  width: '20px', 
                  height: '20px',
                  filter: 'brightness(0)'
                }} 
              />
              Xing Profile
            </a>

            <a 
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                background: 'linear-gradient(135deg, #0077B5 0%, #005885 100%)',
                color: '#FFFFFF',
                padding: '1rem 1.5rem',
                borderRadius: '12px',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                minWidth: '200px',
                minHeight: '60px'
              }}
            >
              <img 
                src="/icons/linkedin.png" 
                alt="LinkedIn" 
                style={{ 
                  width: '20px', 
                  height: '20px'
                }} 
              />
              LinkedIn
            </a>

            <a 
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                background: 'linear-gradient(135deg, #333333 0%, #000000 100%)',
                color: '#FFFFFF',
                padding: '1rem 1.5rem',
                borderRadius: '12px',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                minWidth: '200px',
                minHeight: '60px'
              }}
            >
              <img 
                src="/icons/github.png" 
                alt="GitHub" 
                style={{ 
                  width: '20px', 
                  height: '20px'
                }} 
              />
              GitHub
            </a>
          </div>

          <div style={{ 
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '2rem'
          }}>
            <button 
              onClick={handleEmailCopy}
              style={{ 
                background: 'linear-gradient(135deg, #E74C3C 0%, #C0392B 100%)',
                color: '#FFFFFF',
                padding: '1rem 1.5rem',
                borderRadius: '12px',
                border: 'none',
                fontSize: '1rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                minWidth: '200px',
                minHeight: '60px'
              }}
            >
              <img 
                src="/icons/gmail.png" 
                alt="Gmail" 
                style={{ 
                  width: '20px', 
                  height: '20px'
                }} 
              />
              Copy Email
            </button>
          </div>

          <div style={{ 
            borderTop: '1px solid rgba(255, 255, 255, 0.2)',
            paddingTop: '2rem'
          }}>
            <p style={{ 
              fontSize: '1rem',
              color: 'rgba(255, 255, 255, 0.8)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '1rem'
            }}>
              Ready to collaborate on your next project?
            </p>
            <p style={{ 
              fontSize: '0.9rem',
              color: 'rgba(255, 255, 255, 0.6)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Let's build something amazing together!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
