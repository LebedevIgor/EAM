import React, { useState } from 'react';
import classes from './Accordion.module.scss';
import ArrowAccordion from '../../../../resources/image/icon/ArrowAccordion';
import MyButton from '../../../../components/Button/Button';

const Accordion = ({
  AllTasks,
  children,
  title,
  isActive,
  toggleAccordion,
  modalActive,
}) => {
  return (
    <>
      <div className={classes.accordion}>
        <div className={classes.selectro_wrapper} onClick={toggleAccordion}>
          {title} <ArrowAccordion isContentVisible={isActive} />
        </div>
        {AllTasks && <MyButton onClick={modalActive}>Добавить задачу</MyButton>}
      </div>
      <div
        style={{
          maxHeight: isActive ? '200px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.3s ease',
        }}
      >
        <div style={{ maxHeight: '200px', overflowY: 'auto' }}>{children}</div>
      </div>
    </>
  );
};

export default Accordion;
