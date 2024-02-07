import Link from 'next/link'

function LandingPage() {
  return (
    <div className="ms-auto mt-5 me-auto w-75 p-4 d-flex flex-column align-items-center">
      <p className="display-6">
        Hey, I'm Daniel. <br />I develop software <span className="fw-light text-primary">tools</span> and <span className="fw-light text-primary">automated workflows</span> for immersive and visual storytelling content.
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

  );
}

export default LandingPage