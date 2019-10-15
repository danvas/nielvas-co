import React from "react";
import { Button } from "react-bootstrap"


function About(props) {
  return (
    <div className="p-5">
      <br></br>
      <h1>I design & develop software for automating workflows in 3D content creation and integrate them with cloud services.</h1>
      <br></br>
      <p>In the past 5 years, I created software tools for the visual effects pipeline in feature films, such as <a className="text-primary" target="_blank" href="https://www.imdb.com/name/nm9678054/">Black Panther</a> and Aquaman.</p>
      <p>As a web developer I created <a target="_blank" href="https://lyddy.stream/nielvas">Lyddy</a> — a sound-sharing social networking web application which allows users to post third-party audio sources to their stream, follow other user streams, and organize posts by hashtags.</p>
      <p>Currently I'm a Software Engineer at <a target="_blank" href="https://www.fnx.tech">FNX Technologies</a>, helping to integrate 3D visualization for the product lifecycle in the Fashion and Apparel supply chain.</p>
      <div className="text-center my-5">
        <Button className="rounded-pill mx-auto" size="lg" variant="outline-light"><a class="text-light text-decoration-none" target="_blank" href="mailto:d@nielvas.co?&amp;subject=Hello%20👋">Say Hello</a></Button>
      </div>
    </div>
    
  );
}

export default About;