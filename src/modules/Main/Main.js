import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import Page from './Page';

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path={'/:tab/:drawer'}>
          <Page />
        </Route>
        <Route path="/:tab">
          <Page />
        </Route>
        <Route path="/">
          <Redirect to="/dashboard" />
        </Route>
      </Switch>
    </React.Fragment>
  );
}
export default App;
