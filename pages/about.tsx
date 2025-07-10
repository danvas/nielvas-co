import React from "react"
import Link from 'next/link'

function About() {
  return (
    <div className="container gradient pt-5 px-4">
      <div className="fs-3 fw-normal pb-4">
        I enjoy building automated workflows and applications that facilitate the creative process at organizations that are making an impact in immersive and interactive experiences, visual storytelling, or tools for scientific discovery.
      </div>
      <div className="row pb-4">
        <hr className="w-25 mx-auto" />
      </div>
      <div className="fw-light fs-5">
        <p>
          I'm currently developing 3D applications as an independent contractor. Previously, I was a Technical Artist II at <a className="text-primary" target="_blank" href="https://www.ea.com/ea-studios/ea-sports">Electronic Arts</a> working on artist tools in Frostbite Engine and optimizing content creation pipelines. I was also a software engineer at the startup <em>FNX Technologies</em> where I helped build a rendering-as-a-service product for leading fashion & apparel brands.
          We eventually got acquired by <a className="text-primary" target="_blank" href="https://unifi3d.co/">UNIFI3D</a> (<em>Li & Fung, Ltd</em>)
          where I continued to build automated workflows and integrated 3D collaboration solutions in their proprietary digital asset management system.
          In the previous 4+ years, I developed tools for artists and technical directors in the visual effects production pipeline in feature films
          such as <em>Black Panther</em> and <em>Guardians of the Galaxy</em>.
          Check out the <a className="text-primary" target="_blank" href="https://www.imdb.com/name/nm9678054/">films I've work on</a>.
        </p>
        <p>
          My deep appreciation for music led me to create <em>Lyddy</em> — a sound-sharing social networking web app aimed at uniting people through sound, allowing them to explore genres by means of hashtags. Have a listen at <a className="text-primary" target="_blank" href="https://lyddy.stream/nielvas">my stream</a>.
        </p>
        <p>
          Other things I love include visual effects, <a className="text-primary" href="https://vimeo.com/danielvasquez" target="_blank">filmmaking</a>, sailing, hiking, and the ocean. I also had fun teaching science & math at a <a className="text-primary" href="https://www.eibparis.com/en" target="_blank">high school</a> in Paris, France.
          Take a look at <Link className="text-primary" href="/resume">my resume </Link> for more things that I've done.
        </p>
        <p>I live and work in Vancouver, Canada &#8212; the unceded territories of the <a className="text-primary" target="_blank" href="https://www.musqueam.bc.ca">xʷməθkʷəy̓əm</a>, <a className="text-primary" target="_blank" href="https://www.squamish.net">Sḵwx̱wú7mesh</a> and <a className="text-primary" target="_blank" href="https://twnation.ca">səl̓ílwətaʔɬ</a> Nations.</p>
        <p>
          Want to get in touch? I'm on <a className="text-primary" href="https://www.linkedin.com/in/danvas" target="_blank">LinkedIn</a> and <a className="text-primary" href="https://github.com/danvas" target="_blank">GitHub</a>. Feel free to reach out!
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

