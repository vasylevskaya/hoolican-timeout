import React from 'react';
import StaticCard from './StaticCard';
import AnimatedCard from './AnimatedCard';

const FlipUnitContainer = ({ digit, shuffle, unit }) => {
  // Handle specific units (days, hours, minutes, seconds)
  let currentDigit = digit;
  let previousDigit = digit + 1;

  // Prevent negative values for each unit
  if (unit === 'day') {
    previousDigit = previousDigit < 0 ? 0 : previousDigit;
  } else if (unit === 'hr') {
    previousDigit = previousDigit === -1 ? 23 : previousDigit;
  } else {
    previousDigit = previousDigit === -1 ? 59 : previousDigit;
  }

  // Add leading zero for single-digit values
  currentDigit = currentDigit < 10 ? `0${currentDigit}` : `${currentDigit}`;
  previousDigit = previousDigit < 10 ? `0${previousDigit}` : `${previousDigit}`;

  // Shuffle digits
  const digit1 = shuffle ? previousDigit : currentDigit;
  const digit2 = !shuffle ? previousDigit : currentDigit;

  // Shuffle animations
  const animation1 = shuffle ? 'fold' : 'unfold';
  const animation2 = !shuffle ? 'fold' : 'unfold';

  return (
    <div className="flip-unit-container">
      <StaticCard position="upper-card" digit={currentDigit} />
      <StaticCard position="lower-card" digit={previousDigit} />
      <AnimatedCard digit={digit1} animation={animation1} />
      <AnimatedCard digit={digit2} animation={animation2} />
      <p className='unit'>{unit}</p>
    </div>
  );
};

export default FlipUnitContainer;
