import React from "react";
import Productcard from "./Productcard";

function ProductCards () {
    const products = [
        {
          "id": 1,
          "name": "Producto 1",
          "price": 10.99,
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Bright_red_tomato_and_cross_section02.jpg/800px-Bright_red_tomato_and_cross_section02.jpg"
        },
        {
          "id": 2,
          "name": "Producto 2",
          "price": 12.99,
          "image": "https://www.simplyrecipes.com/thmb/vUSYpxhcP3yGIy3BpxxrLr5_t1g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Strawberry-Guide-LEAD-02-9a5546836ac948e9b42e5d650918a21c.jpg"
        },
        {
          "id": 3,
          "name": "Producto 3",
          "price": 9.99,
          "image": "https://www.shutterstock.com/image-photo/bunch-bananas-isolated-on-white-600nw-1722111529.jpg"
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