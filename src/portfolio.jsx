import React, { useEffect, useState } from 'react';

const Portfolio = () => {
  const userId = '65b3a22c01d900e96c4219ae';
  const apiUrl = `https://portfolio-backend-30mp.onrender.com/api/v1/get/user/${userId}`;
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPortfolioData();
  }, []);

  const fetchPortfolioData = async () => {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Failed to fetch portfolio data');
      }
      const data = await response.json();
      setPortfolioData(data);
    } catch (error) {
      setError(error.message);
    }
    finally {
      setLoading(false);
    }
  };
  
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {portfolioData && (
        <div>
          <div>
            <h2>{portfolioData.name}</h2>
            <h3>{portfolioData.jobTitle}</h3>
            <p>{portfolioData.description}</p>
          </div>
          <div>
            <h3>Services</h3>
            {portfolioData.services.map((service, index) => (
              <div key={index}>
                <h4>{service.name}</h4>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
          <div>
            <h3>Projects</h3>
            {portfolioData.projects.map((project, index) => (
              <div key={index}>
                <h4>{project.name}</h4>
                <p>{project.description}</p>
                <img src={project.image} alt={project.name} />
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  Visit Project
                </a>
              </div>
            ))}
          </div>
          <div>
            <h3>Skills</h3>
            {portfolioData.skills.map((skill, index) => (
              <div key={index}>
                <h4>{skill.name}</h4>
                <progress value={skill.level} max="100" />
              </div>
            ))}
          </div>
          <div>
            <h3>Testimonials</h3>
            {portfolioData.testimonials.map((testimonial, index) => (
              <div key={index}>
                <p>{testimonial.text}</p>
                <cite>{testimonial.author}</cite>
              </div>
            ))}
          </div>
          <div>
            <a href={portfolioData.socialMediaHandles.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={portfolioData.socialMediaHandles.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            {/* Add more social media platforms as needed */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;

