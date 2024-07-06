import React from 'react';
import Card from '../Card'; // Adjust the path based on your directory structure
import '../Card.css'; // Import your Card.css styles

const Services = () => {
  // Example array of service data
  const servicesData = [
    {
      id: 1,
      title: 'Service 1',
      description: (
        <div>
          <p>Name: Sarah Thompson</p>
          <p>Phone Number: (123) 456-7890</p>
          <p>Email: sarah.thompson@lawfirm.com</p>
        </div>
      ),
       // Example image URL
    },
    {
      id: 2,
      title: 'Service 2',
      description: (
        <div>
          <p>Name: David Rodriguez</p>
          <p>Phone Number: (987) 654-3210</p>
          <p>Email: david.rodriguez@legalservices.com</p>
        </div>
      ),
       // Example image URL
    },
    // Add more service objects as needed
  ];

  return (
    <div className='services-container'>
      <h1>Our Services</h1>
      <div className='cards-container'>
        {servicesData.map(service => (
          <Card
            key={service.id}
            title={service.title}
            description={service.description}
            
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
