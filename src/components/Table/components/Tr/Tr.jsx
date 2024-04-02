import React from 'react';

import classes from '../../Table.module.scss';

const Tr = ({ children }) => {
  return <div className={classes.tr}>{children}</div>;
};

export default Tr;
