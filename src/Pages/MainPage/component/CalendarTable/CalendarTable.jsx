import React from 'react';
import './CalendarTable.scss';
import truncateText from '../../../../lib/truncateText';
import addTaskCalendar from '../../../../services/addTaskCalendar.service';

const CalendarTable = ({ posts, setCellData, handleRowClick }) => {
  const weekDays = [
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье',
  ];

  let renderCalendar =
    posts &&
    posts.map((i, index) => {
      return (
        <div
          className={'day'}
          id={i.id}
          key={i.id}
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
          <div className="numberDay">
            {i.id.slice(8)} {weekDays[index]}
          </div>
          <div className="events">
            {i.events.map((event, index) => {
              if (event.is_events === true) {
                return (
                  <div
                    key={index}
                    className="event"
                    onClick={() =>
                      handleRowClick({ dataEvents: event, type: 'view' })
                    }
                  >
                    {event.time} {truncateText(event.name, 15)}
                  </div>
                );
              } else {
                return (
                  <div
                    key={index}
                    className="task"
                    onClick={() =>
                      handleRowClick({ id: event.id, type: 'view', date: i.id })
                    }
                  >
                    {truncateText(event.name, 20)}
                  </div>
                );
              }
            })}
          </div>
        </div>
      );
    });

  return <div className="wrapper_calendar">{posts && renderCalendar}</div>;
};

export default CalendarTable;
