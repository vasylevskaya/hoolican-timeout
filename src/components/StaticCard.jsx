import React from 'react';

// function component
const StaticCard = ({ position, digit }) => {
  return(
    <div className={`${position} font-sequel`}>
      <span className="">{digit}</span>
    </div>
  );
};

export default StaticCard;