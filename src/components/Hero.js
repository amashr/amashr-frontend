import React from 'react';

import Bar from './Bar';

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
        {/* <Button path="/" desc="Request Demo" cssClass="Btn Btn--orange-6" />
        <Button path="/" desc="Contact Sales" cssClass="Btn" /> */}
      </div>
    </div>
    <div className="Hero__img">
      {/* <img src={interactionImg} alt="Interaction" /> */}
    </div>
  </main>
);

export default Hero;
