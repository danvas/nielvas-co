import Link from 'next/link'

function LandingPage() {
  return (
    <div className="h-100">
      <div className="container h-100 d-flex flex-column align-items-center justify-content-center w-75">
        <p className="fs-1 fw-light text-dark p-4">
          Hey, I'm Daniel <br /> - a Software Developer helping <span className="fw-light text-light">automate 3D workflows</span> for Creatives, Artists, and Businesses
        </p>
        <div className="p-5" >
          <Link
            className="btn btn-outline-light btn-lg rounded-pill"
            href="/about"
          >
            Learn more
          </Link>
        </div>

      </div>
    </div>
  );
}

export default LandingPage