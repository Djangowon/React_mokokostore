import React, { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { useParams } from "react-router";

function ProductDetail(props) {
  const { id } = useParams();
  const mokokos = props.mokokos;

  const [timeOut, setTimeOut] = useState(0);
  const [text, setText] = useState("");
  const [tab, setTab] = useState(0);
  const [fade2, setFade2] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setTimeOut(1);
    }, 2000);
  }, []);

  useEffect(() => {
    setFade2("end");
    return () => {
      setFade2("");
    };
  });

  const onChange = (e) => {
    setText(e.target.value);
    if (isNaN(text) == true) {
      alert("숫자만 입력하세요");
    }
  };

  return (
    <div>
      <div className={"container start " + fade2}>
        {timeOut == 0 ? (
          <div className="alert alert-warning">2초이내 구매시 할인</div>
        ) : null}

        <div className="row">
          <div className="col-md-6">
            <img src={require(`../img/${mokokos[id].imgUrl}`)} width="100%" />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{mokokos[id].title}</h4>
            <p>{mokokos[id].content}</p>
            <p>{mokokos[id].price}원</p>
            <input type="text" onChange={onChange} />
            <button type="submit" className="btn btn-danger">
              주문하기
            </button>
          </div>
        </div>
        <Nav style={{ marginTop: 30 }} variant="tabs" defaultActiveKey="/link0">
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                setTab(0);
              }}
            >
              버튼0
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                setTab(1);
              }}
            >
              버튼1
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                setTab(2);
              }}
            >
              버튼2
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <TabContent tab={tab} />
      </div>
    </div>
  );
}

function TabContent({ tab }) {
  // if (props.tab == 0) {
  //   return <div>내용0</div>;
  // } else if (props.tab == 1) {
  //   return <div>내용1</div>;
  // } else if (props.tab == 2) {
  //   return <div>내용2</div>;
  // }

  const [fade, setFade] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setFade("end");
    }, 100);
    return () => {
      setFade("");
    };
  }, [tab]);
  return (
    <div className={"start " + fade}>
      {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]}
    </div>
  );
}

export default ProductDetail;
