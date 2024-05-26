import React, { useEffect, useState } from "react";
import ReviewCard from "../components/ReviewComponent"
import reviewsData from "../components/reviews.json";
import productsData from "../components/products.json";
import ProductCarousel from "../components/ProductCarousel";




function MainScreen() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            text: "Soluciones integrales para la agricultura: Agroquímicos, fertilizantes y más",
            buttonText: "Quiero ser Distribuidor",
            image: process.env.PUBLIC_URL + '/media/main-img.png',
            background: `url(${process.env.PUBLIC_URL}/media/main-1-bg.png)`,
            width: "70%",
            display: "flex"
        },
        {
            text: "Aprovecha nuestro servicio con drones",
            text2: "Contáctanos para hacerte una cotización formal y proteger tus cultivos",
            buttonText: "Quiero Cotizar",
            image: process.env.PUBLIC_URL + '/media/dronBRAgro.png',
            background: `url(${process.env.PUBLIC_URL}/media/background-blue.png)`,
            width: "100%",
            display: "flex"
        },
        {
            text: "Triplica tus ingresos con nosotros",
            text2: "Únete a la red de distribuidores con mayor crecimiento en México, aprovecha los excelentes beneficios que tenemos para ti",
            buttonText: "Quiero ser Distribuidor",
            image: process.env.PUBLIC_URL + '/media/DISTRIB.png',
            background: `url(${process.env.PUBLIC_URL}/media/background-red.png)`,
            width: '60%',
            display: "flex"

        },

    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(currentSlide => (currentSlide + 1) % slides.length);
        }, 5500); // Change slide every 3.5 seconds

        return () => clearInterval(interval);
    }, [slides.length]);

    const [reviews, setReviews] = useState([]);

    useEffect(() => {

        setReviews(reviewsData.reviews);
    }, []);

    return (
        <div>
            <section className={`main-1 ${currentSlide !== 0 ? 'smooth-transition' : ''}`} style={{ backgroundImage: slides[currentSlide].background, display: slides[currentSlide].display }}>
                <div className="main-1-text">
                    <h1>{slides[currentSlide].text}</h1>
                    <h2>{slides[currentSlide].text2}</h2>
                    <button className="btn-distribuidor">{slides[currentSlide].buttonText}</button>
                </div>
                <div className="main-1-img" >
                    <img src={slides[currentSlide].image} alt="main-1-img" style={{ width: slides[currentSlide].width, height: slides[currentSlide].height }} />
                </div>
            </section>

            <section className="background2">
                <div className="section-title">
                    <h2>Nuestro Compromiso</h2>
                </div>
                <div className="main-2">
                    <div className="main-2-txt">
                        <h2>Nuestro compromiso con el campo mexicano ofreciendo productos de calidad a los agricultores.</h2>
                        <p>En BR Agro, nos especializamos en proporcionar una amplia gama de productos agroquímicos innovadores y eficaces, diseñados específicamente para satisfacer las necesidades de los agricultores en todo México. Trabajamos incansablemente para ofrecer soluciones que ayuden a proteger y mejorar la productividad de los cultivos, brindando a nuestros clientes la confianza y la tranquilidad que necesitan para prosperar en el campo.</p>
                        <div className="btn-container">
                            <button className="btn-distribuidor">Productos</button>
                            <button className="btn-distribuidor">Distribuidores Autorizados</button>
                        </div>
                    </div>
                    <div className="main-2-img">
                        <img src={process.env.PUBLIC_URL + '/media/map1.png'} alt="main-2-img" />
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
                <ProductCarousel />
            </section>
            <section>

            </section>
        </div>
    );
}

export default MainScreen;
