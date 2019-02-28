import React from 'react';

import interactionImg from '../assets/images/interaction.svg';
import Bar from '../components/Bar';
import Button from '../components/Button';
import './Hero.scss';

const Hero = () => (
  <main className="Hero">
    <div className="Hero__content">
      <h1 className="Hero__title">
        Don’t worry about managing HR, Benefits, and Payroll.
      </h1>
      <Bar />
      <p className="Hero__desc">
        AMAS HR is here for you. Just focus on your core business.
      </p>
      <div className="Hero__btnContainer">
        <Button path="/" desc="Request Demo" cssClass="Btn Btn--orange-6" />
        <Button path="/" desc="Contact Sales" cssClass="Btn" />
      </div>
    </div>
    <div className="Hero__img">
      <img src={interactionImg} alt="Interaction" />
    </div>
    <svg
      className="Hero__bottomGradient"
      width="1440"
      height="279"
      viewBox="0 0 1440 279"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 60.4332C660 341.448 871 52.3755 1440 0V279H0V60.4332Z"
        fill="url(#paint0_linear)"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="720"
          y1="-6.50535e-06"
          x2="720"
          y2="279"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.491713" stopColor="#0552B5" />
          <stop offset="1" stopColor="#47A3F3" />
        </linearGradient>
      </defs>
    </svg>
  </main>
);

export default Hero;
