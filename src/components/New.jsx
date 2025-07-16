import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import "../assets/css/new.css";

export default function New() {
  const [newProducts, setNewProducts] = useState([]);

  useEffect(() => {
    fetch('/src/data/products.json')
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort(
          (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
        );
        setNewProducts(sorted.slice(0, 8));
      });
  }, []);

  return (
    <section id="new">
      <div className="wrap">
        <h2 className="h2 brown">NEW 클래스</h2>
        <ul className='new-list'>
              {newProducts.map((product) => (
                <Card key={product.id} product={product} />
              ))}
        </ul>
      </div>
    </section>
  );
}
