import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import GridATest from './GridATest.js';
import GridBTest from './GridBTest.js';
import GridCTest from './GridCTest.js';
import Home from './Home.js';
import Header from './Header.js';
import Footer from './Footer.js';
import BlogDetail from './BlogDetail.js';
import BlogLanding from './BlogLanding.js';
import ScrollToTop from './ScrollToTop.js';

export default function CambriaGrove() {

  return(
    <div>
      <Header />
      <Router>
        <ScrollToTop>
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
            <Route path="/gridC">
              <GridCTest />
            </Route>

            <Route path="/blog/:id" component={BlogDetail} />
            <Route path="/blog" component={BlogLanding} />

          </Switch>
        </ScrollToTop>
      </Router>
      <Footer />
    </div>
  );
}
