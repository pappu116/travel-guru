import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Star from "../../Icon/star_1_.png";
import GoogleMap from "../Googlemap/GoogleMap";
import "./Hotel.css";
const Hotel = (props) => {
  const { name, title, about, price, totalPrice, img, star } = props.item;
  return (
    <Container>
      <Row>
        <Col sm={12} className="item-row">
          <div>
            <img src={img} alt="" />
          </div>
          <div className="title">
            <h6>{name}</h6>
            <p>{about}</p>
            <p>{title}</p>
            <img style={{ height: "20px" }} src={Star} alt="" />{" "}
            <span>{star}</span> <span>${price}/night</span>{" "}
            <span>
              <small>${totalPrice}/totall</small>{" "}
            </span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Hotel;
