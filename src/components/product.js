import React from "react";

function Product(props) {
  return (
    <div className="product" style={{ width: 400, height: 430 }}>
      <img src={require(`../img/${props.mokoko.imgUrl}`)} alt="" width="80%" />
      <h5 style={{ marginTop: 10 }}>{props.mokoko.title}</h5>
      <p>{props.mokoko.content}</p>
      <p>{props.mokoko.price}원</p>
    </div>
  );
}

export default Product;
