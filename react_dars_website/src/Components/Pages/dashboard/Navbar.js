import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import "bootstrap/dist/css/bootstrap.min.css";

function Navigationbar(){
    const navigate = useNavigate();

    return (
        <>
            <Navbar id="navbar" fixed="top" data-bs-theme="dark">
                <Navbar.Brand href="#home" className="ml-10">Home</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Dashboard</Nav.Link>
                    <Nav.Link href="#features">Classes</Nav.Link>
                </Nav>
                <Nav className="justify-content-end mr-10">
                    <Nav.Link href="#signin" className="justify-content-end">Sign Out</Nav.Link>
                </Nav>
            </Navbar>
        </>
      );
}

export default Navigationbar;