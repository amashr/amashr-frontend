import React from 'react';

import Bar from '../components/Bar';
import Button from '../components/Button';
import './Experience.scss';

const Experience = () => (
  <div className="Experience">
    <svg
      className="Experience__phone"
      width="316"
      height="668"
      viewBox="0 0 316 668"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        y="0.884888"
        width="316"
        height="666.694"
        rx="27.8142"
        fill="#D0BFAB"
      />
      <rect
        x="2.53775"
        y="3.5618"
        width="310.924"
        height="661.34"
        rx="27.0416"
        fill="#EEDDCC"
        stroke="#DED2C6"
        strokeWidth="1.54523"
      />
      <rect
        x="4.79988"
        y="6.03304"
        width="306.401"
        height="656.397"
        rx="25.8826"
        fill="white"
        stroke="#E1CAB9"
        strokeWidth="0.772616"
      />
      <rect
        x="15.8882"
        y="57.0778"
        width="284.224"
        height="544.785"
        fill="url(#paint0_radial)"
      />
      <rect
        x="135.437"
        y="26.9863"
        width="45.1268"
        height="6.84689"
        rx="3.42345"
        fill="black"
        stroke="#3C3C3C"
        strokeWidth="0.772616"
      />
      <rect
        x="136.815"
        y="28.5052"
        width="42.3687"
        height="4.76184"
        rx="1.54523"
        fill="url(#paint1_linear)"
      />
      <rect
        x="114.252"
        y="26.9863"
        width="6.28888"
        height="6.84689"
        rx="3.14444"
        fill="black"
        stroke="#3C3C3C"
        strokeWidth="0.772616"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M117.397 32.3136C118.372 32.3136 119.162 31.461 119.162 30.4093C119.162 29.3576 118.372 28.505 117.397 28.505C116.422 28.505 115.631 29.3576 115.631 30.4093C115.631 31.461 116.422 32.3136 117.397 32.3136Z"
        fill="url(#paint2_linear)"
      />
      <rect
        x="195.46"
        y="26.9863"
        width="6.28882"
        height="6.84689"
        rx="3.14441"
        fill="black"
        stroke="#3C3C3C"
        strokeWidth="0.772616"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M198.603 32.3136C199.578 32.3136 200.369 31.461 200.369 30.4093C200.369 29.3576 199.578 28.505 198.603 28.505C197.628 28.505 196.838 29.3576 196.838 30.4093C196.838 31.461 197.628 32.3136 198.603 32.3136Z"
        fill="url(#paint3_linear)"
      />
      <defs>
        <radialGradient
          id="paint0_radial"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(77.5311 443.917) rotate(90) scale(544.785 284.224)"
        >
          <stop stopColor="#29D1F7" />
          <stop offset="1" stopColor="#1355FF" />
        </radialGradient>
        <linearGradient
          id="paint1_linear"
          x1="136.815"
          y1="28.5052"
          x2="136.815"
          y2="33.2671"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3C3C3C" />
          <stop offset="1" />
        </linearGradient>
        <linearGradient
          id="paint2_linear"
          x1="115.631"
          y1="28.505"
          x2="115.631"
          y2="32.3136"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3C3C3C" />
          <stop offset="1" />
        </linearGradient>
        <linearGradient
          id="paint3_linear"
          x1="196.838"
          y1="28.505"
          x2="196.838"
          y2="32.3136"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3C3C3C" />
          <stop offset="1" />
        </linearGradient>
      </defs>
    </svg>

    <div className="Experience__content">
      <h2 className="Experience__title">A digital employee experience</h2>
      <Bar />
      <p className="Experience__text">
        The world of HR is complex – that’s why we built a flexible platform for
        the entire HR ecosystem. So information is entered once and
        automatically populated across all your tools.
      </p>
      <Button path="/" desc="Let's Get Started" cssClass="Btn Btn--orange-6" />
      <p className="Experience__sub-text">
        > Checkout Amas-HR’s service offerings.
      </p>
    </div>
  </div>
);

export default Experience;
