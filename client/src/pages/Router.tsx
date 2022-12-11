import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import Path from './paths';

const lazy = (path: string) =>
  React.lazy(
    () =>
      import('.' + path /* webpackChunkName: "home", webpackPreload: true */),
  );

const Home = lazy('/home');
const Profile = lazy('/profile');
const Callback = lazy('/callback');
const NotFound = lazy('/not-found');

const Router = () => (
  <Suspense fallback={null}>
    <Switch>
      <Route exact path={Path.Root}>
        <Home />
      </Route>
      <Route exact path={Path.Profile}>
        <Profile />
      </Route>
      <Route exact path={Path.Callback}>
        <Callback />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  </Suspense>
);

export default Router;
