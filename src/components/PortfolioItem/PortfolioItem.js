import React from 'react';
import './PortfolioItem.scss';
import Button from '../Button/Button';

const SIZES = ['btn--medium', 'btn--large'];

const PortfolioItem = ({
  imgPath,
  title,
  resume,
  stacks
}) => {
  /*const checkSize = SIZES.includes(btnSize) ? btnSize : SIZES[0];*/

  return (
    <div className="portfolio-item">
      <img src={process.env.PUBLIC_URL + imgPath} alt={title} />
      <div className="content shadow-2">
        <h3>{title}</h3>
        <span>{resume}</span>
        <span>{stacks}</span>
        <Button>{'conhecer >'}</Button>
      </div>
    </div>
  )
}

export default PortfolioItem
