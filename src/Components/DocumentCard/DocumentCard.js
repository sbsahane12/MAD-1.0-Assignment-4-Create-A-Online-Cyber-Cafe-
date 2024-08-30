import React from 'react';

import './DocumentCard.css';

const DocumentCard = ({ title, img, price, description }) => {
    const truncatedDescription = description.length > 50 ? description.slice(0, 50) + '...' : description;
  return (
    <div className="document-card">
      <img className="document-img" src={img} alt={title} />
      <div className="document-content">
        <h1 className="document-title">{title} <span className="document-price">Rs.{price}</span></h1>
        <p className="document-description">{truncatedDescription}</p>
        <button className="document-button">Apply Now</button>
      </div>
    </div>
  );
};

export default DocumentCard;
