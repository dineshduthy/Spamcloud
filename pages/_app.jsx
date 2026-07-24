import "@/styles/globals.css";
import "./styles/style.css"
import "./styles/responsive.css"
import "./styles/slider.css"
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from 'next/link';
import Footer from "./footer";
import Header from "./header";



const MyApp = ({ Component, pageProps, auth }) => {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);
  return (
    <div>
     <Header />
      <Component {...pageProps} />
      <Footer/>

    </div>
  )
}
export default MyApp
