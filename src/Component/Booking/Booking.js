import React, { useContext } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CategoryContext } from "../../App";
import Datepicker from "../Datepicker/Datepicker";
import "./Booking.css";

const Booking = () => {
  const [category, setCategory] = useContext(CategoryContext);
  return (
    <Container>
      <Row>
        <Col sm={6}>
          <div className="tite-context">
            <h1>{category}</h1>
            <p>
              Contrary to {category}popular belief, Lorem Ipsum is not simply
              random text. It has roots in a piece of classical Latin literature
              from 45 BC, making it over 2000 years old. Richard McClintock, a
              Latin professor at Hampden-Sydney{category} College in Virginia,
              looked up one of the more obscure Latin words, consectetur, from a
              Lorem Ipsum passage, and going {category}through the cites of the
              word in classical literature, {category}discovered the undoubtable
              source. Lorem Ipsum comes from {category}sections 1.10.32 and
              1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good
              and Evil) by Cicero, written {category}in 45 BC. This book is a
              treatise on the theory of ethics, very popular during the
              Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
              amet..", comes from a line in section 1.10.32.
            </p>
          </div>
        </Col>
        <Col sm={5} className="offset-md-1">
          <div className="form-area">
            <Form>
              <Form.Group controlId="formGroupEmail">
                <Form.Label>Origin</Form.Label>
                <Form.Control type="email" placeholder="Your Location" />
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <Form.Label>Destination</Form.Label>
                <Form.Control type="text" defaultValue={category} />
              </Form.Group>

              {/* <Form>
                <Row>
                  <Col>
                    <Form.Label>From</Form.Label>
                    <Form.Control placeholder="First name" />
                  </Col>
                  <Col>
                    <Form.Label>To</Form.Label>
                    <Form.Control placeholder="Last name" />
                  </Col>
                </Row>
              </Form> */}
              <Datepicker></Datepicker>
              <br />
              <Link to="/resturent">
                <Button variant="warning" size="lg" block>
                  Start Booking
                </Button>
              </Link>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Booking;
