import React from 'react';
import CalendarTable from '../CalendarTable/CalendarTable';
import MonthSelector from '../MonthSelector/MonthSelector';

import Modal from '../Modal/Modal';
import MyModal from '../../../../components/Modal/Modal';

const Calendar = ({
  posts,
  setPosts,
  month,
  setMonth,
  data,
  compareTarget,
  modal,
  setModal,
  target,
  now,
  setNow,
  cellData,
  setCellData,
}) => {
  return (
    <div>
      <MonthSelector
        month={month}
        setMonth={setMonth}
        now={now}
        setNow={setNow}
      />
      <CalendarTable
        posts={posts}
        compareTarget={compareTarget}
        cellData={cellData}
        setCellData={setCellData}
      />
      {/* <MyModal modal={modal} setModal={setModal}>
        <Modal
          posts={posts}
          setPosts={setPosts}
          setModal={setModal}
          target={target}
          data={data}
        />
      </MyModal> */}
    </div>
  );
};

export default Calendar;
