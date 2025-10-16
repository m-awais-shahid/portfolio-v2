import React from 'react';
import portfolioData from '../data/portfolioData.json';
import '../styles/work-experience.css';

const WorkExperience = () => {
  const { workExperience } = portfolioData;

  return (
    <div className="work-experience-section">
      <div className="section-header">
        <h2 className="section-title">
          <span className="title-text">Work Experience</span>
          <span className="title-accent">✨</span>
        </h2>
        <p className="section-subtitle">
          My journey through the digital realm
        </p>
      </div>

      <div className="experience-timeline">
        {workExperience.map((job, index) => (
          <div
            key={index}
            className="experience-card"
          >
            <div className="card-content">
              <div className="job-header">
                <div className="job-title">{job.title}</div>
                <div className="job-company">{job.company}</div>
                <div className="job-duration">{job.duration}</div>
              </div>
              
              <div className="job-details">
                <div className="job-location">
                  <span className="location-icon">📍</span>
                  {job.location}
                </div>
                <div className="job-type">
                  <span className="type-icon">💼</span>
                  {job.type}
                </div>
              </div>

              <div className="job-description">
                {job.description}
              </div>

              <div className="job-responsibilities">
                <h4 className="responsibilities-title">Key Achievements:</h4>
                <ul className="responsibilities-list">
                  {job.responsibilities.map((responsibility, respIndex) => (
                    <li key={respIndex} className="responsibility-item">
                      <span className="bullet">⚡</span>
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="job-skills">
                <h4 className="skills-title">Technologies Used:</h4>
                <div className="skills-tags">
                  {job.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="skill-tag">
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
