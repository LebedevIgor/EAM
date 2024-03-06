import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import Exit from '../../resources/image/icon/Exit';
import Lupa from '../../resources/image/icon/Lupa';
import classes from './HeaderNavbar.module.scss';
import User from '../../resources/image/icon/User';

const HeaderNavbar = ({ month, compareTarget, posts }) => {
  const [modalList, setModalList] = useState(posts);
  // console.log(posts);
  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();

  const filterModal = (searchText, listOfModal) => {
    if (!searchText || !Array.isArray(listOfModal)) {
      return listOfModal;
    }

    return listOfModal.filter((i) =>
      i.event.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  useEffect(() => {
    const filteredModal = filterModal(searchTerm, posts);
    console.log(filteredModal);
    setModalList(filteredModal);
  }, [searchTerm, month]);

  const handleExitClick = () => {
    localStorage.clear();
    navigate('/login');
  };

  const handleClickList = (e) => {
    navigate('/');
    setSearchTerm('');
    compareTarget(e);
  };

  const renderModalList = () => {
    if (searchTerm.length === 0) {
      return null;
    }

    if (modalList.length === 0) {
      return (
        <div className={classes.dropdown}>
          <div className={classes.no_search_card}>Ничего не найдено.</div>
        </div>
      );
    }

    return (
      <div className={classes.dropdown}>
        {modalList.map((modalItem, index) => (
          <div
            key={index}
            className={classes.search_card}
            id={modalItem.id.replace(/[^.\d]/g, '')}
            onClick={(e) => handleClickList(e.currentTarget.id)}
          >
            Событие: {modalItem.event}
            <br />
            Дата:{' '}
            {modalItem.date.length > 10
              ? modalItem.date.split(',')[1]
              : modalItem.date}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={classes.header}>
      <div className={classes.input}>
        <label>
          <Lupa />
          <input
            placeholder="Поиск заметок по событию"
            name="search"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </label>

        {renderModalList()}
      </div>
      <div className={classes.wrapper_icon}>
        {/* <div className={classes.task}>
          Актуальные события на {currentDate}:{' '}
          {posts.map((i) =>
            i.id === currentDate ? i.event || 'Событий нет' : null
          )}
        </div> */}
        <User />
        <Exit onClick={handleExitClick} />
      </div>
    </div>
  );
};

export default HeaderNavbar;
