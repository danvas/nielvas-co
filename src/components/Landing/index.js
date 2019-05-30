import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

function Home(props) {
  return (
    <h1>Home</h1>
  );
}

function LandingPage(props) {
  return (
    <div>
      <h1>LandingPage</h1>
      <div>
        <Link to={ROUTES.ABOUT}>About</Link>
      </div>
    </div>
  );
}

export default LandingPage;

export { 
  Home 
};
