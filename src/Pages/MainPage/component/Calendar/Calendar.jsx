import React from 'react';
import { useState } from 'react';
import CalendarTable from '../CalendarTable/CalendarTable';
import MonthSelector from '../MonthSelector/MonthSelector';

import Modal from '../Modal/Modal';
import './Calendar.scss';
import MyModal from '../../../../component/Modal/Modal';

const Calendar = ({
  posts,
  setPosts,
  month,
  setMonth,
  data,
  setData,
  compareTarget,
  modal,
  setModal,
  target,
}) => {
  const [now, setNow] = useState(new Date().getFullYear());

  return (
    <div className="container">
      <MonthSelector
        month={month}
        setMonth={setMonth}
        now={now}
        setNow={setNow}
      />
      <CalendarTable
        data={data}
        month={month}
        now={now}
        posts={posts}
        setPosts={setPosts}
        compareTarget={compareTarget}
      />
      <MyModal modal={modal} setModal={setModal}>
        <Modal
          posts={posts}
          setPosts={setPosts}
          setModal={setModal}
          target={target}
          month={month}
          data={data}
        />
      </MyModal>
    </div>
  );
};

export default Calendar;
