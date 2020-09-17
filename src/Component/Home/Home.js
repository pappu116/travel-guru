import React, { useContext, useState } from "react";
import "./Home.css";
import CoxBazer from "../../Image/Sajek.png";
import SreeMongol from "../../Image/Sreemongol.png";
import SundorBon from "../../Image/sundorbon.png";
import { Button, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { CategoryContext } from "../../App";
import { Link } from "react-router-dom";
import { Container } from "@material-ui/core";
const Home = () => {
  const [category, setCategory] = useContext(CategoryContext);

  return (
    <Container className="item mt-5">
      <Row>
        <Col sm={4} className="item-text">
          <h1>{category}</h1>
          <p>
            {category} Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Accusantium minus soluta doloribus id est repellat sapiente cum modi
            reprehenderit ex a, sit provident, magni {category}sed atque unde
            labore. Voluptates, ducimus. ex a,{category} sit provident, magni
            sed atque unde labore. Voluptates, ducimus.
          </p>
          <Link to="/booking">
            <Button variant="warning">
              Booking <FontAwesomeIcon icon={faArrowRight} />
            </Button>
          </Link>
        </Col>
        {/* <div class="">
        <img src="img_avatar.png" alt="Avatar" className="image">
          <h2 className="overlay">My Name is John</h2>
          </div> */}
        <Col md={8} className="item-area">
          <div className="img1" onClick={() => setCategory("cox'sbazzer")}>
            <img src={CoxBazer} alt="" className="image" />
            <h2 className="overlay">Cox's Bazer</h2>
          </div>
          <div className="img2" onClick={() => setCategory("sreemangal")}>
            <img src={SreeMongol} alt="" className="image" />
            <h2 className="overlay">Sree Mongol</h2>
          </div>
          <div className="img3" onClick={() => setCategory("sundorbon")}>
            <img src={SundorBon} alt="" className="image" />
            <h2 className="overlay">Sundor Bon</h2>
          </div>
          {/* <img src={SreeMongol} alt="" className="img2" />
        <img src={SundorBon} alt="" className="img3" /> */}
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
