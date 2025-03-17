import React, { useEffect, useState } from "react";
import Main from "./Main.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { FaTruck, FaLock, FaHeadset, FaLeaf, FaFlask } from "react-icons/fa";
import BRAgroSupport from "../components/BRAgroSupport";
import BRAgroStores from "../components/BRAgroStores";
import BRAgroTestimonials from "../components/BRAgroTestimonials";
import { Helmet } from "react-helmet-async";

function MainScreen() {
    const [reviews, setReviews] = useState([]);



    const handleWhatsAppClick = (message) => {
        const phoneNumber = "522228519806"; // Replace with your WhatsApp phone number
        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(url, "_blank");
    };



    return (

        <div>
            <Helmet>
                <title>BR Agro - Inicio</title>
                <meta
                    name="description"
                    content="Optimiza tu producción agrícola con los mejores agroquímicos del mercado. BR Agro ofrece fertilizantes, insecticidas y soluciones innovadoras para el campo."
                />
                <meta
                    name="keywords"
                    content="Agroquímicos, fertilizantes agrícolas, insecticidas, BR Agro, protección de cultivos, distribuidores agroquímicos, soluciones agrícolas, nutrición vegetal, bioestimulantes"
                />
                <meta name="author" content="isaSoft" />
            </Helmet>
            <section className="hero">
                {/* Transparent Overlay */}
                <div className="hero-overlay"></div>

                <div className="hero-content">
                    <h1>
                        <img
                            src={process.env.PUBLIC_URL + "/media/bragro.png"}
                            alt="BR Agro Logo"
                            className="br-agro-logo"
                        />
                    </h1>
                    <h2>Soluciones innovadoras para un campo más productivo</h2>
                    <p>
                        En <span className="bold-text">BR Agro</span>, creemos en el poder de la tecnología y la innovación
                        para transformar la agricultura. Nuestros agroinsumos están diseñados para potenciar tus cultivos,
                        mejorar la rentabilidad y cuidar el medio ambiente.
                        <br /><br />
                        Descubre cómo podemos ayudarte a alcanzar cosechas más sanas, productivas y sostenibles.
                        El futuro del campo está en tus manos.
                    </p>
                    <Link to="/products">
                        <button className="btn-cta">
                            Descubre Nuestras Soluciones →
                        </button>
                    </Link>
                </div>
            </section>
            <section className="company-highlights">
                <div className="company-highlights-container">
                    <div className="company-highlight">
                        <FaTruck className="company-highlight-icon" />
                        <span>Envíos a todo México</span>
                    </div>
                    <div className="company-highlight">
                        <FaLock className="company-highlight-icon" />
                        <span>Pagos Seguros</span>
                    </div>
                    <div className="company-highlight">
                        <FaHeadset className="company-highlight-icon" />
                        <span>Soporte al Cliente</span>
                    </div>
                    <div className="company-highlight">
                        <FaLeaf className="company-highlight-icon" />
                        <span>Sustentabilidad</span>
                    </div>
                    <div className="company-highlight">
                        <FaFlask className="company-highlight-icon" />
                        <span>Innovación</span>
                    </div>
                </div>
            </section>
            <BRAgroSupport />
            <BRAgroStores />
            <BRAgroTestimonials />


        </div>
    );
}

export default MainScreen;
