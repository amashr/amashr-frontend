import React from 'react';

import './Solution.scss';
import Bar from '../components/Bar';

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
      {/* Create Card component */}
      <div className="Card">
        <img src="" alt="Payroll" className="Card__image" />
        <h3 className="Card__title">Payroll Management</h3>
        <p className="Card__text">
          Impove efficiecy by streaming core processes and providing enhanced
          access to employee information.
        </p>
      </div>
    </div>
  </div>
);

export default Solution;
