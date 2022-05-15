import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

function ProductDetail(props) {
  const { id } = useParams();
  const mokokos = props.mokokos;

  const [timeOut, setTimeOut] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setTimeOut(1);
    }, 2000);
  }, []);

  return (
    <div>
      <div className="container">
        {timeOut == 0 ? (
          <div className="alert alert-warning">2초이내 구매시 할인</div>
        ) : null}

        <div className="row">
          <div className="col-md-6">
            <img src={require(`../img/${mokokos[id].imgUrl}`)} width="100%" />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{mokokos[id].name}</h4>
            <p>{mokokos[id].content}</p>
            <p>{mokokos[id].price}원</p>
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
