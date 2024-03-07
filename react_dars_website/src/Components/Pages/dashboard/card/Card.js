import React from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";

import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'


function Card(){

    let [isOpen, setIsOpen] = useState(true);

    function closeModal() {
        setIsOpen(false);
    }
    function openModal() {
        setIsOpen(true);
    }
    return (
        <div>
            <fieldset class="checkbox-group">
                <legend class="checkbox-group-legend"></legend>
                <div class="checkbox">
                    <label class="checkbox-wrapper">
                        <input type="checkbox" class="checkbox-input" />
                        <span class="checkbox-tile">
                            <span class="checkbox-label">CS1
                                <div className="">
                                </div>
                            </span>
                        </span>
                    </label>
                </div>
                <div class="checkbox">
                    <label class="checkbox-wrapper">
                        <input type="checkbox" class="checkbox-input"/>
                        <span class="checkbox-tile">
                            <span className="checkbox-label">CS35L</span>
                        </span>
                    </label>
                </div>
                <div class="checkbox">
                    <label class="checkbox-wrapper">
                        <input type="checkbox" class="checkbox-input" />
                        <span class="checkbox-tile">
                            <span class="checkbox-label">CS2</span>
                        </span>
                    </label>
                </div>
                <div class="checkbox">
                    <label class="checkbox-wrapper">
                        <input type="checkbox" class="checkbox-input" />
                        <span class="checkbox-tile">
                            <span class="checkbox-label">CS3</span>
                        </span>
                    </label>
                </div>
                <div class="checkbox">
                    <label class="checkbox-wrapper">
                        <input type="checkbox" class="checkbox-input" />
                        <span class="checkbox-tile">
                            <span class="checkbox-label">CS3</span>
                        </span>
                    </label>
                </div>
                <div class="checkbox">
                    <label class="checkbox-wrapper">
                        <input type="checkbox" class="checkbox-input" />
                        <span class="checkbox-tile">
                            <span class="checkbox-label">CS3</span>
                        </span>
                    </label>
                </div>
            </fieldset>
        </div>
    );
}

export default Card;