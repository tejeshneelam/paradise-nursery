import React, { useState } from 'react';
import './ProductList.css';

const products = [
  { id: 1, name: 'Aloe Vera', price: 10, image: 'path-to-image' },
  { id: 2, name: 'Snake Plant', price: 15, image: 'path-to-image' },
  { id: 3, name: 'Peace Lily', price: 20, image: 'path-to-image' },
];

function ProductList() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <h2>Available Plants</h2>
      <div className="products">
        {products.map((plant) => (
          <div key={plant.id} className="product-card">
            <img src={plant.image} alt={plant.name} />
            <h3>{plant.name}</h3>
            <p>Price: ${plant.price}</p>
            <button onClick={() => addToCart(plant)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
