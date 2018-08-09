// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './App';
import About from './views/About';

ReactDOM.render(
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>, 
    document.getElementById('root')
);
registerServiceWorker();