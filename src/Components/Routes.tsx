import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { LoginContainer } from '../Containers/Login';
import { RegistrationContainer } from '../Containers/Registration/index';
import Explore from '../Routes/Explore';
import { Feed } from '../Routes/Feed';
import Profile from '../Routes/Profile';
import Search from '../Routes/Search';

const LoggedInRoutes = () => (
  <Switch>
    <Route exact path='/' component={Feed} />
    <Route exact path='/explore' component={Explore} />
    <Route exact path='/search' component={Search} />
    <Route exact path='/:username/' component={Profile} />
    <Redirect from='*' to='/' />
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
