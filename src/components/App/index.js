import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { 
  About,
  Contact,
  InfoFooter } from '../About';
import LandingPage, { Home } from '../Landing';
import Works from '../Works';
import * as ROUTES from '../../constants/routes';
import MenuBar from './MenuBar';

function App(props) {
  return (
    <div className="">
      <Router>
        <div>
          <header>
            <MenuBar />
          </header>
          <main role="main">
            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            <Route path={ROUTES.HOME} component={LandingPage} />
            <Route path={ROUTES.WORKS} component={Works} />
            <Route path={ROUTES.ABOUT} component={About} />
            <Route path={ROUTES.CONTACT} component={Contact} />
          </main>
          <InfoFooter />
        </div>
      </Router>
    </div>
  );
}

export default App;