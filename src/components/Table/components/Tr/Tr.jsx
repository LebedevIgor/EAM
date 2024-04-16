import React from 'react';

import classes from '../../Table.module.scss';

const Tr = ({ hover, children, ...props }) => {
  const trClasses = [classes.tr];
  switch (hover) {
    case true:
      trClasses.push(classes.hover);
      break;
    default:
      break;
  }
  return (
    <div {...props} className={trClasses.join(' ')}>
      {children}
    </div>
  );
};

export default Tr;
