import React from "react";
import "./SelectionCard.css";

// import { Dialog, Transition } from '@headlessui/react'


const SelectionCard = ({ checked, onChange, label }) => {

    return (
        <>
            <div 
                className="checkbox ma2"
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