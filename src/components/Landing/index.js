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
    <div className="container d-flex flex-column">
      <div className="col-xs-12" style={{height:"6rem"}}></div>
      <div className="display-4 px-2"><span className="bg-black text-white">Software toolmaker</span> for Creatives, Artists, and Innovators.</div>
      <div className="align-middle mx-auto my-5">
        <LinkContainer to={ROUTES.WORKS}><Button className="rounded-pill mx-auto" size="lg" variant="outline-primary">See More</Button></LinkContainer>
      </div>
      <div className="col-xs-12" style={{height:"6rem"}}></div>
    </div>
  );
}

export default LandingPage;

export { 
  Home 
};
