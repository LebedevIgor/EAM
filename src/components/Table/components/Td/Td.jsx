import React from 'react';

import classes from '../../Table.module.scss';

const Td = ({ children, textAlign, ...props }) => {
  const tdClasses = [classes.td];
  switch (textAlign) {
    case 'center':
      tdClasses.push(classes.center);
      break;
    case 'left':
      tdClasses.push(classes.left);
      break;
    case 'right':
      tdClasses.push(classes.right);
      break;
    default:
      break;
  }

  return (
    <div {...props} className={tdClasses.join(' ')}>
      {children}
    </div>
  );
};

export default Td;
