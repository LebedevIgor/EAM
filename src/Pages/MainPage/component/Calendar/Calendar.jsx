import React from 'react';
import CalendarTable from '../CalendarTable/CalendarTable';
import MonthSelector from '../MonthSelector/MonthSelector';

import ModalView from '../ModalView/ModalView';
import MyModal from '../../../../components/Modal/Modal';
import ModalEvents from '../ModalEvents/ModalEvents';

const Calendar = ({
  posts,
  month,
  setMonth,
  compareTarget,
  now,
  setNow,
  cellData,
  setCellData,
  handleRowClick,
  modal,
  setModal,
  taskToView,
  setTaskToView,
  clickDate,
  setClickDate,
  modalEvent,
  setModalEvent,
  contacts,
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
        handleRowClick={handleRowClick}
      />
      <MyModal modal={modal} setModal={setModal}>
        <ModalView
          setModal={setModal}
          taskToView={taskToView}
          setTaskToView={setTaskToView}
          clickDate={clickDate}
          setClickDate={setClickDate}
        />
      </MyModal>
      <MyModal modal={modalEvent} setModal={setModalEvent}>
        <ModalEvents
          setModal={setModalEvent}
          modal={modalEvent}
          contacts={contacts}
        />
      </MyModal>
    </div>
  );
};

export default Calendar;
