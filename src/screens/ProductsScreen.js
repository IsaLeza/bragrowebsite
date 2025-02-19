import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import productsData from '../screens/products.json'; // Importing JSON file
import { useState } from 'react';

const ProductCard = ({ product }) => {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <Link style={{ textDecoration: "none" }} key={product.id} to={`/product/${product.id}`}>
            <div ref={ref} className="pscreen-card">
                {inView && (
                    <>
                        <img src={product.image} alt={product.name} className="pscreen-img" />
                    </>
                )}
            </div>
            <div className="pscreen-details">
                <strong style={{color:"green"}}>{product.name}</strong><br />
                <strong className='details'>{product.details}</strong>
                <div className="pscreen-sizes">
                    <strong style={{marginRight:"4px"}}>Presentación:</strong>
                    {product.presentations.map((presentation, index) => (
                        <div key={index}>{presentation.size}</div>
                    ))}
                </div>
                <div className="pscreen-stars">
                    {'★★★★★'.split('').map((star, index) => (
                        <span key={index} className="star">&#9733;</span>
                    ))}
                </div>
            </div>
        </Link>
    );
};

function ProductScreen() {
    const [visibleProducts, setVisibleProducts] = useState(12);

    const loadMore = () => {
        setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 12);
    };

    // Ordenar los productos en orden alfabético
    const products = productsData.sort((a, b) => a.name.localeCompare(b.name));

    return (
        <div className="pscreen-container">
            <div className="pscreen-grid">
                {products.slice(0, visibleProducts).map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            {visibleProducts < products.length && (
                <button onClick={loadMore} className="load-more">
                    Cargar más
                </button>
            )}
        </div>
    );
}

export default ProductScreen;
