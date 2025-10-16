import React, { useState, useEffect } from 'react';
import portfolioData from '../data/portfolioData.json';
import '../styles/pokemon-card.css';

const PokemonCard = () => {
  const { personalInfo, topSkills } = portfolioData;
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check theme on component mount and when theme changes
  useEffect(() => {
    const checkTheme = () => {
      const theme = document.documentElement.getAttribute('data-theme');
      setIsDarkMode(theme === 'dark');
    };

    // Check initial theme
    checkTheme();

    // Listen for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });

    return () => observer.disconnect();
  }, []);

  // Map skills to attack-like format
  const attacks = [
    {
      name: topSkills[0] || "React Development",
      symbol: "A",
      symbolClass: "development",
      damage: "90",
      description: "Responsive web development skill."
    },
    {
      name: topSkills[1] || "Node.js Backend",
      symbol: "B",
      symbolClass: "code",
      damage: "85",
      description: "Scalable application skill."
    },
    {
      name: topSkills[2] || "Full-Stack Architecture",
      symbol: "C",
      symbolClass: "design",
      damage: "95",
      description: "Complete web solutions skill."
    }
  ];

  return (
    <div 
      className="pokemon-card"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url('${isDarkMode ? '/card-background-dark.jpg' : '/card-background.jpg'}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'local',
        background: `linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url('${isDarkMode ? '/card-background-dark.jpg' : '/card-background.jpg'}') center/cover no-repeat`
      }}
    >
      {/* Card Header */}
      <div className="card-header">
        <div className="card-name">
          {personalInfo.fullName}
        </div>
        <div className="power-level">
          <span className="hp-text">HP</span> 100
        </div>
      </div>

      {/* Illustration Section */}
      <div className="illustration-section">
        <div className="illustration-background"></div>
        <img 
          src={personalInfo.profilePicture} 
          alt={personalInfo.fullName}
          className="card-image"
          onError={(e) => {
            // Fallback to a placeholder if image doesn't exist
            e.target.src = 'https://via.placeholder.com/140x140/4CAF50/FFFFFF?text=DEV';
          }}
        />
        <div className="card-type">Developer</div>
      </div>

      {/* Attacks/Abilities Section */}
      <div className="attacks-section">
        {attacks.map((attack, index) => (
          <div key={index} className="attack-item">
            <div className={`attack-symbol ${attack.symbolClass}`}>
              {attack.symbol}
            </div>
            <div className="attack-content">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span className="attack-name">{attack.name}</span>
                <span className="attack-damage">{attack.damage}</span>
              </div>
              <div className="attack-description">
                {attack.description}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <div className="card-footer">
        <div className="footer-item">
          <div className="footer-label">Weakness</div>
          <div className="footer-symbol weakness">1</div>
        </div>
        <div className="footer-item">
          <div className="footer-label">Resistance</div>
          <div className="footer-symbol resistance">0</div>
        </div>
        <div className="footer-item">
          <div className="footer-label">Retreat Cost</div>
          <div className="footer-symbol retreat">30</div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
