import React, { useState, useEffect } from 'react';
import SectionContainer from "./SectionContainer";

const Services = () => {
  const [servicesData, setServicesData] = useState(null);

  useEffect(() => {
    fetchServicesData();
  }, []);

  const fetchServicesData = async () => {
    try {
      const response = await fetch("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae/services");
      
      if (!response.ok) {
          throw new Error("Failed to fetch services data. Status: " + response.status);
      }
      
      const data = await response.json();
      
      if (!data || !data.services) {
          throw new Error("Invalid data structure received for services.");
      }
      
      setServicesData(data.services); // Set the fetched services data
    } catch (error) {
      console.error("Error fetching services data:", error);
      // Optionally, you can set the services data to null or handle the error in another way
    }
  };

  return (
    <SectionContainer
      name={"services"}
      extraClass={"services-section"}
      title={"Services"}
      subTitle={"What I Offer"}
      servicesData={servicesData} // Pass servicesData to SectionContainer
    />
  );
};

export default Services;
