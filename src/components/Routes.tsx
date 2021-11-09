import React from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import Explore from 'src/containers/Explore/Explore';
import { Feed } from 'src/containers/Feed/Feed';
import { LoginContainer } from 'src/containers/Login';
import { NotFound } from 'src/containers/NotFound/index';
import { ProfileContainer } from 'src/containers/Profile';
import { RegistrationContainer } from 'src/containers/Registration/index';
import { SearchContainer } from 'src/containers/Search';

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
