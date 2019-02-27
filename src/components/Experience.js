import React from 'react';

import Bar from './Bar';
import Button from './Button';
import './Experience.scss';

const Experience = () => (
  <div className="Experience">
    <svg
      width="410"
      height="761"
      viewBox="0 0 410 761"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d)">
        <rect
          x="47"
          y="23.8849"
          width="316"
          height="666.694"
          rx="27.8142"
          fill="#D0BFAB"
        />
        <rect
          x="49.5378"
          y="26.5618"
          width="310.924"
          height="661.34"
          rx="27.0416"
          fill="#EEDDCC"
          stroke="#DED2C6"
          stroke-width="1.54523"
        />
        <rect
          x="51.7999"
          y="29.033"
          width="306.401"
          height="656.397"
          rx="25.8826"
          fill="white"
          stroke="#E1CAB9"
          stroke-width="0.772616"
        />
        <rect
          x="62.8882"
          y="80.0778"
          width="284.224"
          height="544.785"
          fill="url(#paint0_radial)"
        />
        <rect
          x="182.437"
          y="49.9863"
          width="45.1268"
          height="6.84689"
          rx="3.42345"
          fill="black"
          stroke="#3C3C3C"
          stroke-width="0.772616"
        />
        <rect
          x="183.815"
          y="51.5052"
          width="42.3687"
          height="4.76184"
          rx="1.54523"
          fill="url(#paint1_linear)"
        />
        <rect
          x="161.252"
          y="49.9863"
          width="6.28888"
          height="6.84689"
          rx="3.14444"
          fill="black"
          stroke="#3C3C3C"
          stroke-width="0.772616"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M164.397 55.3136C165.372 55.3136 166.162 54.461 166.162 53.4093C166.162 52.3576 165.372 51.505 164.397 51.505C163.422 51.505 162.631 52.3576 162.631 53.4093C162.631 54.461 163.422 55.3136 164.397 55.3136Z"
          fill="url(#paint2_linear)"
        />
        <rect
          x="242.46"
          y="49.9863"
          width="6.28882"
          height="6.84689"
          rx="3.14441"
          fill="black"
          stroke="#3C3C3C"
          stroke-width="0.772616"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M245.603 55.3136C246.578 55.3136 247.369 54.461 247.369 53.4093C247.369 52.3576 246.578 51.505 245.603 51.505C244.628 51.505 243.838 52.3576 243.838 53.4093C243.838 54.461 244.628 55.3136 245.603 55.3136Z"
          fill="url(#paint3_linear)"
        />
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="0.643036"
          y="0.706406"
          width="408.714"
          height="759.408"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="23.1785" />
          <feGaussianBlur stdDeviation="23.1785" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.88 0"
          />
          <feBlend
            mode="darken"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <radialGradient
          id="paint0_radial"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(124.531 466.917) rotate(90) scale(544.785 284.224)"
        >
          <stop stop-color="#29D1F7" />
          <stop offset="1" stop-color="#1355FF" />
        </radialGradient>
        <linearGradient
          id="paint1_linear"
          x1="183.815"
          y1="51.5052"
          x2="183.815"
          y2="56.2671"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#3C3C3C" />
          <stop offset="1" />
        </linearGradient>
        <linearGradient
          id="paint2_linear"
          x1="162.631"
          y1="51.505"
          x2="162.631"
          y2="55.3136"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#3C3C3C" />
          <stop offset="1" />
        </linearGradient>
        <linearGradient
          id="paint3_linear"
          x1="243.838"
          y1="51.505"
          x2="243.838"
          y2="55.3136"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#3C3C3C" />
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
