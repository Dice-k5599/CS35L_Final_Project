import React, { Fragment } from "react";
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

import { useNavigate } from "react-router-dom";
import "./Navbar.css";
// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import "bootstrap/dist/css/bootstrap.min.css";

const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'MyCourses', href: '#', current: false },
    { name: 'MyUCLA', href: '#', current: false },
    { name: 'DARS', href: '#', current: false },
  ]

function Navigationbar(){
    const navigate = useNavigate();

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <>
            <Navbar id="navbar" fixed="top" data-bs-theme="dark" className="">
                <Navbar.Brand href="#home" className="ml-10 white">Home</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link 
                        href="#Dashboard" 
                        onClick={() => {navigate("/dashboard")}}
                        className="rounded-lg hover:bg-white/[.1] hover:text-gray-50"
                    >
                        Dashboard</Nav.Link>
                    <Nav.Link 
                        href="#features"
                        onClick={() => {navigate("/selectionPage")}}
                        className="rounded-lg hover:bg-white/[.1]"
                    >
                        MyClasses</Nav.Link>
                </Nav>
                <Nav className="justify-content-end mr-10">
                    <Nav.Link 
                        href="#signin" 
                        onClick={() => {navigate("/")}}
                        className="justify-content-end rounded-lg hover:bg-white/[.1]"
                    >
                        Sign Out</Nav.Link>
                </Nav>
            </Navbar>
            {/* <nav className="shadow dark:bg-gray-800">
                <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
                    <p href="#" className="border-b-2 border-transparent mb0 hover:text-gray-800 dark:hover:text-gray-200 hover:border-gray-300 mx-1.5 sm:mx-6 cursor-pointer">Dashboard</p>

                    <p href="#" className="border-b-2 border-transparent mb0 hover:text-gray-800 dark:hover:text-gray-200 hover:border-gray-300 mx-1.5 sm:mx-6 cursor-pointer">MyCourses</p>

                    <p href="#" className="border-b-2 border-transparent mb0 hover:text-gray-800 dark:hover:text-gray-200 hover:border-gray-300 mx-1.5 sm:mx-6 cursor-pointer">About Us</p>

                    <p href="#" className="border-b-2 border-transparent mb0 hover:text-gray-800 dark:hover:text-gray-200 hover:border-gray-300 mx-1.5 sm:mx-6 cursor-pointer">Log Out</p>
                </div>
            </nav> */}
        </>
        
      );
}

export default Navigationbar;