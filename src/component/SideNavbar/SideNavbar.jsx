import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import EducationalActivities from '../../resources/image/icon/EducationalActivities';
import EconomicActivity from '../../resources/image/icon/EconomicActivity';
import Main from '../../resources/image/icon/Main';
import classes from './SideNavbar.module.scss';
import X from '../../resources/image/X.png';
import arrow from '../../resources/image/arrow.png';
import LogoWhite from '../../resources/image/icon/LogoWhite';

const SideNavbar = ({ posts }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const setActive = ({ isActive }) => (isActive ? classes.active_link : '');

  var currentDate = new Date().toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: '2-digit',
    year: 'numeric',
  });
  return (
    <>
      <div className={`${classes.navbar}`}>
        <div className={classes.logo}>
          <LogoWhite />
        </div>
        <div className={classes.links}>
          <NavLink to="/" className={setActive}>
            <Main />
            <span>Календарь</span>
          </NavLink>

          <NavLink to="chat" className={setActive}>
            <EducationalActivities />
            <span>Чат</span>
          </NavLink>
          <NavLink to="about" className={setActive}>
            <EconomicActivity />
            <span>О нас</span>
          </NavLink>
        </div>
      </div>
      {isMenuOpen ? (
        <div className={classes.open}>
          <div className={`${classes.wrapper}`}>
            <div className={classes.logo}>
              <LogoWhite />
            </div>
            <img
              className={isMenuOpen ? classes.menuBtn : classes.hidden}
              onClick={toggleMenu}
              src={X}
              alt="X"
              width={15}
              height={15}
            />
          </div>
          <div className={classes.links}>
            <NavLink to="/" className={setActive} onClick={toggleMenu}>
              <Main />
              <span>Календарь</span>
            </NavLink>
            <NavLink to="chat" className={setActive} onClick={toggleMenu}>
              <EducationalActivities />
              <span>Чат</span>
            </NavLink>
            <NavLink to="about" className={setActive} onClick={toggleMenu}>
              <EconomicActivity />
              <span>О нас</span>
            </NavLink>
          </div>
          {/* <div className={classes.wrapper_icon}>
            <div className={classes.task}>
              Актуальные события на {currentDate}:{' '}
              {posts.map((i) =>
                i.id === currentDate ? i.event || 'Событий нет' : null
              )}
            </div>
          </div> */}
        </div>
      ) : null}
      <img
        className={!isMenuOpen ? classes.menuToggle : classes.hidden}
        onClick={toggleMenu}
        src={arrow}
        alt="arrow"
        width={30}
        height={30}
      />
    </>
  );
};

export default SideNavbar;
