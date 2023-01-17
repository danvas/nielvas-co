import Head from 'next/head'
import Link from 'next/link'

function IndexPage() {
  return (
    <div className="h-100">
      <Head>
        <title>Daniel Vasquez // 3D Software Developer</title>
        <link rel="icon" href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/198/hundred-points-symbol_1f4af.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>

      <div className="container h-100 d-flex flex-column align-items-center justify-content-center" >
        <div className="display-4 text-dark p-4" >
          <span className="text-light">Automating 3D workflows</span> for Creatives, Artists, and Businesses.
        </div>
        <div className="p-5" >
          <Link
            className="btn btn-outline-light btn-lg rounded-pill"
            href="/about"
          >
            Learn More
          </Link>
        </div>

      </div>
    </div>
  );
}

export default IndexPage