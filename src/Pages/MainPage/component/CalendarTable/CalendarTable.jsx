import React, { useEffect, useState } from 'react';
import './CalendarTable.scss';

const CalendarTable = ({
  month,
  now,
  posts,
  setPosts,
  compareTarget,
  data,
}) => {
  //   const [posts, setPosts] = useState(initialPosts);

  const cellsAmount = 42;
  const cells = [];
  const prevDaysAmount = getPrevDaysAmount();

  const weekDays = [
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье',
  ];

  function getPrevDaysAmount() {
    const firstWeekDayOfMonth = new Date(now, month, 1).getDay();
    return firstWeekDayOfMonth ? firstWeekDayOfMonth - 1 : 6;
  }

  useEffect(() => {
    const cells = [];
    const prevDaysAmount = getPrevDaysAmount();

    for (let i = -prevDaysAmount; i < cellsAmount - prevDaysAmount; i++) {
      const firstDayOfMonth = new Date(now, month, 1);
      const targetDate = new Date(
        firstDayOfMonth.setDate(firstDayOfMonth.getDate() + i)
      ).toLocaleDateString('ru-RU');
      cells.push(
        cells.length < 7
          ? `${weekDays[cells.length]}, ${targetDate.replace(/^0+/, '')}`
          : targetDate.replace(/^0+/, '')
      );
    }

    if (
      posts.length === 0 ||
      now !== new Date().getFullYear() ||
      month !== new Date().getMonth() ||
      month === new Date().getMonth()
    ) {
      const newPosts = cells.map((i) => {
        return {
          id: i.replace(/[^.\d]/g, ''),
          event: '',
          date: i,
          participants: '',
          descr: '',
        };
      });
      setPosts(newPosts);
    }
  }, [month, now]);

  let renderCalendar = posts.map((i) => {
    const item =
      data && data.length > 0
        ? data.find((item) => item[0] === i.id.replace(/[^.\d]/g, ''))
        : null;
    const className = item ? 'day active' : 'day';
    const text = item ? 'Посмотреть расписание' : '';
    return (
      <div
        className={className}
        id={i.id.replace(/[^.\d]/g, '')}
        key={i.id.replace(/[^.\d]/g, '')}
        onClick={(e) => compareTarget(e.currentTarget.id)}
      >
        <div className="numberDay">
          {i.date.slice(0, -8).replace(/^0+/, '')}
        </div>
        <div className="event">{i.event}</div>
        <div className="participants">{i.participants}</div>
        <div className="lesson">{text}</div>
      </div>
    );
  });

  return <div className="wrapper_calendar">{renderCalendar}</div>;
};

export default CalendarTable;
