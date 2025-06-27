import Background from "@/components/Background/Background";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <>
  <Navbar/>
  <Background/>
  <Component {...pageProps} />
  <Footer/>
  </>;
}
