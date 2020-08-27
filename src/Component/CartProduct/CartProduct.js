import React from 'react';

const CartProduct = (props) => {
        
            const {name, price, teacher, time,img}=props.product;
    
    return (
        <div className="border border-dark col-md-5 m-2 p-0">
            <div>
                <img className="w-100 productImage" src={img} alt=""/>
                <div className="p-2">
                    <h4 className="font-weight-bold text-success">{name}</h4>
                    <p>By : {teacher}</p>
                    <p>Course Duration : {time}Days</p>
                    <h5 className="font-weight-bold ">Price : ${price}</h5>
                    <button className="btn btn-danger btn-block" >Delete</button>
                </div>
            </div>
        </div>
        
    );
};

export default CartProduct; 