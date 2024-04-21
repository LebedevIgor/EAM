import React from 'react';

import classes from '../../Table.module.scss';

const Thead = ({ children, ...props }) => {
  return (
    <div {...props} className={classes.thead}>
      {children}
    </div>
  );
};

export default Thead;
