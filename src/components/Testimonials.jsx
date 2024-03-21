import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import SectionContainer from "./SectionContainer";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const response = await fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae/testimonials');
      if (!response.ok) {
        throw new Error('Failed to fetch testimonials');
      }
      const data = await response.json();
      setTestimonials(data.testimonials || []);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
      setError(error.message);
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching testimonials: {error}</div>;
  }

  return (
    <SectionContainer
      name={"testimonials"}
      extraClass={"testimonial-section"}
      title={"Testimonials"}
      subTitle={"What People Say"}
      testimonials={testimonials}
    />
  );
};

export default Testimonials;


