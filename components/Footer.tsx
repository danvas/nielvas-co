
function Footer() {
  return (
    <div className="d-print-none p-4 w-100">
      <div className="d-flex align-items-center">
        <a className="fs-6 nv-outlined-link fw-light me-4" target="_blank" href="https://www.linkedin.com/in/danvas">LinkedIn</a>
        <a className="fs-6 nv-outlined-link fw-light me-4" target="_blank" href="https://github.com/danvas">Github</a>
        <a className="fs-6 nv-outlined-link fw-light me-4" target="_blank" href="https://www.imdb.com/name/nm9678054">IMDb</a>
        <div className="ms-auto text-end">
          <a className="nv-outlined-link fw-light" target="_blank" href="mailto:d@nielvas.co">d@nielvas.co</a>

          <div className="small text-muted">Vancouver, Canada</div>
        </div>
      </div>
      <div className="small align-self-end text-center text-black-50 opacity-50 d-print-none">
        © 2019 - {new Date().getFullYear()} Daniel Vasquez. All Rights Reserved.
      </div>
    </div>
  )
}

export default Footer