import React from 'react';
import "./Products.css"

const Products = (props) => {
    const {name, price, teacher, time,img}=props.product;
    const enrollHandler=props.enrollHandler;
    return (
        <div className="border border-dark col-md-5 m-2 p-0 ">
            <div>
            <img className="w-100 productImage" src={img} alt=""/>
            <div className="p-2">
            <h4 className="font-weight-bold text-info">{name}</h4>
            <p><span className="text-info">By :</span> {teacher}</p>
            <p><span className="text-info">Course Duration :</span> {time}Days</p>
            <h5 className="font-weight-bold ">Price : ${price}</h5>
            <button  className="btn btn-info btn-block" onClick={()=>enrollHandler(props.product)}>Enroll Now</button>
            </div>
            </div>
        </div>
    );
};

export default Products;