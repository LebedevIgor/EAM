import React from 'react';

import classes from './Table.module.scss';

const Table = ({ children }) => {
  return <div className={classes.table}>{children}</div>;
};

export default Table;
