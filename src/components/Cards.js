import React from 'react';
import './Cards.css'; // Assuming you have a CSS file for styling cards

const Card = ({ title, description, imageUrl }) => {
  return (
    <div className='card'>
      <img src={imageUrl} alt='Card' className='card-img' />
      <div className='card-content'>
        <h3 className='card-title'>{title}</h3>
        <p className='card-description'>{description}</p>
        <button className='card-button'>Learn More</button>
      </div>
    </div>
  );
};

export default Card;
