// ProductCard.js
import React from 'react';
import 'C:/Users/gabri/OneDrive/Documentos/UTEC 2024-1/pi 3/Front_end/Front_end_Pi3/agrosync/src/styles/productcard.css';
import productImage from 'C:/Users/gabri/OneDrive/Documentos/UTEC 2024-1/pi 3/Front_end/Front_end_Pi3/agrosync/src/assets/strwberry.jpg'; // Asegúrate de que la imagen esté en la carpeta correcta
import Description from './description';

const Productcard = () => {
    const reviews = [
      { author: "Alice", text: "Great strawberries! Very fresh and sweet." },
      { author: "Bob", text: "Good quality, but a bit expensive." },
    ];
  
    return (
      <div className="product-card">
        <h1 className="product-title">Product Details</h1>
        <div className="product-card-image">
          <img src={productImage} alt="English Strawberries" />
        </div>
        <div className="product-card-details">
          <h1>English Strawberries, Organic (250g)</h1>
          <div className="product-card-rating">
            ⭐️⭐️⭐️⭐️☆ (317)
          </div>
          <div className="product-card-price">
            <span>£4.95</span>
            <span className="price-per-unit">(£1.98 per 100g)</span>
          </div>
          <p>Sweet and juicy organic strawberries. The summer season’s best crop. Grown on carbon-neutral farms - right here in the UK.</p>
          <button className="add-to-cart">Add to Cart</button>
        </div>
        <div className="product-reviews">
          <h2>Customer Reviews</h2>
          {reviews.map((review, index) => (
            <Description key={index} author={review.author} text={review.text} />
          ))}
        </div>
      </div>
    );
  }
  
export default Productcard;
