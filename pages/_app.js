import Background from "@/components/Background/Background";
import Vdo from "@/components/Background/Vdo";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <>
  <Navbar/>
  {/* <Background/> */}
  {/* <Vdo/> */}
  <Component {...pageProps} />
  <Footer/>
  </>;
}
