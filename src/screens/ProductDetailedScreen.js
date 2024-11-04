import React, { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import products from './products.json';
import { Fade } from 'react-awesome-reveal';

const ProductDetailedScreen = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();
    const location = useLocation();

    useEffect(() => {
        const selectedProduct = products.find(prod => prod.id === id);

        if (selectedProduct) {
            setProduct(selectedProduct);
        } else {
            console.error(`Product with id ${id} not found`);
        }

        // Scroll to top when route changes
        window.scrollTo(0, 0);
    }, [id, location]);

    if (!product) {
        return <p>No product found</p>;
    }

    const getRandomProducts = () => {
        let shuffled = products.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 4);
    };

    const randomProducts = getRandomProducts();

    const { image, name, details, presentations, composition, downloadUrl } = product;

    return (
        <div>
            {/* Botón de descarga fijo */}
            {downloadUrl && (
                <a href={downloadUrl} download className="download-button">
                    Descargar Ficha Técnica
                </a>
            )}

            <div className="product-screen">
                <Fade>
                    <div className="product-info">
                        <img src={image} alt={name} className="product-image" />
                        <h2>{name}</h2>
                        <h3>{details}</h3>
                    </div>
                </Fade>
                <Fade>
                    <div className="product-section">
                        <h4>Composición</h4>
                        <div className="product-composition">
                            {composition && composition.map((component, index) => (
                                <div key={index} className="product-composition-item">
                                    <span className="component-name">{component.component}</span>
                                    <span className="component-amount">{component.percentage}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </Fade>
                <Fade>
                    <div className="product-section">
                        <h4>Presentaciones</h4>
                        <div className="product-presentations">
                            {presentations && presentations.map((presentation, index) => (
                                <div key={index} className="product-presentation-item">
                                    <span className="presentation-size">{presentation.size}</span>
                                    <span className="presentation-packaging">{presentation.packaging}</span>
                                    <span className="presentation-price">${presentation.price}.00</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </Fade>
            </div>
            <Fade>
                <div className="product-section">
                    <h4>Otros productos</h4>
                    <div className="product-grid">
                        {randomProducts.map((randomProduct, index) => (
                            <Link key={index} to={`/product/${randomProduct.id}`} className="product-grid-item">
                                <img src={randomProduct.image} alt={randomProduct.name} className="grid-product-image" />
                                <h5 className='randomh5'>{randomProduct.name}</h5>
                                <p className='randomp'>{randomProduct.details}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default ProductDetailedScreen;
