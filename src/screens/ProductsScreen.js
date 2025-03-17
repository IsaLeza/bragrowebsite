import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import productsData from "../screens/products-updated.json";
import { useInView } from "react-intersection-observer";
import { Helmet } from "react-helmet-async";

const ProductCard = ({ product }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <Link style={{ textDecoration: "none" }} to={`/product/${product.id}`}>
      <div ref={ref} className={`pscreen-card ${inView ? "lazy-loaded" : ""}`}>
        {inView && <img src={product.image} alt={product.name} className="pscreen-img lazy-loaded" />}
      </div>
      <div className="pscreen-details">
        <strong style={{ color: "green" }}>{product.name}</strong><br />
        <strong className="details">{product.details}</strong>
        <div className="pscreen-sizes">
          <strong style={{ marginRight: "4px" }}>Presentación:</strong>
          {product.presentations.map((presentation, index) => (
            <div key={index}>{presentation.size}</div>
          ))}
        </div>
        <div className="pscreen-stars">
          {"★★★★★".split("").map((star, index) => (
            <span key={index} className="star">&#9733;</span>
          ))}
        </div>
      </div>
    </Link>
  );
};

function ProductScreen() {
  const [visibleProducts, setVisibleProducts] = useState(36); // Carga 3 filas al inicio
  const [searchTerm, setSearchTerm] = useState("");
  const observerRef = useRef(null);

  // Ordenar productos alfabéticamente
  const sortedProducts = [...productsData].sort((a, b) => a.name.localeCompare(b.name));

  // Filtrar productos según el término de búsqueda
  const filteredProducts = sortedProducts.filter(product =>
    (product.name && product.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (product.details && product.details.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (product.component && product.component.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  // Función para cargar más productos al hacer scroll
  const loadMoreProducts = (entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setVisibleProducts(prev => prev + 12);
    }
  };

  // Configurar el observer para lazy load
  useEffect(() => {
    const observer = new IntersectionObserver(loadMoreProducts, { threshold: 0.5 });
    if (observerRef.current) observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="pscreen-container">
      <Helmet>
                      <title>BR Agro - Productos</title>
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
      {/* Barra de Búsqueda */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar producto..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Grid de Productos */}
      <div className="pscreen-grid">
        {filteredProducts.slice(0, visibleProducts).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Elemento para observar y activar lazy load */}
      <div ref={observerRef} className="lazy-load-trigger"></div>
    </div>
  );
}

export default ProductScreen;
