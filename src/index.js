/* eslint-disable max-len */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { initializeStore } from './store/store';
import rootReducer from './store/reducers';

const store = initializeStore(rootReducer);

render(
  <Provider store={store}>
    <Router basename={config.publicPath}>
      <RouteManager>
        <App />
      </RouteManager>
    </Router>
  </Provider>,
  document.getElementById('aberdeen-root')
);