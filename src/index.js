/* eslint-disable max-len */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { initializeStore } from 'store/store';
import config from 'helpers/config';
import App from 'modules/Main/Main';
import Firebase, { FirebaseContext } from 'components/Firebase';
import rootReducer from './store/reducers';

const store = initializeStore(rootReducer);

render(
  <Provider store={store}>
    <Router basename={config.publicPath}>
      <FirebaseContext.Provider value={new Firebase()}>
        <App />
      </FirebaseContext.Provider>
    </Router>
  </Provider>,
  document.getElementById('aberdeen-root')
);
