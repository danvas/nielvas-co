import React from "react";

function Octicon() {
  return (
    <svg width="30" height="30" className="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" aria-hidden="true">
      <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z">
      </path>
    </svg>
  );
}

function InfoFooter(props) {
  return (
    <footer className="page-footer font-small pt-4 px-2">
      <div className="container-fluid text-center text-md-left">
        <div className="row">
        {/* <div className="col-md-6 mt-md-0 mt-3"> */}
        <div className="col">
          {/* <h5 className="text-uppercase">Daniel Vasquez</h5> */}
          <p>
            <a className="menu-link" target="_blank" href="mailto:d@nielvas.co?&amp;subject=Hello%20👋">d@nielvas.co</a>
            <br/>
            {/* <a href="tel:604-616-6445">☎ 604-616-6445</a>
            <br/> */}
            Vancouver, Canada
          </p>
        </div>

        {/* <div className="col-md-3 mb-md-0 mb-3 bg-danger"> */}
        <div className="col">
          <div className="d-flex justify-content-around">
            <a className="menu-link" target="_blank" href="https://github.com/danvas">Github</a>
            <a className="menu-link" target="_blank" href="https://keybase.io/danvas">Keybase</a>
            <a className="menu-link" target="_blank" href="https://www.linkedin.com/in/danvas">LinkedIn</a>
            <a className="menu-link" target="_blank" href="https://www.imdb.com/name/nm9678054/">IMDb</a>
          </div>
        </div>
        </div>
      </div>
      <div className="footer-copyright font-weight-light text-center text-small text-muted py-3">
        © 2019 Daniel Vasquez. All Rights Reserved.
      </div>
    </footer>
  );
}

export default InfoFooter;