import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { About, Contact } from '../About';
import LandingPage, { Home } from '../Landing';
import * as ROUTES from '../../constants/routes';

function App(props) {
  return (
    <div>
      <Router>
        <div>
          <header>
            <div>
              <ul>
                <li>
                  <Link to={ROUTES.WORKS}>Works</Link>
                </li>
                <li>
                  <Link to={ROUTES.IDEAS}>Ideas</Link>
                </li>
                <li>
                  <Link to={ROUTES.ABOUT}>About</Link>
                </li>
                {/* <li>
                  <Link to={ROUTES.CONTACT}>Contact</Link>
                </li> */}
              </ul>
            </div>
          </header>
          <main role="main">
            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            <Route path={ROUTES.HOME} component={Home} />
            <Route path={ROUTES.ABOUT} component={About} />
            <Route path={ROUTES.CONTACT} component={Contact} />
          </main>
          <footer>
            <p>
              <a href="mailto:d@nielvas.co?&amp;subject=Hello%20👋&amp;body=Hello Daniel,%0A">Say hello</a>
            </p>
          </footer>
        </div>
      </Router>
    </div>
  );
}

export default App;