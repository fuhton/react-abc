import React from 'react';
import { Link, Route, Switch } from 'react-router-dom'; // eslint-disable-line

import Home from './Home';
import Midi from './Midi';
import Notation from './Notation';

export default () => (
  <div>
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/notation">Notation</Link></li>
          <li><Link to="/midi">Midi</Link></li>
        </ul>
      </nav>
    </header>
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/notation" component={Notation} />
        <Route path="/midi" component={Midi} />
      </Switch>
    </main>
  </div>
);
