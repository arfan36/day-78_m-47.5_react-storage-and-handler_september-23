import React from 'react';

const Cosmetic = (props) => {
    console.log(props.cosmetic);
    const { name, price, id } = props.cosmetic;
    return (
        <div style={{border: "2px solid lightblue", margin: "10px"}}>
            <h2>Buy  this: {name}</h2>
            <p>Only for: ${price}</p>
            <p><small>It has id: {id}</small></p>
        </div>
    );
};

export default Cosmetic;