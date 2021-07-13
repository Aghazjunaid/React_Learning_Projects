import React from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";

function Ecard() {
  return (
    <>
      <Container>
        <Card style={{ width: "310px" }}>
          <Card.Body style={{ margin: "10px", backgroundColor: "white" }}>
            <Card.Img
              variant="top"
              src="logo512.png"
              style={{
                width: "280px",
                height: "auto",
                backgroundColor: "white",
              }}
            />
            <Card.Title
              style={{
                textAlign: "center",
                marginTop: "5px",
                backgroundColor: "white",
              }}
            >
              Card Title
            </Card.Title>
            <Card.Subtitle
              className="mb-2 text-muted"
              style={{ textAlign: "center", backgroundColor: "white" }}
            >
              Card Subtitle
            </Card.Subtitle>
            <hr />
            <Row style={{ alignItems: "baseline", backgroundColor: "white" }}>
              <Col xs={6} style={{ backgroundColor: "white" }}>
                <Card.Subtitle
                  className="mb-2 text-dark"
                  style={{ backgroundColor: "white" }}
                >
                  $ 25.00
                </Card.Subtitle>
              </Col>
              <Col xs={6} style={{ backgroundColor: "white" }}>
                <Button variant="light" style={{ color: "blue" }}>
                  Add to cart
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default Ecard;
