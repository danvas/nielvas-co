import React from "react"
import Link from 'next/link'

function About() {
  return (
    <div className="container-sm p-5">
      <div className="fs-2 fw-lighter pb-5">
        I build workflow tools and pipelines for 3D artists and designers in visual effects, animation, and fashion & apparel.
      </div>
      <div className="row">
        <hr className="pb-4 w-75 mx-auto" />
      </div>
      <div>
        <p>
          In the past 3+ years at <a className="text-decoration-none" target="_blank" href="https://unifi3d.co/">UNIFI3D</a>, I helped integrate a cloud-based 3D render pipeline for the product lifecycle in the fashion & apparel supply chain.
        </p>
        <p>
          For 5 years I created software tools for artists in the visual effects pipeline in feature films such as <a className="text-decoration-none" target="_blank" href="https://www.imdb.com/name/nm9678054/">Black Panther</a> and <a className="text-decoration-none" target="_blank" href="https://www.imdb.com/name/nm9678054/">Aquaman</a>.
        </p>
        <p>
          I also created <a className="text-decoration-none" target="_blank" href="https://lyddy.stream/nielvas">Lyddy</a> —
          a sound-sharing social networking web application which allows users to post third-party audio sources
          to their stream, follow other user streams, and organize posts by hashtags.
        </p>
        <p>I currently live and work in Vancouver, Canada &#8212; the unceded territories of the <a className="text-decoration-none" target="_blank" href="https://www.musqueam.bc.ca">xʷməθkʷəy̓əm</a>, <a className="text-decoration-none" target="_blank" href="https://www.squamish.net">Sḵwx̱wú7mesh</a> and <a className="text-decoration-none" target="_blank" href="https://twnation.ca">səl̓ílwətaʔɬ</a> Nations.</p>
        {/* <p>Feel free to look at my <Link className="text-decoration-none" href="/resume">resume</Link>.</p> */}
      </div>
      <div className="py-4"></div>
      <div className="text-center my-5">
        <div className="align-middle mx-auto my-5">
          <a
            className="btn btn-outline-light btn-lg rounded-pill"
            target="_blank"
            href="mailto:d@nielvas.co?&amp;subject=Hello%20👋"
          >
            Say Hello
          </a>
        </div>
      </div>
    </div>
  )
}

export default About

