import React from 'react';
import * as ROUTES from '../../constants/routes';
import { LinkContainer } from 'react-router-bootstrap';
import Button from 'react-bootstrap/Button';
function Home(props) {
  return (
    <h1>Home</h1>
  );
}

function LandingPage(props) {
  return (
    <div className="container mt-5">
      {/* <h1>Giving you more creative agency in digital workflows.</h1> */}
      {/* <h1>Toolmaking for Creatives, Artists, and Innovators.</h1> */}
        
      <div className="display-4">Software tools for Creatives, Artists, and Innovators.</div>
      <div className="align-middle d-flex my-5">
      {/* <button type="button" className="btn mx-auto rounded-pill btn-outline-primary btn-lg">See Projects</button> */}
      <LinkContainer to={ROUTES.WORKS}><Button className="rounded-pill mx-auto" size="lg" variant="outline-primary">See More</Button></LinkContainer>
      </div>
      {/* <div className="col-xs-12" style={{height:"5rem"}}></div> */}
    </div>
  );
}

export default LandingPage;

export { 
  Home 
};
