import React from 'react';

import './Partnering.scss';
import Button from './Button';
import chattingImg from '../assets/images/chatting.svg';

const Partnering = () => (
  <section className="Partnering">
    <div className="Partnering__content">
      <h2 className="Partnering__title">Partnering people with technology.</h2>
      <p className="Partnering__text">
        It’s is more than a platform. In addition to a vast HR resources
        library, our experts offer person to person advisory services for your
        more complex HR and payroll questions. And if you need it, support is
        just a phone call away.
      </p>
      <Button path="/" desc="Let’s Get Started" cssClass="Btn" />
      <p className="Partnering__sub-text">
        > Checkout Amas-HR’s service offerings.
      </p>
    </div>
    <img className="Partnering__img" src={chattingImg} alt="Chatting" />
  </section>
);

export default Partnering;
