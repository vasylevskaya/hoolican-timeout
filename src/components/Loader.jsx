import WhiteSyndicateSvg from './WhiteSyndicateSvg';
import React from 'react';

const Loader = ({
  small,
  withoutBg
}) => {
  return (
    <div
      className={
        `loader flex items-center justify-center
        ${small ? '' : 'min-h-screen'} ${withoutBg ? '' : 'bg-gradient-to-b from-[#1F2225] to-[#090B0C]' }`
      }
    >
      <div
        className="inline-block size-28 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-white opacity-50  motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>

      <WhiteSyndicateSvg className="absolute size-[60px]" />
    </div>
  );
};

export default Loader;
