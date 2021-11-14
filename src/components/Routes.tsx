import { Redirect, Route, Switch } from 'react-router-dom';
import { Explore } from 'src/pages/explore/explore';
import { FeedContainer } from 'src/pages/feed/feed.container';
import { LoginContainer } from 'src/pages/login/login.container';
import { NotFound } from 'src/pages/not-found/index';
import { ProfileContainer } from 'src/pages/profile/profile.container';
import { RegistrationContainer } from 'src/pages/registration/registration.container';
import { SearchContainer } from 'src/pages/search/search.container';

const LoggedInRoutes = () => (
  <Switch>
    <Route exact path="/" component={FeedContainer} />
    <Route exact path="/explore" component={Explore} />
    <Route exact path="/search" component={SearchContainer} />
    <Route exact path="/user/:username" component={ProfileContainer} />
    <Route path="*" component={NotFound} />
  </Switch>
);

const LoggedOutRoutes = () => (
  <Switch>
    <Route exact path="/registration" component={RegistrationContainer} />
    <Route exact path="/login" component={LoginContainer} />
    <Redirect from="*" to="/login" />
  </Switch>
);

const AppRouter = ({ isLoggedIn }) => {
  return isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />;
};

export default AppRouter;
