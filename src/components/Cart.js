import React from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

const Cart = () => {
  const a = useSelector((state) => {
    return state;
  });

  console.log(a.stock);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>모코코</td>
            <td>모코코</td>
            <td>모코코</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Cart;
