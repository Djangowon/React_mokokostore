import { useState } from "react";
import "./App.css";
import { Navbar, Container, Nav, Row, Col, Button } from "react-bootstrap";
import data from "./data.js";
import Product from "./components/product";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
  useParams,
} from "react-router-dom";
import ProductDetail from "./components/productDetail";
import axios from "axios";

function App() {
  const [mokokos, setMokokos] = useState(data);
  const navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">MokokoStore</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail");
              }}
            >
              Detail
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div className="main-bg"></div>
              {mokokos && mokokos.length > 0 && (
                <Container
                  style={{
                    flex: 1,
                    display: "grid",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Row>
                    {mokokos.map((mokoko, index) => {
                      return (
                        <Col
                          key={mokoko.id}
                          onClick={() => {
                            navigate(`/detail/${mokoko.id}`);
                          }}
                        >
                          <Product mokoko={mokoko} />
                        </Col>
                      );
                    })}
                  </Row>
                  <Button
                    // onClick={() => {
                    //   axios
                    //     .get("http://codingapple1.github.io/shop/data2.json")
                    //     .then((data) => {
                    //       console.log(mokokos);
                    //       console.log(data.data);
                    //       // const copy = [...mokokos, ...data.data];
                    //       setMokokos(copy);
                    //     })
                    //     .catch((error) => {
                    //       console.log(error);
                    //     });
                    // }}
                    onClick={() => {
                      const copy = [...mokokos, ...mokokos];
                      setMokokos(copy);
                    }}
                    variant="success"
                    size="lg"
                  >
                    더 보기
                  </Button>
                </Container>
              )}
            </div>
          }
        />

        <Route
          path="/detail/:id"
          element={
            <div>
              <ProductDetail mokokos={mokokos} />
            </div>
          }
        />
        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
        </Route>

        <Route path="*" element={<div>없는페이지요</div>} />
      </Routes>
    </div>
  );
}

export default App;

function Event() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  );
}
