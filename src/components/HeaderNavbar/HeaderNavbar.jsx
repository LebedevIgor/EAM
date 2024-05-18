import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import Exit from '../../resources/image/icon/Exit';
import Lupa from '../../resources/image/icon/Lupa';
import classes from './HeaderNavbar.module.scss';
import User from '../../resources/image/icon/User';

const HeaderNavbar = ({ task, handleRowClick }) => {
  const [modalList, setModalList] = useState(task);
  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();

  const filterModal = (searchText, listOfModal) => {
    if (!searchText || !Array.isArray(listOfModal)) {
      return listOfModal;
    }

    return listOfModal.filter((i) =>
      i.task_name.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  useEffect(() => {
    const filteredModal = filterModal(searchTerm, task);
    setModalList(filteredModal);
  }, [searchTerm, task]);

  const handleExitClick = () => {
    localStorage.clear();
    navigate('/login');
  };

  const handleClickList = (taskId) => {
    navigate(`/`);
    setSearchTerm('');
    handleRowClick({ id: taskId });
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
        {modalList.map(({ id, task_name, begin_date, end_date }, index) => (
          <div
            key={index}
            className={classes.search_card}
            onClick={() => handleClickList(id)}
          >
            <div>
              <strong>Задача:</strong> {task_name}
            </div>
            <div>
              <strong>Дата начала:</strong> {begin_date}
            </div>
            <div>
              <strong>Дата завершения:</strong> {end_date}
            </div>
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
            placeholder="Поиск задач по названию"
            name="search"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </label>

        {renderModalList()}
      </div>
      <div className={classes.wrapper_icon}>
        <User />
        <Exit onClick={handleExitClick} />
      </div>
    </div>
  );
};

export default HeaderNavbar;
