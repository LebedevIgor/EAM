import React from 'react';
import { Outlet } from 'react-router';

import '../../style/main.scss';

import SideNavbar from '../SideNavbar/SideNavbar';
import HeaderNavbar from '../HeaderNavbar/HeaderNavbar';

const Layout = ({ task, handleRowClick }) => {
  return (
    <>
      <SideNavbar />
      <div className="content">
        <HeaderNavbar task={task} handleRowClick={handleRowClick} />
        <div className="container">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
