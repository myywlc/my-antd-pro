import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
// import Login from '../pages/login';
import BasicLayout from './layouts/BasicLayout';
import TestPage from './pages/TestPage';
import NoPath from './pages/404';
import Analysis from './pages/Dashboard/Analysis';
import Success from './pages/Result/Success';
import Error from './pages/Result/Error';

const routes = [
  { path: '/', redirect: '/dashboard/analysis' },
  {
    path: '/dashboard',
    name: 'dashboard',
    icon: 'dashboard',
    routes: [
      {
        path: '/dashboard/analysis',
        name: 'analysis',
        component: Analysis,
      },
    ],
  },
  {
    name: 'result',
    icon: 'check-circle-o',
    path: '/result',
    routes: [
      {
        path: '/result/success',
        name: 'success',
        component: Success,
      },
      { path: '/result/fail', name: 'fail', component: Error },
    ],
  },
  {
    component: NoPath,
  },
];

function App() {
  return (
    <HashRouter>
      <div>
        {/*<Route path='/login' component={Login} />*/}
        <Route path='/admin' render={
          (props) => {
            console.log(props, 'props');
            return (
              // @ts-ignore
              <BasicLayout route={routes} location={props.location}>
                <Switch>
                  <Route path='/' component={Analysis} />
                  <Route component={NoPath} />
                </Switch>
              </BasicLayout>
            );
          }
        } />
      </div>
    </HashRouter>
  );
}

export default App;
