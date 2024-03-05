import React from 'react';
import classes from './Button.module.scss';

const MyButton = ({ children, ...props }) => {
  return (
    <button {...props} className={classes.button}>
      {children}
    </button>
  );
};

export default MyButton;
