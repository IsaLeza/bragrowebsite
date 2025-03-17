import React from "react";
import "./BRAgroStores.css";

const BRAgroStores = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "522228519806"; // Número real
    const message = "Quiero detalles para ser distribuidor autorizado de BR Agro";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section className="br-agro-stores">
      <div className="br-stores-container">
        
        {/* Texto */}
        <div className="br-stores-text">
          <h2>Convierte tu Tienda en un Punto de Venta Autorizado</h2>
          <p>
            ¿Tienes una tienda de agroquímicos? Conviértete en <strong>distribuidor autorizado de BR Agro</strong> y ofrece productos de alta calidad  
            con <strong>gran demanda y rotación</strong>. Te brindamos todo el respaldo necesario para que tu negocio crezca con productos confiables y rentables.
          </p>
          <ul className="br-stores-benefits">
            <li><strong>Alta rotación de productos</strong> y gran demanda en el sector.</li>
            <li><strong>Incentivos y apoyo</strong> para maximizar tu rentabilidad.</li>
            <li><strong>Acceso a un catálogo amplio</strong> con soluciones para todas las etapas del cultivo.</li>
            <li><strong>Márgenes Atractivos</strong> para que crezcas más.</li>
          </ul>
          <button className="btn-whatsapp" onClick={handleWhatsAppClick}>
            Quiero detalles para ser distribuidor autorizado →
          </button>
        </div>

        {/* Imagen */}
        <div className="br-stores-images">
          <img src="/media/productos.png" alt="Tienda de agroquímicos" className="br-image" />
        </div>

      </div>
    </section>
  );
};

export default BRAgroStores;
