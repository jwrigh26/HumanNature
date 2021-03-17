import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import Page from './Page';
import Post from 'modules/Post/Post';
import TopAppBar from 'components/TopAppBar';
import Home from 'modules/Home/Home';

function App() {
  return (
    <React.Fragment>
      <TopAppBar />
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
        <Route exact path="/">
          <Home />
        </Route>
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </React.Fragment>
  );
}
export default App;
