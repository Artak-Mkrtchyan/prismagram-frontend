import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Auth from '../Routes/Auth';
import Explore from '../Routes/Explore';
import { Feed } from '../Routes/Feed';
import Profile from '../Routes/Profile';
import Search from '../Routes/Search';

const LoggedInRoutes = () => (
  <Switch>
    <Route exact path='/' component={Feed} />
    <Route path='/explore' component={Explore} />
    <Route path='/search' component={Search} />
    <Route path='/:username' component={Profile} />
    <Redirect from='*' to='/' />
  </Switch>
);

const LoggedOutRoutes = () => (
  <Switch>
    <Route exact path='/' component={Auth} />
  </Switch>
);

const AppRouter = ({ isLoggedIn }) =>
  isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />;


export default AppRouter;
