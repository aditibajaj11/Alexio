// HeroSection.js
import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    fetchHeroData();
  }, []);

  const fetchHeroData = async () => {
    try {
      const response = await fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae');
      if (!response.ok) {
        throw new Error('Failed to fetch hero data');
      }
      const data = await response.json();
      setHeroData(data);
    } catch (error) {
      console.error('Error fetching hero data:', error);
    }
  };

  if (!heroData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="hero-section">
      <h1>{heroData.name}</h1>
      <h2>{heroData.jobTitle}</h2>
      <p>{heroData.introduction}</p>
      <img src={heroData.image} alt="Profile" />
    </div>
  );
};

export default HeroSection;

