import {
  LinkedInIcon,
  GitHubIcon,
  FileEarmarkTextFillIcon,
  IMDbIcon,
  EnvelopeIcon,
} from "./Icons"

function Footer() {
  return (
    <div className="d-print-none p-4">
      <div className="d-flex align-items-center">
        <a className="nv-outlined-link pt-1 me-3" href="https://www.linkedin.com/in/danvas" target="_blank">
          <LinkedInIcon />
          <span className="nv-responsive-label"> LinkedIn</span>
        </a>
        <a className="nv-outlined-link pt-1 me-3" href="https://github.com/danvas" target="_blank">
          <GitHubIcon />
          <span className="nv-responsive-label"> GitHub</span>
        </a>
        <a className="nv-outlined-link pt-1 me-3" href="https://www.imdb.com/name/nm9678054/" target="_blank">
          <IMDbIcon />
          <span className="nv-responsive-label"> IMDb</span>
        </a>
        <a className="nv-outlined-link" href="/Daniel-Vasquez-Resume.pdf" target="_blank">
          <FileEarmarkTextFillIcon />
          <span className="nv-responsive-label"> Resume</span>
        </a>
        <div className="ms-auto text-end">
          <a className="nv-outlined-link fw-light w-100" target="_blank" href="mailto:d@nielvas.co"><EnvelopeIcon /> d@nielvas.co</a>
          <div className="small text-muted pe-1">Vancouver, Canada</div>
        </div>
      </div>
      <div className="small align-self-end text-center opacity-25 d-print-none">
        © 2019 - {new Date().getFullYear()} Daniel Vasquez. All Rights Reserved.
      </div>
    </div>
  )
}

export default Footer