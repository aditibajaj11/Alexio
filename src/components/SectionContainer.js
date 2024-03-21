import React from 'react';
import PropTypes from 'prop-types';
import SectionTitle from './SectionTitle';
import HeroSection from './HeroSection';
import Services from './Services';
import Projects from './Projects'; // Assuming this component exists
import Skills from './Skills';
import Testimonials from './Testimonials';
import SocialMediaHandles from './SocialMediaHandles';

const SectionContainer = ({ section, data }) => {
  // Destructure 'section' object to extract 'name' and 'title' properties
  const { name, title } = section || {};

  // Define component to render based on section name
  const renderComponent = (name) => {
    switch (name) {
      case 'hero':
        return <HeroSection data={data} />;
      case 'services':
        return <Services data={data} />;
      case 'projects':
        return <Projects data={data} />;
      case 'skills':
        return <Skills data={data} />;
      case 'testimonials':
        return <Testimonials data={data} />;
      case 'socialMedia':
        return <SocialMediaHandles data={data} />;
      /
      default:
        return null;
    }
  };

  return (
    <div id={name}>
      <SectionTitle title={title} />
      {renderComponent(name)}
    </div>
  );
};

// Define prop types for SectionContainer component
SectionContainer.propTypes = {
  section: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
  data: PropTypes.object.isRequired,
};

export default SectionContainer;

