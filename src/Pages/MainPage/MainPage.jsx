import React, { useEffect, useState } from 'react';

import classes from './MainPage.module.scss';

import Calendar from './component/Calendar/Calendar';
import Card from '../../components/Card/Card';

import getCalendar from '../../services/getCalendar.service';
import TableTasks from './component/TableTasks/TableTasks';

const MainPage = ({
  data,
  setData,
  posts,
  setPosts,
  month,
  setMonth,
  modal,
  setModal,
  target,
  now,
  setNow,

  task,
  handleRowClick,
  taskToView,
  setTaskToView,
  clickDate,
  setClickDate,
  modalEvent,
  setModalEvent,
  contacts,
}) => {
  const [cellData, setCellData] = useState({
    calendarCellId: '',
    taskId: '',
    name: '',
  });

  useEffect(() => {
    const setValues = async () => {
      try {
        const posts = await getCalendar(month, now);

        setPosts(posts);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    setValues();
  }, [month, now, cellData, setPosts, modal, modalEvent]);
  return (
    <div className={classes.main_page}>
      <Card
        style={{
          display: 'flex',
        }}
      >
        <Calendar
          posts={posts}
          setPosts={setPosts}
          month={month}
          setMonth={setMonth}
          data={data}
          setData={setData}
          modal={modal}
          setModal={setModal}
          target={target}
          now={now}
          setNow={setNow}
          cellData={cellData}
          setCellData={setCellData}
          handleRowClick={handleRowClick}
          taskToView={taskToView}
          setTaskToView={setTaskToView}
          clickDate={clickDate}
          setClickDate={setClickDate}
          modalEvent={modalEvent}
          setModalEvent={setModalEvent}
          contacts={contacts}
        />

        <TableTasks task={task} setModalEvent={setModalEvent} />
      </Card>
    </div>
  );
};

export default MainPage;
