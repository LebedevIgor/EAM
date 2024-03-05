import React from 'react';
import classes from './MainPage.module.scss';
import Calendar from './component/Calendar/Calendar';

const MainPage = ({
  data,
  setData,
  posts,
  setPosts,
  month,
  setMonth,
  compareTarget,
  modal,
  setModal,
  target,
}) => {
  return (
    <div className={classes.main_page}>
      <Calendar
        posts={posts}
        setPosts={setPosts}
        month={month}
        setMonth={setMonth}
        data={data}
        setData={setData}
        compareTarget={compareTarget}
        modal={modal}
        setModal={setModal}
        target={target}
      />
    </div>
  );
};

export default MainPage;
