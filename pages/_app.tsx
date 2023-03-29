import { useRouter } from 'next/router'
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import '../styles.scss'

function Root({ Component, pageProps }) {
  const router = useRouter();
  const enabledBg = router.asPath === "/" ? "nv-cloud-bg" : "";
  return (
    <div id="root-container" className={`d-flex flex-column ${enabledBg}`}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default Root;