import React from "react";
import "./Header.css";
import Logo from "../../Logo.png";
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar variant="light" className="navbar-area">
        <Navbar.Brand href="#home">
          <img src={Logo} alt="" style={{ height: "50px" }} />
        </Navbar.Brand>

        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        </Form>
        <Nav className="ml-auto ">
          <Nav.Link className="text-dark">
            <Link to="/news">News</Link>
          </Nav.Link>

          <Nav.Link className="text-dark">
            <Link to="/destination">Destination</Link>
          </Nav.Link>

          <Nav.Link className="text-dark">
            <Link to="/blog">Blog</Link>
          </Nav.Link>

          <Nav.Link className="text-dark">
            <Link to="/contact">Contact</Link>
          </Nav.Link>

          <Link to="/login">
            <Button variant="warning">Login</Button>
          </Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default Header;
