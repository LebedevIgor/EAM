import React from 'react';
import classes from './Card.module.scss';

const Card = ({ children, hover, ...props }) => {
  const cardClasses = [classes.card];

  if (hover) {
    cardClasses.push(classes.hovered);
  }

  return (
    <div {...props} className={cardClasses.join(' ')}>
      {children}
    </div>
  );
};

export default Card;
