import React from "react";
import "./BRAgroSupport.css";

const BRAgroSupport = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "522228519806"; // Número real
    const message = "Quiero detalles para ser socio comercial";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section className="br-agro-support">
      <div className="br-support-container">
        
        {/* Texto */}
        <div className="br-support-text">
          <h2>Emprende con BR Agro</h2>
          <p>
            ¿Eres Ingeniero Agrónomo con experiencia en ventas de agroquímicos y asesoría técnica?  
            Con nuestro programa exclusivo de financiamiento, puedes tener tu propio negocio  
            <strong> con una alta rentabilidad y apoyo total</strong> para impulsar la agricultura mexicana.
          </p>
          <ul className="br-support-benefits">
            <li><strong>Te apoyamos con una camioneta</strong> para distribuir los productos.</li>
            <li><strong>Amplio catálogo de productos</strong> para todas las etapas del cultivo.</li>
            <li><strong>Exclusividad de zona</strong> para potenciar tu crecimiento.</li>
            <li><strong>Modelo rentable y escalable</strong> con alta demanda en el sector.</li>
          </ul>
          <button className="btn-whatsapp" onClick={handleWhatsAppClick}>
            Quiero detalles para ser socio comercial →
          </button>
        </div>

        {/* Imagen */}
        <div className="br-support-images">
          <img src="/media/socio.png" alt="Socio BR Agro" className="br-image" />
        </div>

      </div>
    </section>
  );
};

export default BRAgroSupport;
