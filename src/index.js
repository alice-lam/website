import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import Home from './views/Home';
import Resume from './views/Resume';

ReactDOM.render(
    <Router>
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/resume" component={Resume} />
      </Switch>
    </Router>, 
    document.getElementById('root')
);
registerServiceWorker();