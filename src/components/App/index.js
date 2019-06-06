import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { 
  About,
  Contact,
  InfoFooter } from '../About';
import LandingPage, { Home } from '../Landing';
import Works from '../Works';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap'
import * as ROUTES from '../../constants/routes';

function App(props) {
  return (
    <div>
      <Router>
        <div>
          <header>
          <Navbar bg="" expand="sm">
            <LinkContainer to={ROUTES.LANDING}><Navbar.Brand className="mb-0 h1">Daniel Vasquez</Navbar.Brand></LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <LinkContainer to={ROUTES.WORKS}><Nav.Link>Work</Nav.Link></LinkContainer>
                <LinkContainer to={ROUTES.ABOUT}><Nav.Link>About</Nav.Link></LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
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