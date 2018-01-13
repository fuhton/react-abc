import React from 'react';
import { Link, Redirect, Route, Switch } from 'react-router-dom'; // eslint-disable-line

import Basic from './Basic';
import Midi from './Midi';

export default () => (
  <div>
    <header>
      <nav>
        <ul>
          <li><Link to="/basic">Basic</Link></li>
          <li><Link to="/midi">Midi</Link></li>
        </ul>
      </nav>
    </header>
    <main>
      <Switch>
        <Route path="/basic" component={Basic} />
        <Route path="/midi" component={Midi} />
        <Redirect to="/basic" />
      </Switch>
    </main>
  </div>
);
