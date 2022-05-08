import { useState } from "react";
import "./App.css";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import data from "./data.js";
import Product from "./components/product";

function App() {
  const [mokokos] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">MokokoStore</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg"></div>

      {mokokos && mokokos.length > 0 && (
        <Container>
          <Row>
            {mokokos.map((mokoko, index) => (
              <Col>
                <Product
                  name={mokoko.name}
                  content={mokoko.content}
                  price={mokoko.price}
                  imgUrl={mokoko.imgUrl}
                  index={index}
                />
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </div>
  );
}

export default App;
