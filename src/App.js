import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MainScreen from "./screens/MainScreen";
import AboutScreen from "./screens/AboutScreen";
import ProductScreen from "./screens/ProductsScreen"
import ProductDetailedScreen from "./screens/ProductDetailedScreen";
import ServicesScreen from "./screens/DistribuidoresScreen";
import ServicesDetailedScreen from "./screens/ServiceDetailedScreen";
import PrivacyPolicyScreen from "./screens/PrivacyPolicyScreen";
import ThankYouScreen from "./screens/ThankYouScreen";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";
import DistribuidoresScreen from "./screens/DistribuidoresScreen";




function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <NavBar></NavBar>
      <WhatsAppButton></WhatsAppButton>
      <Routes>
        <Route path="/" element={<MainScreen />}></Route>
        <Route path="/about" element={<AboutScreen />}></Route>
        <Route path="/products" element={<ProductScreen />}></Route>
        <Route path="/product/:id" element={<ProductDetailedScreen />} />
        <Route path="/distribuidores" element={<DistribuidoresScreen />}></Route>
        <Route path="/privacypolicy" element={<PrivacyPolicyScreen />}></Route>
      </Routes>
      <Footer></Footer>
      
    </BrowserRouter>
  )
}


const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      <div className={`overlay ${menuOpen ? 'overlay-active' : ''}`} onClick={toggleMenu}></div>

      <nav className="navbar">
        <div>
          <Link to="/">
            <img className="logo" src={process.env.PUBLIC_URL + '/media/bragro.png'} alt="Logo" />
          </Link>
        </div>
        <ul className={`menu ${menuOpen ? 'menu-open' : ''}`}>
          <li>
            <Link to="/" className="nav-link" onClick={closeMenu}>INICIO</Link>
          </li>
          <li>
            <Link to="/about" className="nav-link" onClick={closeMenu}>NOSOTROS</Link>
          </li>
          <li>
            <Link to="/products" className="nav-link" onClick={closeMenu}>PRODUCTOS</Link>
          </li>
          <li>
            <Link to="/distribuidores" className="nav-link" onClick={closeMenu}>DISTRIBUIDORES</Link>
          </li>
        </ul>
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? 'bar-open' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'bar-open' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'bar-open' : ''}`}></div>
        </div>
      </nav>
    </div>
  );
};

const Footer = () => {
  const PhoneNumber = ({ number, children }) => (
    <a style={{ color: "#fff", textDecoration: "none" }} href={`tel:${number}`}>{children}</a>
  );

  return (
    <footer>
      <nav>
        <ul>
          <li><Link to="/">INICIO</Link></li>
          <li><Link to="/about">NOSOTROS</Link></li>
          <li><Link to="/products">PRODUCTOS</Link></li>
          <li><Link to="/distribuidores">DISTRIBUIDORES</Link></li>
        </ul>
      </nav>
      <div className="contact-info">
        <p>ATENCIÓN AL CLIENTE:<span>
          <PhoneNumber number="775-237-4367">775-237-4367</PhoneNumber>{' | '}
          <PhoneNumber number="562-117-1521">562-117-1521</PhoneNumber>{' | '}
          <PhoneNumber number="222-851-9806">222-851-9806</PhoneNumber>
        </span></p>
        <p>Privada los Reyes 14, Barrio Segundo, 75809 San Bartolo Teontepec, Pue.</p>
      </div>
      <div className="social-media">
        <p style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <a href="https://www.facebook.com/gpobragro" className="social-link">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/gpobr_agro/" className="social-link">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.tiktok.com/@br_agro_company" className="social-link">
            <i className="fab fa-tiktok"></i>
          </a>
        </p>
      </div>
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} BR Agro. Todos los derechos reservados.</p>
      </div>
      <div>
        <p>Sitio Web desarrollado por <a style={{ textDecoration: "none", color: "#fff" }} href="https://www.isasoft.com.mx">isaSoft</a></p>
      </div>
    </footer>
  );
};
export default App;
