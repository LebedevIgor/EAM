import React from 'react';
import { Outlet } from 'react-router';

import SideNavbar from '../SideNavbar/SideNavbar';
import HeaderNavbar from '../HeaderNavbar/HeaderNavbar';

const Layout = ({ posts, compareTarget }) => {
  return (
    <>
      <SideNavbar />
      <div style={{ width: '100%' }}>
        <HeaderNavbar posts={posts} compareTarget={compareTarget} />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
