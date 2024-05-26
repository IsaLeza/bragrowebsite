import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams from react-router-dom
import products from './products.json'; // Import the JSON file from the same folder

const ProductDetailedScreen = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams(); // Get the id parameter from the URL

    useEffect(() => {
        // Find the product with the matching id from the URL params
        const selectedProduct = products.find(prod => prod.id === id);

        if (selectedProduct) {
            setProduct(selectedProduct);
        } else {
            console.error(`Product with id ${id} not found`);
        }
    }, [id]); // Re-run effect when id changes

    if (!product) {
        return <p>No product found</p>;
    }

    // Destructure product object properties
    const { image, name, details, category, presentations, composition } = product;

    return (
        <div className="product-screen">
            <div className="product-info">
                <img src={image} alt={name} className="product-image" />
                <h2>{name}</h2>
                <h3>{details}</h3>
            </div>
            <div className="product-table-container">
                <table className="product-table">
                    <thead>
                        <tr>
                            <th>Component</th>
                            <th>Percentage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Check if composition array is defined */}
                        {composition && composition.map((component, index) => (
                            <tr key={index}>
                                <td>{component.component}</td>
                                <td>{component.percentage}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="product-table-container">
                <table className="product-table">
                    <thead>
                        <tr>
                            <th>Presentación</th>
                            <th>Empaquetado</th>
                            <th>Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Check if presentations array is defined */}
                        {presentations && presentations.map((presentation, index) => (
                            <tr key={index}>
                                <td>{presentation.size}</td>
                                <td>{presentation.packaging}</td>
                                <td>${presentation.price}.00</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ProductDetailedScreen;
