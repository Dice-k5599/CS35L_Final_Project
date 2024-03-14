import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import {Auth} from "../loginPage/auth";

import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import "bootstrap/dist/css/bootstrap.min.css";

function Navigationbar(){
    const navigate = useNavigate();
    const [showLogOutAuth, setShowLogOutAuth] = useState(false);

    useEffect(() => {
        if (showLogOutAuth) {
          setShowLogOutAuth(false);
          navigate("/");
        }
    }, [showLogOutAuth]);

    
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <>
            <Navbar id="navbar" fixed="top" data-bs-theme="dark" className="h-14">
                <Navbar.Brand href="#" className="ml-10 white">Home</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link 
                        href="" 
                        onClick={() => {navigate("/dashboard")}}
                        className="rounded-lg hover:bg-white/[.1] hover:text-gray-50"
                    >
                        Dashboard</Nav.Link>
                    <Nav.Link 
                        href=""
                        onClick={() => {navigate("/selectionPage")}}
                        className="rounded-lg hover:bg-white/[.1]"
                    >
                        MyClasses</Nav.Link>
                        <Nav.Link 
                        href="https://be.my.ucla.edu/studylist.aspx"
                        target="_blank"
                        onClick={() => {navigate("/selectionPage")}}
                        className="rounded-lg hover:bg-white/[.1]"
                    >
                        MyUCLA</Nav.Link>
                </Nav>
                <Nav className="justify-content-end mr-10">
                    <Nav.Link 
                        href="#signin" 
                        onClick={() => {
                            setShowLogOutAuth(true);
                        }}
                        className="justify-content-end rounded-lg hover:bg-white/[.1]"
                    >
                        Sign Out</Nav.Link>
                </Nav>
            </Navbar>
            {showLogOutAuth && (
                        <Auth
                            loginType={"logout"}
                        />
                    )}
        </>
        
      );
}

export default Navigationbar;