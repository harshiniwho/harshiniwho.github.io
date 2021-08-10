import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import { HashLink, NavHashLink } from 'react-router-hash-link';

import Contact from './app/Contact';
import Component from './app/Component';
import Feminism from './app/Feminism';
import Jumbotron from './app/Jumbotron';
import Resume from './app/Resume/Resume';
import Writing from './app/Writing';

var hist = createBrowserHistory();

function App() {
  
  return (
    <React.StrictMode>
      <Router history={hist}>
        <Switch>
          <Route path="/" component={() => <Component component={<Jumbotron />} />} />
        </Switch>
      </Router>
    </React.StrictMode>
  );
}

export default App;
