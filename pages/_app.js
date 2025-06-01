// pages/_app.js
import '../styles/globals.css';
import NavBar from '../components/NavBar';

function MyApp({ Component, pageProps }) {
  const showNav = Component.showNav ?? true;

  return (
    <>
      {showNav && <NavBar />}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;