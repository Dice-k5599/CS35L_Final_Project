import React from 'react';

 const SearchBox = ( { searchfield, searchChange }) => {
    return (
        <div className='pa2'>
            <input 
                className='pa3 ba b--purple bw2 br-pill'
                type='search' 
                placeholder='search players' 
                onChange={searchChange}
            />
        </div>
    );
 }

export default SearchBox;