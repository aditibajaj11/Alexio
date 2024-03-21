import React, { useState, useEffect } from 'react';
import SectionContainer from './SectionContainer';

const Contact = () => {
  const [contactInfo, setContactInfo] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContactInfo();
  }, []);

  const fetchContactInfo = async () => {
    try {
      const response = await fetch('https://example.com/api/contact');
      if (!response.ok) {
        throw new Error('Failed to fetch contact information');
      }
      const data = await response.json();
      setContactInfo(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching contact information:', error);
      setError(error.message);
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
    <SectionContainer
      name="contact"
      title="CONTACT ME"
      subTitle="GET IN TOUCH"
      leftImage="static/img/title-4.jpg"
    >
      {contactInfo && (
        <div className="row">
          <div className="col-md-4 m-15px-tb">
            <div className="contact-info">
              <i className="theme-color ti-location-pin" />
              <h6 className="dark-color font-alt">Our Address</h6>
              <p>{contactInfo.address}</p>
            </div>
          </div>
          <div className="col-md-4 m-15px-tb">
            <div className="contact-info">
              <i className="theme-color ti-mobile" />
              <h6 className="dark-color font-alt">Our Phone</h6>
              <p>{contactInfo.phone}</p>
            </div>
          </div>
          <div className="col-md-4 m-15px-tb">
            <div className="contact-info">
              <i className="theme-color ti-email" />
              <h6 className="dark-color font-alt">Our Email</h6>
              <p>{contactInfo.email}</p>
            </div>
          </div>
        </div>
      )}
    </SectionContainer>
  );
};

export default Contact;

