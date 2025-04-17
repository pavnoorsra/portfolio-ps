import React from 'react';

const Projects = () => {
  return (
    <div className="projects">
      <h2>🔥 My Projects</h2>
      <div className="project-card">
        <h3>🌤️ Weather App</h3>
        <p>Live weather updates by city!</p>
        <a href="https://mycityps.vercel.app" target="_blank" rel="noreferrer">Visit Site</a>
      </div>

      <div className="project-card">
        <h3>✅ To-Do List</h3>
        <p>Organize your daily tasks in a sleek UI</p>
        <a href="https://todolistps.vercel.app" target="_blank" rel="noreferrer">Visit Site</a>
      </div>
    </div>
  );
};

export default Projects;
