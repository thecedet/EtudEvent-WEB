import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import "./index.css"

import Login from './screens/auth/login';
import Register from './screens/auth/register';
import AnnonceMain from "./screens/annonce/"
import Annonce from "./screens/annonce/annonce"

render(
  <Router>
    <div>
      <Route exact path="/" component={AnnonceMain} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/annonce/:uid" component={Annonce} />
    </div>
  </Router>,
  document.getElementById('root')
);
