import React from 'react';
import { addToDb, deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import './Cosmetic.css';

const Cosmetic = (props) => {
    // console.log(props.cosmetic);
    const { name, price, id } = props.cosmetic;

    const addToCart = (id) => {
        addToDb(id);
    };

    // const addToCart = (id, name) => {
    //     console.log(`Name: ${name}, Id: ${id}`);
    // };

    // const addToCartWithParam = () => addToCart(id);

    const removeFromCart = id => {
        removeFromDb(id);
    };

    // const deleteCart = id => {
    //     deleteShoppingCart(id);
    // };

    return (
        <div className='product'>
            <h2>Buy  this: {name}</h2>
            <p>Only for: ${price}</p>
            <p><small>It has id: {id}</small></p>
            {/* <button onClick={addToCartWithParam}>Add to cart</button> */}
            {/* <button onClick={() => addToCart(id, name)}>Add to Cart</button> */}
            <button onClick={() => addToCart(id)}>Add to Cart</button>
            <button onClick={() => removeFromCart(id)} >Remove</button>
            {/* <button onClick={()=>deleteCart(id)}>Delete Cart</button> */}
            <button onClick={deleteShoppingCart}>Delete All</button>
        </div>
    );
};

export default Cosmetic;