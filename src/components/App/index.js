import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { About } from '../About';
import LandingPage, { Home } from '../Landing';
import * as ROUTES from '../../constants/routes';

function App(props) {
  return (
    <div>
      <Router>
        <div>
          <header>
          <h4>[ Header goes here ]</h4>
          </header>
          <main role="main">
            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            <Route path={ROUTES.HOME} component={Home} />
            <Route path={ROUTES.ABOUT} component={About} />
          </main>
          <footer>
            <h4>[ Footer goes here ]</h4>
          </footer>
        </div>
      </Router>
    </div>
  );
}

export default App;