import React, { useEffect, useState } from 'react';

import './CalendarTable.scss';
import truncateText from '../../../../lib/truncateText';
import addTaskCalendar from '../../../../services/addTaskCalendar';

const CalendarTable = ({ posts, compareTarget, setCellData, cellData }) => {
  const weekDays = [
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье',
  ];

  // console.log('Id задачи:', cellData.taskId);
  // console.log('Name:', cellData.name);
  // console.log('calendarCellId:', cellData.calendarCellId);
  // useEffect(() => {
  //   const setValues = async () => {
  //     try {
  //       await
  //     } catch (error) {
  //       console.error('Error:', error);
  //     }
  //   };
  //   setValues();
  // }, [cellData]);

  let renderCalendar =
    posts &&
    posts.map((i) => {
      return (
        <div
          className={'day'}
          id={i.id}
          key={i.id}
          onClick={(e) => compareTarget(e.currentTarget.id)}
          onDrop={(e) => {
            e.preventDefault();
            const data = JSON.parse(e.dataTransfer.getData('data'));
            setCellData({
              calendarCellId: i.id,
              taskId: data.task_id,
              name: data.name,
            });
            addTaskCalendar(data.name, data.task_id, i.id);
          }}
          onDragOver={(e) => e.preventDefault()}
        >
          <div className="numberDay">{i.id.slice(8)}</div>
          <div className="events">
            {i.events.map((event, index) => (
              <div key={index} className="event">
                {truncateText(event.name, 20)}
              </div>
            ))}
          </div>
        </div>
      );
    });
  return <div className="wrapper_calendar">{posts && renderCalendar}</div>;
};

export default CalendarTable;
