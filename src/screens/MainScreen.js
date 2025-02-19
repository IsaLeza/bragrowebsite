import React, { useEffect, useState } from "react";
import ReviewCard from "../components/ReviewComponent";
import reviewsData from "../components/reviews.json";
import ProductCarousel from "../components/ProductCarousel";
import Main from "./Main.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function MainScreen() {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        setReviews(reviewsData.reviews);
    }, []);

    const handleWhatsAppClick = (message) => {
        const phoneNumber = "522228519806"; // Replace with your WhatsApp phone number
        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(url, "_blank");
    };

    return (
        <div>
            <section className="main-1">
                <div className="main-1-content">
                    <div className="main-1-text">
                        <h1>Soluciones Integrales para la Agricultura</h1>
                        <p>Agroquímicos, fertilizantes y más. Únete a la Red de Distribuidores con mayor crecimiento en México.</p>
                        <button
                            className="btn-distribuidor"
                            onClick={() => handleWhatsAppClick("Quiero ser Distribuidor")}
                        >
                            Quiero ser Distribuidor
                        </button>
                    </div>
                    <div className="main-1-img">
                        <img src={process.env.PUBLIC_URL + '/media/bottles.png'} alt="Agricultura sostenible" />
                    </div>
                </div>
            </section>

            <section className="background2">
                <div className="section-title">
                    <h2>Nuestro Compromiso</h2>
                </div>
                <div className="main-2">
                    <div className="main-2-txt">
                        <h2>Compromiso con el campo mexicano</h2>
                        <p>
                            En BR Agro, nos especializamos en ofrecer productos agroquímicos innovadores y eficaces
                            para potenciar la productividad agrícola en México. Nuestra misión es brindar soluciones
                            confiables que ayuden a proteger y mejorar los cultivos, garantizando la seguridad y el
                            crecimiento del sector agrícola.
                        </p>
                        <div className="btn-container">
                            <Link to="/products" className="btn-dist-cont">
                                <button className="btn-primary">Ver Productos</button>
                            </Link>
                        </div>
                    </div>
                    <div className="main-2-img">
                        <img src={process.env.PUBLIC_URL + '/media/map1.png'} alt="Mapa de distribución" />
                    </div>
                </div>
            </section>

            <section className="main-section">
                <div className="section-title2">
                    <h2>Clientes Satisfechos</h2>
                    <p>Conoce lo que dicen algunos de nuestros clientes satisfechos</p>
                </div>
                <div className="cards-container">
                    {reviews.map((review, index) => (
                        <div key={index} className="card-wrapper">
                            <ReviewCard review={review} />
                        </div>
                    ))}
                </div>
            </section>
            <section style={{ padding: "1.6rem 0" }}>
                <div className="section-title">
                    <h2>Productos Destacados</h2>
                    <p>Descubre nuestra variedad de productos</p>
                </div>
                <Link to="/products">
                    <ProductCarousel />
                </Link>

            </section>
        </div>
    );
}

export default MainScreen;
