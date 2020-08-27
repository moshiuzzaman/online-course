import React from 'react';

const DetailsCart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((allcart, cart)=> cart.price+allcart , 0)
    return (
        <div className="mt-3">
            <h3>Cart Details</h3>
            <h5>added: {cart.length}</h5>
            <p className="font-weight-bold text-primary"> Total Price : ${total}</p>
            <button onClick={props.viewCartHandler} className="btn btn-info px-1">View Added Course</button>

        </div>
    );
};

export default DetailsCart;