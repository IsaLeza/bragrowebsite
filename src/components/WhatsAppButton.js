import React from 'react';
import "./WhatsAppButton.css"

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Reemplaza 'TUNUMERODETELEFONO' con tu número de WhatsApp
    const phoneNumber = '522228519806';
    const message = encodeURIComponent('Hola, quiero más información');
    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`, '_blank');
  };

  return (
    <div className="whatsapp-button" onClick={handleWhatsAppClick}>
      <i className="fab fa-whatsapp"></i>
    </div>
  );
};

export default WhatsAppButton;