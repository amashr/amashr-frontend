import React from 'react';

import './Solution.scss';
import Bar from '../components/Bar';
import Card from '../components/Card';

const Solution = () => (
  <div className="Solution">
    <h2 className="Solution__title">Our Solutions</h2>
    <Bar />
    <p className="Solution__text">
      We know the world of HR is complex. That’s why we bring all the tools and
      people apps in one place. So your job is to focus on your core business.
      With a mobile-first mindset, AMAS HR gives employees and employer 360
      views when comes to time off request, benefits, payroll, employee
      engagement, and compliance.
    </p>
    <div className="Solution__card-wrapper">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </div>
);

export default Solution;
