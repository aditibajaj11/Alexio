import React, { useState, useEffect } from 'react';
import SectionContainer from "./SectionContainer";

const SocialMediaHandles = () => {
  const [socialMediaData, setSocialMediaData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSocialMediaData();
  }, []);

  const fetchSocialMediaData = async () => {
    try {
      const response = await fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae/social-media');
      if (!response.ok) {
        throw new Error('Failed to fetch social media handles');
      }
      const data = await response.json();
      setSocialMediaData(data.socialMedia || []);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching social media handles:', error);
      setError(error.message);
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching social media handles: {error}</div>;
  }

  return (
    <SectionContainer
      name={"social-media"}
      extraClass={"social-media-section"}
      title={"Connect with Me"}
      subTitle={"Let's Stay Connected"}
      socialMediaData={socialMediaData}
    />
  );
};

export default SocialMediaHandles;
