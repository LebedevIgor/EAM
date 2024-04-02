import React from 'react';

import classes from '../../Table.module.scss';

const Th = ({ children, textAlign, ...props }) => {
  const thClasses = [classes.th];

  switch (textAlign) {
    case 'center':
      thClasses.push(classes.center);
      break;
    case 'left':
      thClasses.push(classes.left);
      break;
    case 'right':
      thClasses.push(classes.right);
      break;
    default:
      break;
  }

  return (
    <div {...props} className={thClasses.join(' ')}>
      {children}
    </div>
  );
};

export default Th;
