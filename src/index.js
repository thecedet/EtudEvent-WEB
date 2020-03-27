import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import "./index.css"

import Login from './screens/auth/login';
import Register from './screens/auth/register';
import Annonce from "./screens/annonce/"

render(
  <Router>
    <div>
      <Route exact path="/" component={Annonce} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
    </div>
  </Router>,
  document.getElementById('root')
);
