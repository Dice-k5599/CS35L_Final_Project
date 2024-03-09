import React from "react";
//import { useNavigate } from "react-router-dom";
import "./SelectionCard.css";

//import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'


function SelectionCard({ checked, onChange, label }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="selection-card ma2" onClick={toggleModal}>
                <label className="selection-card-wrapper">
                    <input
                        type="checkbox"
                        className="selection-card-input"
                        checked={checked}
                        onChange={onChange}
                    />
                    <span className="selection-card-tile">
                        <span className="selection-card-label">{label}</span>
                    </span>
                </label>
            </div>
        </>
    );
}

export default SelectionCard;