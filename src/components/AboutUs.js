import React, { useState, useEffect } from 'react';
import SectionContainer from "./SectionContainer";

const AboutUs = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae');
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      const data = await response.json();
      if (!data || !data.user) {
        throw new Error('Invalid data structure received');
      }
      setUserData(data.user);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching user data:', error);
      setError(error.message);
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>Error fetching user data: {error}</div>
    );
  }

  return (
    <SectionContainer
      name={"about"}
      extraClass="about-section"
      title={"About"}
      subTitle={userData.about.subTitle}
      leftImage={userData.about.avatar.url}
      leftImageTitle={userData.about.name}
      description={userData.about.description}
      quote={userData.about.quote}
      experience={userData.timeline}
      skills={userData.skills}
      phoneNumber={userData.about.phoneNumber}
      address={userData.about.address}
    />
  );
};

export default AboutUs;
