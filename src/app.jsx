import React from 'react';
import HashHistory from 'react-router/lib/HashHistory';
import { Router, Route, Link } from 'react-router';
import AppContainer from './components/AppContainer.jsx';
import Activities  from './components/Activities.jsx';
import MyMap from './components/Map.jsx';

React.render((
  <Router history={HashHistory}>
    <Route path="/" component={AppContainer}>
      <Route path="activities" components={{content: Activities}}/>
      <Route path="map" components={{content: MyMap}}/>
    </Route>
  </Router>
), document.getElementById('content'));
