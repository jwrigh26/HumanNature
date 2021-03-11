import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import Page from './Page';
import Post from 'modules/Posts/Post'

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path={'/post/:article'}>
          <Post />
        </Route>
        <Route path={'/:tab/:drawer'}>
          <Page />
        </Route>
        <Route path="/:tab">
          <Page />
        </Route>
        <Route path="/">
          <Redirect to="/home" />
        </Route>
      </Switch>
    </React.Fragment>
  );
}
export default App;
