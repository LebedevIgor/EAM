import React from 'react';
import { Outlet } from 'react-router';

import '../../style/main.scss';

import SideNavbar from '../SideNavbar/SideNavbar';
import HeaderNavbar from '../HeaderNavbar/HeaderNavbar';

const Layout = ({ posts, compareTarget }) => {
  return (
    <>
      <SideNavbar />
      <div className="content">
        <HeaderNavbar posts={posts} compareTarget={compareTarget} />
        <div className="container">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
