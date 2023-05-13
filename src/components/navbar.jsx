import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


function Navbarr() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>SoftKitchen !</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link href="/">Home</Nav.Link> */}
            <Link to={`/`} className="btn btn-dark btn-block mt-3">Home</Link>
            {/* <Nav.Link to={`/platos`}>Platos</Nav.Link>
            <Nav.Link to="/ingredientes">Ingredientes</Nav.Link> */}
            <Link to={`/`} className="btn btn-dark btn-block mt-3">Pedir</Link>
            <Link to={`/`} className="btn btn-dark btn-block mt-3">Ordenar</Link>

          </Nav>
        </Container>
      </Navbar>
      
    </>
  );
}

export default Navbarr;