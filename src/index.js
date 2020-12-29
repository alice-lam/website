import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import Home from './views/Home';
import Developer from './views/Developer';
import Treatsbyalice from './views/TreatsByAlice';

ReactDOM.render(
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/developer" component={Developer} />
        <Route path="/treatsbyalice" component={Treatsbyalice} />
      </Switch>
    </Router>, 
    document.getElementById('root')
);

registerServiceWorker();