import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"; // Iconos de estrellas
import { Swiper, SwiperSlide } from "swiper/react"; // Importar Swiper
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./BRAgroTestimonials.css";

const reviews = [
    {
        name: "Uriel C",
        location: "Jalisco",
        rating: 5,
        comment: "Los productos son de calidad, cumplen su función",
        image: "/media/testimonio1.png"
    },
    {
        name: "Arturo López",
        location: "Veracruz",
        rating: 4.5,
        comment: "Excelente calidad 👌",
        image: "/media/testimonio2.png"
    },
    {
        name: "Edgar Hernández",
        location: "Chiapas",
        rating: 5,
        comment: "Muy buena herramienta",
        image: "/media/testimonio3.png"
    },
    {
        name: "Iván Solis",
        location: "San Luis Potosí",
        rating: 5,
        comment: "Muy buen servicio",
        image: "/media/testimonio3.png"
    },
    {
        name: "Vidal Luna",
        location: "San Luis Potosí",
        rating: 5,
        comment: "Excelente servicio, cada vez que pido me llegan mis productos.",
        image: "/media/testimonio3.png"
    },
    {
        name: "Juan Manuel P.",
        location: "San Luis Potosí",
        rating: 5,
        comment: "Muy amables",
        image: "/media/testimonio3.png"
    },
    {
        name: "Uriel Aquino",
        location: "San Luis Potosí",
        rating: 5,
        comment: "Yo me hice socio comercial",
        image: "/media/testimonio3.png"
    },
];

// Función para generar estrellas dinámicamente
const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars.push(<FaStar key={i} className="star full" />);
        } else if (i - rating < 1) {
            stars.push(<FaStarHalfAlt key={i} className="star half" />);
        } else {
            stars.push(<FaRegStar key={i} className="star empty" />);
        }
    }
    return stars;
};

const BRAgroReviews = () => {
    return (
        <section className="br-agro-reviews">
            <div className="reviews-header">
                <h2><strong>¿Qué dicen nuestros clientes?</strong></h2>
                <img
                    src={process.env.PUBLIC_URL + "/media/google-reviews-logo.png"}
                    alt="Google Reviews"
                    className="google-reviews-logo"
                />
            </div>

            {/* Slider de testimonios */}
            <Swiper
                modules={[Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                pagination={false}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                }}
                className="reviews-slider"
            >
                {reviews.map((review, index) => (
                    <SwiperSlide key={index}>
                        <div className="review-card">
                            <div className="review-header">

                                <div className="review-info">
                                    <p><strong>{review.name}</strong></p>

                                </div>
                            </div>
                            <div className="review-rating">{renderStars(review.rating)}</div>
                            <p className="review-comment">"{review.comment}"</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default BRAgroReviews;
