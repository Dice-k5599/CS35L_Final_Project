import React from 'react';

 const SearchBar = ({ text, setText, onSearchChange, onButtonPress, onReset }) => { 
    return (
        <div className='flex space-x-4'>
            <div className='flex pa-2'>
                <input 
                    className='p-2 border-2 w-64 border-ucla-blue rounded-md rounded-r-none outline-none hover:cursor-text'
                    type='search' 
                    value={text}
                    setText={setText}
                    placeholder='search classes' 
                    onChange={onSearchChange}
                />
                <button className='white border-2 border-ucla-blue bg-ucla-blue border-2 px-6 text-lg font-smeibold py-2 rounded-md rounded-l-none outline-none active:bg-blue-600'
                        onClick={onButtonPress}
                    >
                        Search
                </button>
            </div>
            <button className="bg-white border-2 px-6 py-2 text-lg font-semibold rounded-md transition hover:bg-gray hover:border-ucla-blue duration-150 ease-in-out" onClick={onReset}>Clear</button>
        </div>
    );
 }

export default SearchBar;
