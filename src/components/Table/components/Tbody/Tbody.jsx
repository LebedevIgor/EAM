import React from 'react';

import classes from '../../Table.module.scss';

const Tbody = ({ children }) => {
  return <div className={classes.tbody}>{children}</div>;
};

export default Tbody;
