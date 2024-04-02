import React from 'react';
import classes from './Modal.module.scss';

const MyModal = ({ children, modal, setModal }) => {
  const rootClasses = [classes.myModal];
  if (modal) {
    rootClasses.push(classes.active);
  }

  return (
    <div className={rootClasses.join(' ')} onClick={() => setModal(false)}>
      <div className={classes.content} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default MyModal;
