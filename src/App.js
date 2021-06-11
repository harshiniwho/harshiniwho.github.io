import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import Contact from './app/Contact';
import Component from './app/Component';
import Feminism from './app/Feminism';
import Jumbotron from './app/Jumbotron';
import Resume from './app/Resume';
import Writing from './app/Writing';

var hist = createBrowserHistory();

function App() {
  
  return (
    <React.StrictMode>
      <Router history={hist}>
        <Switch>
          <Route path="/resume" component={() => <Component component={<Resume />} />} />
          <Route path="/writing" component={() => <Component component={<Writing />} />} />
          <Route path="/feminism" component={() => <Component component={<Feminism />} />} />
          <Route path="/contact" component={() => <Component component={<Contact />} />} />
          <Route path="/" component={() => <Component component={<Jumbotron />} />} />
        </Switch>
      </Router>
    </React.StrictMode>
  );
}

export default App;
