import React from 'react';
import Button from './Button'; // Adjust the path based on your actual directory structure
import './Card.css'; // Import your Card.css styles

const Card = ({ title, description}) => {
  const handleButtonClick = () => {
    // Handle button click logic here
    console.log(`Button clicked for ${title}`);
  };

  return (
    <div className='card'>
      
      <div className='card-info'>
        <h3>{title}</h3>
        <p>{description}</p>
        <Button onClick={handleButtonClick}>Learn More</Button>
      </div>
    </div>
  );
};

export default Card;
