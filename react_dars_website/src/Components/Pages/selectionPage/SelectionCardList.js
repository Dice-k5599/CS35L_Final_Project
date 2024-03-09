import React from "react";
import { useNavigate } from "react-router-dom";
import { Dialog, Transition } from '@headlessui/react'

// components import
import Card from "../dashboard/Card";
import SelectionCard from "./SelectionCard";

function SelectionCardList(){
    const navigate = useNavigate();

    return (
        <div className="flex flex-row flex-wrap">        
            <SelectionCard />
            <SelectionCard />
            <SelectionCard />
            <SelectionCard />
            <SelectionCard />
            <SelectionCard />
            <SelectionCard />
            <SelectionCard />
            <SelectionCard />
            <SelectionCard />
            <SelectionCard />
            <SelectionCard />
        </div>
    );
}

export default SelectionCardList;