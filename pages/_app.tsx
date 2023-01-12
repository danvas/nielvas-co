import '../styles.scss'
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

function Root({ Component, pageProps }) {
  return (
    <div id="root-container" className="d-flex flex-column">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default Root;