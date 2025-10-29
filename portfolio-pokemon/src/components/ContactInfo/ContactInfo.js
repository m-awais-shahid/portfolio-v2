import React, { useState } from 'react';
import portfolioData from '../../data/portfolioData.json';

const ContactInfo = () => {
  const { contactInfo } = portfolioData;
  const [emailCopied, setEmailCopied] = useState(false);

  const handleEmailCopy = async () => {
    try {
      await navigator.clipboard.writeText(contactInfo.email);
      setEmailCopied(true);
      // Reset the text after 2 seconds
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = contactInfo.email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setEmailCopied(true);
      // Reset the text after 2 seconds
      setTimeout(() => setEmailCopied(false), 2000);
    }
  };

  return (
    <div style={{ 
      padding: '4rem 2rem',
      background: 'var(--bg-section-contact)'
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
          Contact Info
        </h2>
        <p style={{ 
          fontSize: '1.1rem',
          color: 'var(--text-secondary)',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          fontFamily: 'var(--font-primary)'
        }}>
          Let's connect and work together
        </p>
      </div>

      <div style={{ 
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <div style={{ 
          background: 'var(--bg-card)',
          border: '2px solid var(--border-primary)',
          borderRadius: '15px',
          padding: '3rem',
          backdropFilter: 'blur(10px)',
          textAlign: 'center',
          boxShadow: '0 8px 32px var(--shadow-card)',
          transition: 'all 0.3s ease'
        }}>
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ 
              fontSize: '1.8rem',
              fontWeight: '700',
              color: 'var(--text-accent)',
              marginBottom: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontFamily: 'var(--font-heading)'
            }}>
              Muhammad Awais Shahid
            </h3>
            <p style={{ 
              fontSize: '1.2rem',
              fontWeight: '600',
              color: 'var(--text-primary)',
              marginBottom: '0.5rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              fontFamily: 'var(--font-primary)'
            }}>
              Software Engineer
            </p>
            <p style={{ 
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              fontFamily: 'var(--font-primary)'
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
                background: 'var(--btn-primary)',
                color: '#ffffff',
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
                minHeight: '60px',
                fontFamily: 'var(--font-primary)',
                boxShadow: '0 4px 15px var(--shadow-primary)',
                border: '2px solid var(--border-primary)'
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
                background: 'var(--btn-secondary)',
                color: '#ffffff',
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
                minHeight: '60px',
                fontFamily: 'var(--font-primary)',
                boxShadow: '0 4px 15px var(--shadow-secondary)',
                border: '2px solid var(--border-secondary)'
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
                background: 'var(--btn-accent)',
                color: '#ffffff',
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
                minHeight: '60px',
                fontFamily: 'var(--font-primary)',
                boxShadow: '0 4px 15px var(--shadow-primary)',
                border: '2px solid var(--border-primary)'
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
                background: 'var(--btn-danger)',
                color: '#ffffff',
                padding: '1rem 1.5rem',
                borderRadius: '12px',
                border: '2px solid var(--border-primary)',
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
                minHeight: '60px',
                fontFamily: 'var(--font-primary)',
                boxShadow: '0 4px 15px var(--shadow-primary)'
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
{emailCopied ? 'Email Copied!' : 'Copy Email'}
            </button>
          </div>

          <div style={{ 
            borderTop: '1px solid var(--border-muted)',
            paddingTop: '2rem'
          }}>
            <p style={{ 
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '1rem',
              fontFamily: 'var(--font-primary)'
            }}>
              Ready to collaborate on your next project?
            </p>
            <p style={{ 
              fontSize: '0.9rem',
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              fontFamily: 'var(--font-primary)'
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
