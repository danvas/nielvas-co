import '../styles.scss'
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

function Root({ Component, pageProps }) {
  const enabledBg = Component.name === 'LandingPage' ? "nv-cloud-bg" : "";
  return (
    <div id="root-container" className={`d-flex flex-column ${enabledBg}`}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default Root;