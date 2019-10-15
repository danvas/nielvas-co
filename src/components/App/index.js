import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { 
  About,
  Contact,
  InfoFooter } from '../About';
import LandingPage, { Home } from '../Landing';
import Works from '../Works';
import * as ROUTES from '../../constants/routes';
import MenuBar from './MenuBar';

const Page404 = ({ location }) => (
  <div>
     <h2>No match found for <code>{location.pathname}</code></h2>
  </div>
);

function App(props) {
  return (
    <div className="">
      <Router>
        <div>
          <header>
            <MenuBar />
          </header>
          <main role="main">
            <Switch>
            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            <Route path={ROUTES.HOME} component={LandingPage} />
            <Route path={ROUTES.WORKS} component={Works} />
            <Route path={ROUTES.ABOUT} component={About} />
            <Route path={ROUTES.CONTACT} component={Contact} />
            <Route component={Page404} />
            </Switch>
          </main>
          <InfoFooter />
        </div>
      </Router>
    </div>
  );
}

export default App;