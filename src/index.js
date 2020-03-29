import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';

import "./index.css"

import Login from './screens/auth/login';
import Register from './screens/auth/register';
import AnnonceMain from "./screens/annonce/"
import Annonce from "./screens/annonce/annonce"

import NotFound from "./screens/NotFound"

render(
  <Router>
    <Switch>
      <Route exact path="/" component={AnnonceMain} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/annonce/:uid" component={Annonce} />
      <Route component={NotFound}/>
    </Switch>
  </Router>,
  document.getElementById('root')
);
