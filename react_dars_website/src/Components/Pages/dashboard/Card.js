import React from "react";
import { useNavigate } from "react-router-dom";
// import "./Card.css";

import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'


function Card({ label, description, className }){

    let [isOpen, setIsOpen] = useState(false);

    function closeModal() {
        setIsOpen(false);
    }
    function openModal() {
        setIsOpen(true);
    }
    return (
        <>
            <div>
                <div
                    className="m-2 w-64 h-32 shrink-0 rounded-md border-1 border-zinc-400 bg-state-50 flex justify-center items-center text-md font-medium text-zinc-400 hover:text-white hover:bg-ucla-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 active:bg-blue-600 transition duration-150 ease-in-out hover:scale-110"
                    onClick={openModal}
                    >
                        <div className="mr4 ml4">
                            {label}
                        </div>
                </div>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                        <Dialog.Title
                            as="h3"
                            className="text-lg font-medium leading-6 text-gray-900"
                        >
                            {className}
                        </Dialog.Title>
                        <div className="mt-2">
                            <p className="text-sm text-gray-500">
                                {description}
                            </p>
                        </div>

                        <div className="mt-4">
                            <button
                            type="button"
                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={closeModal}
                            >
                            Close
                            </button>
                        </div>
                        </Dialog.Panel>
                    </Transition.Child>
                    </div>
                </div>
                </Dialog>
            </Transition>
            {/* <div 
                className="checkbox ma2 hover:bg-blue"
                onClick={openModal}
                >
                <label className="checkbox-wrapper">
                    <input type="checkbox" class="checkbox-input hover:bg-blue" />
                    <span className="checkbox-tile">
                        <span className="checkbox-label">CS3</span>
                    </span>
                </label>
            </div> */}
        </>
    );
}

export default Card;