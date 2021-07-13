import React from "react";
import Ecard from "./Ecard";
import { Row, Col, Container } from "react-bootstrap";

function CardListing() {
  return (
    <>
    <Container>
    <Row>
        <Col>
          {" "}
          <Ecard />
        </Col>
        <Col>
          {" "}
          <Ecard />
        </Col>
        <Col>
          {" "}
          <Ecard />
          <Ecard />
        </Col>
        <Col>
          {" "}
          <Ecard />
        </Col>
        <Col>
          {" "}
          <Ecard />
        </Col>
        <Col>
          {" "}
          <Ecard />
        </Col>
        <Col>
          {" "}
          <Ecard />
        </Col>
      </Row>

    </Container>
    </>
  );
}

export default CardListing;
