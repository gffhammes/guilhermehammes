import React from 'react';
import './BenefitsItem.scss';

const BenefitsItem = ({
  iconPath,
  title,
  text
}) => {  
  return (
    <div className="benefit-item">
      <img src={process.env.PUBLIC_URL + iconPath} alt={title} />
      <div className="content">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default BenefitsItem
