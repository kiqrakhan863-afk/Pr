import React from 'react';
import './Portfolio.css'; // Make sure this CSS file exists

const Portfolio = () => {
  const projects = [
    {
      title: 'Plant Shop Website',
      description: 'A responsive e-commerce website for a plant nursery with shopping cart and checkout features.',
      img: 'project1.jpg',
      link: 'https://github.com/yourusername/plant-shop',
    },
    {
      title: 'Garden Blog',
      description: 'A blog platform sharing gardening tips, plant care guides, and DIY tutorials.',
      img: 'project2.jpg',
      link: 'https://github.com/yourusername/garden-blog',
    },
    {
      title: 'React Weather App',
      description: 'A weather forecast app built with React and OpenWeather API.',
      img: 'project3.jpg',
      link: 'https://github.com/yourusername/react-weather',
    },
  ];

  return (
    <div className="portfolio-container">
      <header className="portfolio-header">
        <h1>My Portfolio</h1>
        <p>Check out some of my recent projects and work.</p>
      </header>

      <section className="projects">
        <div className="project-cards">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.img} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;