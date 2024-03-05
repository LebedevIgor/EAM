import React from 'react';
import { Outlet } from 'react-router';

import SideNavbar from '../SideNavbar/SideNavbar';
import HeaderNavbar from '../HeaderNavbar/HeaderNavbar';

const Layout = () => {
  return (
    <>
      <SideNavbar />
      <div style={{ width: '100%' }}>
        <HeaderNavbar />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
