import React from "react";

function Product({ name, content, imgUrl, price }) {
  return (
    <div className="product">
      <img src={require(`../img/${imgUrl}`)} alt="" width="80%" />
      <h5 style={{ marginTop: 10 }}>{name}</h5>
      <p>{content}</p>
      <p>{price}</p>
    </div>
  );
}

export default Product;
