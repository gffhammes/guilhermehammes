import React from 'react';
import { Link } from 'react-scroll';
import './Button.scss';

const SIZES = ['btn--medium', 'btn--large'];

const Button = ({
  children,
  btnSize,
  targetId,
  isRound
}) => {
  const checkSize = SIZES.includes(btnSize) ? btnSize : SIZES[0];

  return (
    <Link
      activeClass="active"
      to={targetId}
      spy={true}
      smooth={true}
      offset={-100}
      className={`shadow-2 btn ${checkSize} ${isRound ? 'round' : ''}`}
    >
      {children}
    </Link>
  )
}

export default Button
