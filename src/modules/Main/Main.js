import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router';
import { appSelector } from 'store/appSlice';
import Page from './Page';
import Post from 'modules/Post/Post';
import TopAppBar from 'components/TopAppBar/TopAppBar';
import Dashboard from 'modules/Dashboard/Dashboard';
import News from 'modules/News/News';
import ProductReviews from 'modules/ProductReviews/ProductReviews';
import PatientProfiles from 'modules/PatientProfiles/PatientProfiles';
import Pharmacies from 'modules/Pharmacies/Pharmacies';
import GSLifeStyle from 'modules/GSLifeStyle/GSLifeStyle';
import GsBusiness from 'modules/GSBusiness/GSBusiness';

function App() {
  const { navigation } = useSelector(appSelector);
  const { routes } = navigation ?? {};

  // Webstorm doesn't play nicely with
  // navigation originates from a JSON file
  // because the values come from json:
  // noinspection JSUnresolvedVariable
  return (
    <React.Fragment>
      <TopAppBar />
      <Switch>
        <Route path={routes?.news?.route}>
          <News meta={routes?.news} />
        </Route>
        <Route path={routes?.productReviews?.route}>
          <ProductReviews meta={routes?.productReviews} />
        </Route>
        <Route path={routes?.patientProfiles?.route}>
          <PatientProfiles meta={routes?.patientProfiles} />
        </Route>
        <Route path={routes?.pharmacies?.route}>
          <Pharmacies meta={routes?.pharmacies} />
        </Route>
        <Route path={routes?.gsLifeStyle?.route}>
          <GSLifeStyle meta={routes?.gsLifeStyle} />
        </Route>
        <Route path={routes?.gsBusiness?.route}>
          <GsBusiness meta={routes?.gsBusiness} />
        </Route>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </React.Fragment>
  );
}
export default App;
