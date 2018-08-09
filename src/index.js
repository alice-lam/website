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
import Home from './views/Home';
import Resume from './views/Resume';
import Projects from './views/Projects';
import Contact from './views/Contact';

ReactDOM.render(
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/resume" component={Resume} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>, 
    document.getElementById('root')
);
registerServiceWorker();