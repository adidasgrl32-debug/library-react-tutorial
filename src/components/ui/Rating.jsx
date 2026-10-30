import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Rating = ({ rating }) => {
  const fullStars = Math.max(0, Math.floor(rating || 0));
  
  return (
    <div className="book__ratings">
      {new Array(fullStars).fill(0).map((_, index) => (
        <FontAwesomeIcon key={index} icon="star" />
  ))}
      {rating % 1 !== 0 && 
        <FontAwesomeIcon icon="star-half-alt" />
      }
    </div>
  );
};

export default Rating;
