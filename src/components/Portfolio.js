import React, { useState, useEffect } from 'react';
import SectionContainer from './SectionContainer';
import HeroSection from './HeroSection';
import Services from './Services';
import Projects from './Projects';
import Skills from './Skills';
import Testimonials from './Testimonials';
import SocialMediaHandles from './SocialMediaHandles';

const Portfolio = () => {
  const [heroData, setHeroData] = useState(null);
  const [servicesData, setServicesData] = useState(null);
  const [projectsData, setProjectsData] = useState(null);
  const [skillsData, setSkillsData] = useState(null);
  const [testimonialsData, setTestimonialsData] = useState(null);
  const [socialMediaData, setSocialMediaData] = useState(null);

  useEffect(() => {
    fetchHeroData();
    fetchServicesData();
    fetchProjectsData();
    fetchSkillsData();
    fetchTestimonialsData();
    fetchSocialMediaData();
  }, []);

  const fetchHeroData = async () => {
    try {
      const response = await fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae/hero');
      if (!response.ok) {
        throw new Error('Failed to fetch hero data');
      }
      const data = await response.json();
      setHeroData(data);
    } catch (error) {
      console.error('Error fetching hero data:', error);
    }
  };

  const fetchServicesData = async () => {
    try {
      const response = await fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae/services');
      if (!response.ok) {
        throw new Error('Failed to fetch services data');
      }
      const data = await response.json();
      setServicesData(data);
    } catch (error) {
      console.error('Error fetching services data:', error);
    }
  };

  const fetchProjectsData = async () => {
    try {
      const response = await fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae/projects');
      if (!response.ok) {
        throw new Error('Failed to fetch projects data');
      }
      const data = await response.json();
      setProjectsData(data);
    } catch (error) {
      console.error('Error fetching projects data:', error);
    }
  };

  const fetchSkillsData = async () => {
    try {
      const response = await fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae/skills');
      if (!response.ok) {
        throw new Error('Failed to fetch skills data');
      }
      const data = await response.json();
      setSkillsData(data);
    } catch (error) {
      console.error('Error fetching skills data:', error);
    }
  };

  const fetchTestimonialsData = async () => {
    try {
      const response = await fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae/testimonials');
      if (!response.ok) {
        throw new Error('Failed to fetch testimonials data');
      }
      const data = await response.json();
      setTestimonialsData(data);
    } catch (error) {
      console.error('Error fetching testimonials data:', error);
    }
  };

  const fetchSocialMediaData = async () => {
    try {
      const response = await fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae/social-media');
      if (!response.ok) {
        throw new Error('Failed to fetch social media data');
      }
      const data = await response.json();
      setSocialMediaData(data);
    } catch (error) {
      console.error('Error fetching social media data:', error);
    }
  };

  return (
    <div className="portfolio">
      <HeroSection data={heroData} />
      <Services data={servicesData} />
      <Projects data={projectsData} />
      <Skills data={skillsData} />
      <Testimonials data={testimonialsData} />
      <SocialMediaHandles data={socialMediaData} />
    </div>
  );
};

export default Portfolio;

