import React from 'react';

function ReviewCard({ review }) {
  return (
    <div className="review-card">
      <div className="profile-pic">
        {/* Use the relative path from the public folder */}
        <img src={process.env.PUBLIC_URL + review.foto_perfil} alt="Foto de perfil" />
      </div>
      <div className="review-info">
        <h3>{review.nombre}</h3>
        <div className="star-rating">{'★'.repeat(review.rating)}</div>
        <p className="comment">{review.review}</p>
        <p className="date">{review.fecha}</p>
      </div>
    </div>
  );
}

export default ReviewCard;
