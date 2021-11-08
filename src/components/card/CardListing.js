import React from "react";
import Ecard from "./Ecard";
import { Row, Col, Container } from "react-bootstrap";

function CardListing() {
  return (
    <>
    <Container>
    <Row>
        <Col sm={4}>
          {" "}
          <Ecard />
        </Col>
        <Col sm={4}>
          {" "}
          <Ecard />
        </Col>
        <Col sm={4}>
          {" "}
          <Ecard />
          <Ecard />
        </Col>
        <Col sm={4}>
          {" "}
          <Ecard />
        </Col>
        <Col sm={4}>
          {" "}
          <Ecard />
        </Col>
        <Col sm={4}>
          {" "}
          <Ecard />
        </Col>
        <Col sm={4}>
          {" "}
          <Ecard />
        </Col>
      </Row>

    </Container>
    </>
  );
}

export default CardListing;
