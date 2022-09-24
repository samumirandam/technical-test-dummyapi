/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';

import store from './store';
import App from './routes/app';

const rootElement = document.getElementById('app');
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
