import React from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';

import Explore from '../containers/Explore/Explore';
import { Feed } from '../containers/Feed/Feed';
import { LoginContainer } from '../containers/Login';
import { NotFound } from '../containers/NotFound/index';
import { ProfileContainer } from '../containers/Profile';
import { RegistrationContainer } from '../containers/Registration/index';
import { SearchContainer } from '../containers/Search';

const LoggedInRoutes = () => (
  <Switch>
    <Route exact path='/' component={Feed} />
    <Route exact path='/explore' component={Explore} />
    <Route exact path='/search' component={SearchContainer} />
    <Route exact path='/user/:username' component={ProfileContainer} />
    <Route path="*" component={NotFound} />
  </Switch>
);

const LoggedOutRoutes = () => (
  <Switch>
    <Route exact path='/registration' component={RegistrationContainer} />
    <Route exact path='/login' component={LoginContainer} />
    <Redirect from='*' to='/login' />
  </Switch>
);

const AppRouter = ({ isLoggedIn }) =>{
 return isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />;
}

export default AppRouter;
