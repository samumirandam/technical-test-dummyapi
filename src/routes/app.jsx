import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from '@containers/layout';

import Home from '@pages/home';
import NotFound from '@pages/not-found';
import Login from '@pages/login';
import Logout from '@pages/logout';

import AuthRoute from './auth-route';

import '@styles/global.css';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="tag/:tag" element={<Home />}>
            <Route path="page/:page" element={<Home />} />
          </Route>
          <Route path="page/:page" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route
          path="/logout"
          element={(
            <AuthRoute>
              <Logout />
            </AuthRoute>
          )}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default App;
