import React from 'react';
import { Link } from 'react-router-dom';

import './Button.scss';

const Button = props => (
  <Link className={props.cssClass} to={props.path}>
    {props.desc}
  </Link>
);

export default Button;
