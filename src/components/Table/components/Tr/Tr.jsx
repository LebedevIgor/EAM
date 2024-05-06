import React from 'react';

import classes from '../../Table.module.scss';

const Tr = ({ hover, hoverLastChildFix, children, active, ...props }) => {
  const trClasses = [classes.tr];
  switch (hover) {
    case true:
      trClasses.push(classes.hover);
      break;
    default:
      break;
  }

  switch (hoverLastChildFix) {
    case true:
      trClasses.push(classes.hover_last_child_fix);
      break;
    default:
      break;
  }

  switch (active) {
    case true:
      trClasses.push(classes.active);
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
