//\src\components\Card.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import WishBtn from './WishBtn.jsx';

const Card = ({ product }) => {
  return (
    <li className='relative'>
      <article className='card-wrap'>
        <WishBtn product={product} />
        <Link className="card"
          to={`/product/${product.id}`}
        >
          <img
            src={product.mainImg}
            alt={product.name}
          />
          <div className="card-info">
            <div className='title'>
              <h3>{product.name}</h3>
            </div>
            <div className='cate'>
              <p className='cateP'>{product.category}</p>
              <p className='dayP'>{product.day}</p>
            </div>
            <div className='rating'>
              <p className='review'>{product.reviewCount}</p>
              <p className='wish'>{product.wishCount}</p>
            </div>
            <div className='price'>
              <p>{product.price.toLocaleString()}원</p>
            </div>
            <div className="tags">
              {product.tag.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Link>
      </article>
    </li>
  );
};

export default Card;
