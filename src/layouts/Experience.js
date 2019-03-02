import React from 'react';

import phone from '../assets/images/phone.svg';
import Bar from '../components/Bar';
import Button from '../components/Button';
import './Experience.scss';

const Experience = () => (
  <div className="Experience">
    <img src={phone} alt="Phone" className="Experience__phone" />

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
