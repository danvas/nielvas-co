import React from "react"
import Link from 'next/link'

function About() {
  return (
    <div className="container pt-5 px-4">
      <div className="fs-3 fw-normal pb-4">
        I design and build workflow tools and pipelines for 3D artists and designers in visual effects, animation, and fashion & apparel.
      </div>
      <div className="row pb-2">
        <hr className="w-25 mx-auto" />
      </div>
      <div className="fw-light fs-5">
        <p>
          I'm a software developer specializing in 3D workflows, building tools and plugins for digital content creation.
        </p>
        <p>
          In the past 3+ years at the startup <em>FNX Technologies</em>, I helped build a cloud-based 3D render pipeline for the product lifecycle in the fashion & apparel supply chain. We eventually got acquired by <a className="text-decoration-none" target="_blank" href="https://unifi3d.co/">UNIFI3D</a> (<em>Li & Fung, Ltd</em>) where I continued to work.
        </p>
        <p>
          For 5 years I created workflow tools for artists in the visual effects pipeline in feature films such as <a className="text-decoration-none" target="_blank" href="https://www.imdb.com/name/nm9678054/">Black Panther</a> and <a className="text-decoration-none" target="_blank" href="https://www.imdb.com/name/nm9678054/">Aquaman</a>.
        </p>
        <p>
          My deep appreciation for music led me to create <em>Lyddy</em> — a sound-sharing social networking web app aimed at uniting people through sound, allowing them to explore genres by means of hashtags. Have a listen at <a className="text-decoration-none" target="_blank" href="https://lyddy.stream/nielvas">my stream</a>.
        </p>
        <p>
          Other things I love include visual effects, filmmaking, sailing, hiking, and the ocean. I also had fun teaching science & math at a <a className="text-decoration-none" href="https://www.eibparis.com/en" target="_blank">high school</a> in Paris, France.
          Take a look at <Link className="text-decoration-none" href="/resume">my resume </Link> for more info.
        </p>
        <p>I live and work in Vancouver, Canada &#8212; the unceded territories of the <a className="text-decoration-none" target="_blank" href="https://www.musqueam.bc.ca">xʷməθkʷəy̓əm</a>, <a className="text-decoration-none" target="_blank" href="https://www.squamish.net">Sḵwx̱wú7mesh</a> and <a className="text-decoration-none" target="_blank" href="https://twnation.ca">səl̓ílwətaʔɬ</a> Nations.</p>
        <p>
          Want to get in touch? I'm on <a className="text-decoration-none" href="https://www.linkedin.com/in/danvas" target="_blank">LinkedIn</a> and <a className="text-decoration-none" href="https://github.com/danvas" target="_blank">GitHub</a>. Feel free to reach out!
        </p>
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

