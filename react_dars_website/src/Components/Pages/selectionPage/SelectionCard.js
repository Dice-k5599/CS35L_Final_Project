import React from "react";
import { useNavigate } from "react-router-dom";
import "./SelectionCard.css";

// import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'


const SelectionCard = ({ checked, onChange, label }) => {

    let [isOpen, setIsOpen] = useState(false);

    function closeModal() {
        setIsOpen(false);
    }
    function openModal() {
        setIsOpen(true);
    }
    return (
        <>
            <div 
                className="checkbox ma2"
                // onClick={openModal}
                >
                <label className="checkbox-wrapper">
                    <input 
                        type="checkbox" 
                        class="checkbox-input" 
                        checked={checked}
                        onChange={onChange}
                    />
                    <span className="checkbox-tile">
                        <span className="checkbox-label mr4 ml4">{label}</span>
                    </span>
                </label>
            </div>
        </>
    );
}

export default SelectionCard;