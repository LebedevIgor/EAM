import React from 'react';

import classes from './MainPage.module.scss';

import Calendar from './component/Calendar/Calendar';
import Card from '../../component/Card/Card';

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
  now,
  setNow,
}) => {
  return (
    <div className={classes.main_page}>
      <Card
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: '20px 20px 0 20px',
        }}
      >
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
          now={now}
          setNow={setNow}
        />
      </Card>

      {/* <Card
        style={{
          margin: '20px 20px 0 20px',
        }}
      >
        asd
      </Card> */}
    </div>
  );
};

export default MainPage;
