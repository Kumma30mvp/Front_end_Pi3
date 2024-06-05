import React from "react";
import Productcard from "./Productcard";

function ProductCards () {
    const products = [
        {
          "id": 1,
          "name": "Producto 1",
          "price": 10.99,
          "image": "https://example.com/images/product1.jpg"
        },
        {
          "id": 2,
          "name": "Producto 2",
          "price": 12.99,
          "image": "https://example.com/images/product2.jpg"
        },
        {
          "id": 3,
          "name": "Producto 3",
          "price": 9.99,
          "image": "https://example.com/images/product3.jpg"
        }
      ];

  return (
    <div className="product-cards">
      {products.map((product) => (
        <Productcard key={product.id} name={product.name} price={product.price} image={product.image} />
      ))}
    </div>
  );
}

export default ProductCards;