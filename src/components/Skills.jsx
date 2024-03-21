import React, { useState, useEffect } from 'react';
import SectionContainer from "./SectionContainer";

const Skills = () => {
  const [skillsData, setSkillsData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSkillsData();
  }, []);

  const fetchSkillsData = async () => {
    try {
      const response = await fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae/skills');
      if (!response.ok) {
        throw new Error('Failed to fetch skills data');
      }
      const data = await response.json();
      setSkillsData(data.skills || []);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching skills data:', error);
      setError(error.message);
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching skills data: {error}</div>;
  }

  return (
    <SectionContainer
      name={"skills"}
      extraClass={"skills-section"}
      title={"Skills"}
      subTitle={"What I'm Good At"}
      skillsData={skillsData}
    />
  );
};

export default Skills;
