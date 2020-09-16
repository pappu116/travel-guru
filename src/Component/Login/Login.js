import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./Login.css";

const Login = () => {
  return (
    <Container>
      <Row>
        <Col sm={6} className="logggedin-from offset-md-3">
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>
                <h1>Login</h1>
              </Form.Label>
              <Form.Control type="email" placeholder="User Or Email" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember Me" />
              <span className="text-warning">Forgot Password</span>
            </Form.Group>
            <Button variant="primary" type="submit" size="lg" block>
              Login
            </Button>
            <br />
            <p className="text-center">
              Don't have an account?{" "}
              <span className="text-warning">Create an account</span>{" "}
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
