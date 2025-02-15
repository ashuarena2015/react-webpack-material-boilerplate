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

import * as React from 'react';
import { Outlet } from 'react-router';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';

export default function Layout() {
  return (
    <DashboardLayout>
      <PageContainer breadcrumbs={''}>
      <Outlet />
      </PageContainer>
    </DashboardLayout>
  );
}
