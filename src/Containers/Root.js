import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';

import Home from './Home';
import OIPage from './OIPage';
import Change from './Change';
const Root = () => {
  return (
    <div>
      <Router basename="/">
        <Route exact path="/">
          <Change />
        </Route>
        <Route exact path="/OI" component={OIPage} />
        <Route exact path="/Home" component={Home} />
      </Router>
    </div>
  );
};

export default Root;
