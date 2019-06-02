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
      {/* <h1>Software Developer giving digital artists a hand in tech and getting them back to creating.</h1> */}
      {/* <h1>Vancouver-based Software Engineer giving back creators their creative authority in digital workflows.</h1> */}
      <h1>Vancouver-based Software Engineer giving creators more creative agency in their digital workflows.</h1>
      {/* <h1>Giving you more creative agency in digital workflows.</h1> */}
      {/* <h3>By automating processes in 3D modeling, animation, rendering,  dynamic simulations, and publishing instead of executing and managing them manually, I can help you achieve increased operational efficiency, agility and visibility.</h3> */}
    </div>
  );
}

export default LandingPage;

export { 
  Home 
};
