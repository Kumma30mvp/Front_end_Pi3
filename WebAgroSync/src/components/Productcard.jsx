// ProductCard.js
import React from 'react';
import '../styles/productcard.css';

function Productcard ({ name, price, image}){
    return (
      <div className="product-card">
        <h1 className="product-title">Product Details</h1>
        <div className="product-card-image">
          <img src={image} alt="English Strawberries" />
        </div>
        <div className="product-card-details">
          <span>{name}</span>
          <div className="product-card-rating">
            ⭐️⭐️⭐️⭐️☆ (317)
          </div>
          <div className="product-card-price">
            <span>{price}</span>
            <span className="price-per-unit">(£1.98 per 100g)</span>
          </div>
          <p>Sweet and juicy organic strawberries. The summer season’s best crop. Grown on carbon-neutral farms - right here in the UK.</p>
          <button className="add-to-cart">Add to Cart</button>
        </div>
        <div className="product-reviews">
          <h2>Customer Descripcion</h2>

        </div>
      </div>
    );
  }
  
export default Productcard;
