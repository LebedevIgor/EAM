import React from 'react';

import classes from './Table.module.scss';

const Table = ({ children, ...props }) => {
  return (
    <div {...props} className={classes.table}>
      {children}
    </div>
  );
};

export default Table;
