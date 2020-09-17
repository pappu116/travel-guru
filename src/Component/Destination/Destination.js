import { Container } from "@material-ui/core";
import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { CategoryContext } from "../../App";
import Mapp from "../Map/Mapp";

const DEstination = () => {
  const [category, setCategory] = useContext(CategoryContext);
  const overflowy = {
    overflow: "hidden",
    backgroundColor: "#ddd",
  };
  return (
    <Container style={overflowy}>
      <Row>
        <Col sm={6} className="bg-light">
          <h1>Your And {category}</h1>
          <h2>Family Travel How Saved {category}</h2>
          <p>
            {category} Lorem ipsum dolor sit, {category}amet consectetur
            adipisicing elit. Distinctio molestias voluptatem, temporibus
            deleniti, culpa, quo laboriosam quae possimus aut facere{category}{" "}
            voluptatibus harum? Expedita{category} autem doloribus{category}{" "}
            quis? Aliquam obcaecati, nam, assumenda debitis minus,{category}{" "}
            possimus sint iure amet harum quod rerum. Ab quas{category} fugiat
            tempore dolores illum, quisquam ex tenetur mollitia{category} vel!
          </p>
          <h2>Seciurity of {category}</h2>
          <p>
            {category} Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Unde laboriosam sapiente{category} voluptatem ullam illum animi
            dicta itaque fugiat,{category} debitis aliquam repellat magnam ad
            officia deserunt {category}maiores velit porro eaque et?
          </p>
          <h2>{category}Place NIT</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
            id eveniet ex ullam fugit,{category} harum beatae reprehenderit quos
            enim repellat sequi quidem unde laboriosam iure {category}quis optio
            cumque magni aliquid nisi quaerat! {category}Vero pariatur molestiae
            dolore doloremque vitae officia quibusdam{category} inventore
            accusamus quae! Quibusdam {category}et fugit ipsum voluptatum vel!
            {category} Doloremque eligendi atque at libero adipisci assumenda
            vel {category}unde iusto? Alias numquam enim ea quod nesciunt minus
            iure quaerat quo {category}ipsam officia similique quibusdam,
            {category} unde officiis molestias. Voluptate itaque exercitationem
            fuga.
          </p>
        </Col>
        <Col sm={6}>
          <Mapp></Mapp>
        </Col>
      </Row>
    </Container>
  );
};

export default DEstination;
