import { useState } from 'react';
import { StarRatingPropTypes } from '../types/starPropTypes';
import Star from './Star';

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '16px',
};

const starContainerStyle = {
  display: 'flex',
};

const StarRating = ({
  maxRating = 5,
  color = '#fcc419',
  size = 48,
  messages = [],
  defaultRating = 0,
}: StarRatingPropTypes) => {
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);

  const handleRating = (rating: number) => {
    setRating(rating);
  };

  const handleTempRating = (tempRating: number) => {
    setTempRating(tempRating);
  };

  const textStyle = {
    lineHeight: '0',
    margin: '0',
    color: color,
    fontSize: `${size / 1.5}px`,
  };

  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            size={size}
            color={color}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onRate={() => handleRating(i + 1)}
            onHoverIn={() => handleTempRating(i + 1)}
            onHoverOut={() => handleTempRating(0)}
          />
        ))}
      </div>

      <p style={textStyle}>
        {messages.length === maxRating
          ? messages[tempRating ? tempRating : rating - 1]
          : tempRating || rating || ''}
      </p>
    </div>
  );
};

export default StarRating;
