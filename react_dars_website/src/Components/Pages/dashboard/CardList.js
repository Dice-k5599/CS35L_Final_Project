import React from "react";
import { useNavigate } from "react-router-dom";
import { Dialog, Transition } from '@headlessui/react'

// components import
import Navigationbar from "./Navbar";
import Card from "./Card";

function CardList(){
    const navigate = useNavigate();

    return (
        <div className="flex flex-row flex-wrap">        
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    );
}

export default CardList;