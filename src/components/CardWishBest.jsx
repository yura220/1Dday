import React from 'react';
import { Link } from 'react-router-dom';

const CardWishBest = ({ product }) => {
  return (
    <li className="wish-card">
      <Link to={`/product/${product.id}`} className="wish-card-link">
        <div className="wish-card-img">
          <img src={product.mainImg} alt={product.name} />
        </div>
        <div className="wish-card-info">
          <h4 className="wish-card-title">{product.name}</h4>
          <div className="wish-card-meta">
            <span className="wish"> {product.wishCount}</span>
            <span className="review"> {product.reviewCount}</span>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default CardWishBest;
