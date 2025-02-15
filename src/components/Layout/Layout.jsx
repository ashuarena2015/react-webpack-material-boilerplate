/*
  You can use this part, if you don't want to use the Toolpad or Material UI components.
  ----------------------------------------------------------------------------------------

  import React from 'react';
  import { Outlet, Link } from "react-router-dom";

  const Layout = () => {

      return (
          <>
          <nav>
              <ul>
              <li>
                  <Link to="/">Todo</Link>
              </li>
              <li>
                  <Link to="/users">Users</Link>
              </li>
              </ul>
          </nav>
          <Outlet />
          </>
      )

  }

  export default Layout;

*/

import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import Snackbar from './Snackbar';
import { useSelector } from 'react-redux';

export default function Layout() {

  const snackbarInfo = useSelector(state => state.globalReducer);
  const [showSnackbar, setShowSnackbar] = useState(false);
  
  useEffect(() => {
    setShowSnackbar(snackbarInfo?.message !== '');
  }, [snackbarInfo]);

  return (
    <DashboardLayout>
      <Snackbar show={showSnackbar} setShowSnackbar={setShowSnackbar} snackbarInfo={snackbarInfo}/>
      <PageContainer breadcrumbs={''}>
        <Outlet />
      </PageContainer>
    </DashboardLayout>
  );
}
