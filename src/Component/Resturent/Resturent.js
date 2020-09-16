import { Container } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { CategoryContext } from "../../App";
import fakeData from "../../fakeData";
import GoogleMap from "../Googlemap/GoogleMap";
import Hotel from "../Hotel/Hotel";

const Resturent = () => {
  const [category, setCategory] = useContext(CategoryContext);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // console.log(category);
    const matchedProducts = fakeData.filter(
      (pd) => pd.category === category.toLowerCase()
    );
    setProducts(matchedProducts);
    console.log(matchedProducts);
  }, [category]);
  return (
    <Container className="bg-light">
      <Row>
        <Col sm={6}>
          <h1>Stay in {category}</h1>
          {products.map((rst) => (
            <Hotel item={rst} key={rst.key}></Hotel>
          ))}
        </Col>
        <Col sm={6}>
          <GoogleMap></GoogleMap>
        </Col>
      </Row>
    </Container>
  );
};

export default Resturent;
