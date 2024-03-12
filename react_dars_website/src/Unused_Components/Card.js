import React from 'react';

const Card = ({ name, email, id, number, picture }) => {
    return (
        <div className='tc bg-white ba b--yellow bw3 dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={picture}/>
            <div>
                <h2>{name}</h2>
                <h2>{number}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;