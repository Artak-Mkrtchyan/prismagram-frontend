import React from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';

import Explore from '../Containers/Explore/Explore';
import { Feed } from '../Containers/Feed/Feed';
import { LoginContainer } from '../Containers/Login';
import { NotFound } from '../Containers/NotFound/index';
import { ProfileContainer } from '../Containers/Profile';
import { RegistrationContainer } from '../Containers/Registration/index';
import { SearchContainer } from '../Containers/Search';

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
