import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import GridATest from './GridATest.js';
import GridBTest from './GridBTest.js';
import Home from './Home.js';


export default function CambriaGrove() {

  //const [posts] = useState(['posts']);

  return(
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/gridA">
          <GridATest />
        </Route>
        <Route path="/gridB">
          <GridBTest />
        </Route>


      </Switch>
    </Router>
  );
}
