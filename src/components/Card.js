import React from 'react';

import './Card.scss';
import payroll from '../assets/images/payroll.svg';

const Card = () => (
  <div className="Card">
    <img src={payroll} alt="Payroll" className="Card__image" />
    <h3 className="Card__title">Payroll Management</h3>
    <p className="Card__text">
      Improve efficiency by streaming core processes and providing enhanced
      access to employee information.
    </p>
  </div>
);

export default Card;
