import React, { useState } from 'react';

import classes from './Accordion.module.scss';
import ArrowAccordion from '../../../../resources/image/icon/ArrowAccordion';
import MyButton from '../../../../components/Button/Button';

const Accordion = ({ AllTasks, children, title }) => {
  const [isContentVisible, setContentVisibility] = useState(
    AllTasks ? true : false
  );

  const toggleContentVisibility = () => {
    setContentVisibility(!isContentVisible);
  };

  const contentStyle = {
    maxHeight: isContentVisible ? `${AllTasks ? '200px' : '100px'}` : '0',
    overflow: 'hidden',
    transition: 'max-height 0.3s ease',
  };

  return (
    <>
      <div className={classes.accordion}>
        <div
          className={classes.selectro_wrapper}
          onClick={toggleContentVisibility}
        >
          {title} <ArrowAccordion isContentVisible={isContentVisible} />
        </div>
        {AllTasks && <MyButton>Добавить задачу</MyButton>}
      </div>
      <div style={contentStyle}>
        <div
          style={{
            maxHeight: `${AllTasks ? '200px' : '100px'}`,
            overflowY: 'auto',
          }}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default Accordion;
