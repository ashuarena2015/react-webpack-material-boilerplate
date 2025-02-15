/*
  You can use this part, if you don't want to use the Toolpad or Material UI components.
  ----------------------------------------------------------------------------------------
  
  import React from "react";
  import { createRoot } from "react-dom/client";
  import { Provider } from "react-redux";
  import store from "./redux/store";
  import App from "./App";

  const root = createRoot(document.getElementById("root"));
  root.render(<Provider store={store}><App /></Provider>);

*/

import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { Provider } from "react-redux";
import store from "./redux/store";
import App from './App';
import Layout from './components/Layout';
import TodoList from './components/TodoList';
import Dashboard from './components/Dashboard';
import Users from './components/Users';

const router = createBrowserRouter([
  {
    Component: App,
    children: [
      {
        path: '/',
        Component: Layout,
        children: [
          {
            path: '',
            Component: Dashboard,
          },
          {
            path: 'todolist',
            Component: TodoList,
          },
          {
            path: 'users',
            Component: Users,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>,
);
