/*
You can use this part, if you don't want to use the Toolpad or Material UI components.
----------------------------------------------------------------------------------------
*/

import React from 'react';
import { Routes, Route } from "react-router-dom";
import TodoList from './components/TodoList';
import Users from './components/Users';
import Layout from './components/Layout';

const MainRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<TodoList />} />
                <Route path="/users" element={<Users />} />
            </Route>
        </Routes>
    )
}

export default MainRoutes;
