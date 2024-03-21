import React, { useState, useEffect } from 'react';
import SectionContainer from "./SectionContainer";

const Projects = () => {
  const [projectsData, setProjectsData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjectsData();
  }, []);

  const fetchProjectsData = async () => {
    try {
      const response = await fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae/projects');
      if (!response.ok) {
        throw new Error('Failed to fetch projects data');
      }
      const data = await response.json();
      setProjectsData(data.projects || []);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching projects data:', error);
      setError(error.message);
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching projects data: {error}</div>;
  }

  return (
    <SectionContainer
      name={"projects"}
      extraClass={"projects-section"}
      title={"Projects"}
      subTitle={"My Work"}
      projectsData={projectsData}
    />
  );
};

export default Projects;
