import React from 'react';

const AnimatedCard = ({ animation, digit }) => {
  return(
    <div className={`flip-card font-sequel ${animation}`}>
      <span>{digit}</span>
    </div>
  );
};

export default AnimatedCard;