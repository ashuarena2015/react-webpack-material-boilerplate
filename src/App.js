/*
  You can use this part, if you don't want to use the Toolpad or Material UI components.
  ----------------------------------------------------------------------------------------

  import React from "react";
  import * as styles from "./styles.module.less";
  import { BrowserRouter } from "react-router-dom";
  import MainRoutes from "./Routes";

  const App = () => {
    return (
      <>
      <div className={styles.container}>
        <BrowserRouter>
          <MainRoutes />
        </BrowserRouter>
      </div>
      </>
    );
  };

  export default App;

*/

import * as React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import List from '@mui/icons-material/List';
import Group from '@mui/icons-material/Group';
import { Outlet } from 'react-router';
import { ReactRouterAppProvider } from '@toolpad/core/react-router';

const NAVIGATION = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: '',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'todolist',
    title: 'Todo List',
    icon: <List />,
  },
  {
    segment: 'users',
    title: 'Users',
    icon: <Group />,
  },
];

const BRANDING = {
  title: 'React-Webpack-Material Boilerplate',
};

export default function App() {
  return (
    <ReactRouterAppProvider navigation={NAVIGATION} branding={BRANDING}>
      <Outlet />
    </ReactRouterAppProvider>
  );
}
