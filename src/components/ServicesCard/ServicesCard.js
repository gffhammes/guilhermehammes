import React from 'react';
import './ServicesCard.scss';

const ServicesCard = ({
  title,
  text
}) => {
  return (
    <a href="">
      <div className="services-card">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </a>
  )
}

export default ServicesCard
