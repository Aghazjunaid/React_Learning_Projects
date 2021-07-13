import React from "react";
import {
  Container,
  Card,
  Form,
  Row,
  Col,
  DropdownButton,
  Dropdown,
  Button,
} from "react-bootstrap";

function Signup() {
  return (
    <>
      <Container>
        <Card style={{ width: "50rem" }}>
          <Card.Title style={{ backgroundColor: "white", margin: "15px" }}>
            SignUp
          </Card.Title>
          <Form style={{ backgroundColor: "white", margin: "15px" }}>
            <Row style={{ backgroundColor: "white", marginBottom: "10px" }}>
              <Col style={{ backgroundColor: "white" }}>
                <Form.Label style={{ backgroundColor: "white" }}>
                  First Name
                </Form.Label>
                <Form.Control />
              </Col>
              <Col style={{ backgroundColor: "white" }}>
                <Form.Label style={{ backgroundColor: "white" }}>
                  Last Name
                </Form.Label>
                <Form.Control />
              </Col>
            </Row>
            <Form.Group style={{ backgroundColor: "white" }}>
              <Form.Label style={{ backgroundColor: "white" }}>
                Email address
              </Form.Label>
              <Form.Control type="email" />
              <Form.Text
                className="text-muted"
                style={{ backgroundColor: "white" }}
              >
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Row style={{ backgroundColor: "white", marginBottom: "10px" }}>
              <Col sm={2} style={{ backgroundColor: "white" }}>
                <Form.Check
                  type="radio"
                  label="Male"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                  style={{ backgroundColor: "white" }}
                />
              </Col>
              <Col style={{ backgroundColor: "white" }}>
                <Form.Check
                  type="radio"
                  label="Female"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                  style={{ backgroundColor: "white" }}
                />
              </Col>
            </Row>
            <Form.Group>
              <Row style={{ backgroundColor: "white", marginBottom: "10px" }}>
                <Col style={{ backgroundColor: "white" }}>
                  <Form.Label style={{ backgroundColor: "white" }}>
                    City
                  </Form.Label>
                  <Form.Control />
                </Col>
                <Col style={{ backgroundColor: "white" }}>
                  <Form.Label style={{ backgroundColor: "white" }}>
                    Country
                  </Form.Label>
                  <DropdownButton
                    id="dropdown-item-button"
                    title="United States"
                    style={{ backgroundColor: "white" }}
                  >
                    <Dropdown.ItemText>Choose...</Dropdown.ItemText>
                    <Dropdown.Item as="button">Action</Dropdown.Item>
                    <Dropdown.Item as="button">Another action</Dropdown.Item>
                    <Dropdown.Item as="button">Something else</Dropdown.Item>
                  </DropdownButton>
                </Col>
              </Row>
            </Form.Group>
            <Form.Group>
              <Row style={{ backgroundColor: "white", marginBottom: "10px" }}>
                <Col style={{ backgroundColor: "white" }}>
                  <Form.Label style={{ backgroundColor: "white" }}>
                    Create Password
                  </Form.Label>
                  <Form.Control />
                </Col>
                <Col style={{ backgroundColor: "white" }}>
                  <Form.Label style={{ backgroundColor: "white" }}>
                    Repeat Password
                  </Form.Label>
                  <Form.Control />
                </Col>
              </Row>
            </Form.Group>
            <Button variant="primary" style={{ width: "100%" }}>
              Register
            </Button>{" "}
          </Form>
          <Card.Subtitle
            className="mb-2 text-muted"
            style={{ backgroundColor: "white", margin: "15px" }}
          >
            By clicking the 'Sign Up' button, you confirm that you accept our
            Terms of use and Privacy Policy.
          </Card.Subtitle>
          <hr className="ml-3 mr-3" />
          <Card.Text
            style={{
              textAlign: "center",
              fontSize: "18px",
              marginBottom: "10px",
              backgroundColor: "white",
            }}
          >
            Have an account?
            <a href="#" className="text-primary">
              {" "}
              Log In
            </a>
          </Card.Text>
        </Card>
      </Container>
    </>
  );
}

export default Signup;
