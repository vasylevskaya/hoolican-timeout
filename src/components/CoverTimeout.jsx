import React, { useState } from "react";
import Loader from "./Loader";

import FlipClock from './FlipClock';

import logo from '../assets/images/logo.png';
import arrowTopRight from '../assets/images/arrow-top-right.svg';

const CoverTimeout = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`cover-timeout text-white flex flex-col items-center justify-center
      ${isLoading ? 'loading' : 'loaded'}`}
    >
      <Loader small withoutBg />
      <div className="cover-timeout-content flex-col items-center">
        <img
          className="cover-timeout-logo"
          src={logo}
          alt="logo"
        />

        <div className="cover-timeout-timer">
          <p className="cover-timeout-timer-title font-sequel text-center leading-none">
            OFFICIAL <br /> GLOBAL RELEASE
          </p>
          <FlipClock isLoading={isLoading} setIsLoading={setIsLoading} />
          <div className="release-date flex justify-center items-center gap-2">
            <img
              src={arrowTopRight}
              alt="arrow-top-right"
              className="h-[20px]"
            />
            Release date
            <div className="release-date-line"/>
            June 1, 2025
          </div>
        </div>
        <div className="cover-timeout-footer flex justify-between w-full gap-xs">
          <p>Unique. Collectible. Different.</p>
          <p>© 2025 Hoolican. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default CoverTimeout;
