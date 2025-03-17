import React, { useEffect, useState } from "react";
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
import { FaBars, FaTimes, FaPhone, FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { HelmetProvider } from "react-helmet-async";







function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
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
    </HelmetProvider>
  )
}


const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`navbar-container ${scrolled ? "scrolled" : ""}`}>
      {/* Overlay para cerrar el menú al hacer clic */}
      <div className={`overlay ${menuOpen ? "overlay-active" : ""}`} onClick={closeMenu}></div>

      <nav className="navbar">
        {/* Logo */}
        <Link to="/" className="logo-container">
          <img className="logo" src={process.env.PUBLIC_URL + "/media/bragro.png"} alt="BR Agro Logo" />
        </Link>

        {/* Menú de navegación */}
        <ul className={`menu ${menuOpen ? "menu-open" : ""}`}>
          <li><Link to="/" className="nav-link" onClick={closeMenu}>Inicio</Link></li>
          <li><Link to="/about" className="nav-link" onClick={closeMenu}>Nosotros</Link></li>
          <li><Link to="/products" className="nav-link" onClick={closeMenu}>Productos</Link></li>
          <li><Link to="/distribuidores" className="nav-link" onClick={closeMenu}>Distribuidores</Link></li>
        </ul>

        {/* Botón Menú Hamburguesa con Iconos */}
        <button className="hamburger" onClick={toggleMenu} aria-label="Menú de navegación">
          {menuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </button>
      </nav>
    </header>
  );
};



const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Menú de Navegación */}
        <nav className="footer-nav">
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/about">Nosotros</Link></li>
            <li><Link to="/products">Productos</Link></li>
            <li><Link to="/distribuidores">Distribuidores</Link></li>
          </ul>
        </nav>

        {/* Información de Contacto */}
        <div className="footer-contact">
          <h3>Atención al Cliente</h3>
          <p>
            <FaPhone /> <a href="tel:7752374367">775-237-4367</a> |
            <a href="tel:5621171521"> 562-117-1521</a> |
            <a href="tel:2228519806"> 222-851-9806</a>
          </p>
          <p>Privada los Reyes 14, Barrio Segundo, 75809 San Bartolo Teontepec, Pue.</p>
        </div>

        {/* Redes Sociales */}
        <div className="footer-social">
          <h3>Síguenos en</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/gpobragro" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/gpobr_agro/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.tiktok.com/@br_agro_company" target="_blank" rel="noopener noreferrer">
              <FaTiktok />
            </a>
          </div>
        </div>

        {/* Copyright y Créditos */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} BR Agro. Todos los derechos reservados.</p>
          <p>Desarrollado por <a href="https://www.isasoft.com.mx">isaSoft</a></p>
        </div>

      </div>
    </footer>
  );
};

export default App;
