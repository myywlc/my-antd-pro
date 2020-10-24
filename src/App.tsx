import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
// import Login from '../pages/login';
import BasicLayout from './layouts/BasicLayout';
import TestPage from './pages/TestPage';
import NoPath from './pages/404';

function App () {
  return (
    <HashRouter>
      <div>
        {/*<Route path='/login' component={Login} />*/}
        <Route path='/admin' render={
          () => (
            <BasicLayout>
              <Switch>
                <Route path='/admin/ui/home' component={TestPage} />
                <Route component={NoPath} />
              </Switch>
            </BasicLayout>
          )
        } />
      </div>
    </HashRouter>
  );
}

export default App;
