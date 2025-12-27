import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './redux/CartSlice';
import './ProductList.css'; // Optional: for styling

const products = [
  { id: 1, name: 'Aloe Vera', price: 10, img: 'aloe-vera.jpg' },
  { id: 2, name: 'Snake Plant', price: 15, img: 'snake-plant.jpg' },
  { id: 3, name: 'Peace Lily', price: 12, img: 'peace-lily.jpg' },
  { id: 4, name: 'Spider Plant', price: 8, img: 'spider-plant.jpg' },
];

const ProductList = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addItem({ ...product, quantity: 1 }));
  };

  return (
    <div className="product-list">
      <h2>Our Plants</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;