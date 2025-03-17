import React, { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import products from "./products-updated.json";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";


const ProductDetailedScreen = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();
    const location = useLocation();

    useEffect(() => {
        const selectedProduct = products.find((prod) => prod.id === id);
        if (selectedProduct) {
            setProduct(selectedProduct);
        } else {
            console.error(`Producto con ID ${id} no encontrado`);
        }
        window.scrollTo(0, 0);
    }, [id, location]);

    if (!product) {
        return <p className="pdetail-no-product">Producto no encontrado</p>;
    }

    const getRandomProducts = () => {
        let shuffled = [...products].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 4);
    };

    const randomProducts = getRandomProducts();

    const { image, name, details, presentations, composition, downloadUrl } = product;

    const handleDownload = () => {
        if (!downloadUrl) {
            alert(
                "El archivo no está disponible. Puedes solicitar la ficha técnica en WhatsApp."
            );
        }
    };

    return (
        <div className="pdetail-container">
            <Helmet>
                <title>{product.name} - BR Agro</title>
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
            {/* Botón de descarga flotante */}
            <a
                href={downloadUrl || "#"}
                download={downloadUrl ? true : false}
                className="pdetail-download-button"
                onClick={handleDownload}
            >
                Ficha Técnica
            </a>

            <div className="pdetail-main">
                {/* Imagen y Datos Principales */}
                <Fade>
                    <div className="pdetail-header">
                        <div className="pdetail-img-wrapper">
                            <img src={image} alt={name} className="pdetail-image" />
                        </div>
                        <div className="pdetail-info">
                            <h2 className="pdetail-title">{name}</h2>
                            <p className="pdetail-description">{details}</p>
                        </div>
                    </div>
                </Fade>

                {/* Composición del Producto */}
                <Fade>
                    <div className="pdetail-section">
                        <h3 className="pdetail-heading">Composición</h3>
                        <div className="pdetail-composition">
                            {composition?.map((component, index) => (
                                <div key={index} className="pdetail-composition-item">
                                    <span className="pdetail-component-name">{component.component}</span>
                                    <span className="pdetail-component-amount">{component.percentage}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </Fade>

                {/* Presentaciones Disponibles */}
                <Fade>
                    <div className="pdetail-section">
                        <h3 className="pdetail-heading">Presentaciones</h3>
                        <div className="pdetail-presentations">
                            {presentations?.map((presentation, index) => (
                                <div key={index} className="pdetail-presentation-item">
                                    <span className="pdetail-presentation-size">{presentation.size}</span>
                                    <span className="pdetail-presentation-packaging">{presentation.packaging}</span>

                                </div>
                            ))}
                        </div>
                    </div>
                </Fade>
            </div>

            {/* Otros Productos Relacionados */}
            <Fade>
                <div className="pdetail-related">
                    <h3 className="pdetail-heading">Otros productos</h3>
                    <div className="pdetail-grid">
                        {randomProducts.map((randomProduct, index) => (
                            <Link
                                key={index}
                                to={`/product/${randomProduct.id}`}
                                className="pdetail-grid-item"
                            >
                                <img
                                    src={randomProduct.image}
                                    alt={randomProduct.name}
                                    className="pdetail-grid-image"
                                />
                                <h5 className="pdetail-grid-title">{randomProduct.name}</h5>
                                <p className="pdetail-grid-description">{randomProduct.details}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default ProductDetailedScreen;
