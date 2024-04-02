import React from 'react';

import classes from '../../Table.module.scss';

const Thead = ({ children }) => {
  return <div className={classes.thead}>{children}</div>;
};

export default Thead;
