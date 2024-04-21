import React from 'react';

import classes from '../../Table.module.scss';

const Tbody = ({ children, ...props }) => {
  return (
    <div {...props} className={classes.tbody}>
      {children}
    </div>
  );
};

export default Tbody;
