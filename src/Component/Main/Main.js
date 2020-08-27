import React from 'react';
import Products from '../Products/Products';
import DetailsCart from '../DetailsCart/DetailsCart';
import fakeData from '../../fakeData/fakedata'
import { useState } from 'react';
import "./Main.css"
import CartProduct from '../CartProduct/CartProduct';
import Header from '../Header/Header';
const Main = () => {
    const [cart,serCart] =useState([])
    const enrollHandler=(product,a)=>{
        const newProduct=[...cart, product]
        serCart(newProduct);
    }
    const viewCartHandler=()=>{
        document.getElementById('product').classList.add("none");
        document.getElementById('cartProduct').classList.remove("none");
        
    }
     const coursesButtonHandler=()=>{
        document.getElementById('product').classList.remove("none");
        document.getElementById('cartProduct').classList.add("none");
    }

     
     
    console.log(cart);
    return ( 
        <div>
            <Header cart={cart} viewCartHandler={viewCartHandler} coursesButtonHandler={coursesButtonHandler}></Header>
        <div className="container">
            <div className="row">
                <div id="product" className=" col-8 col-md-10 border-right border-dark row  m-0 d-flex justify-content-around ">
                    {
                        fakeData.map(product =><Products  enrollHandler={enrollHandler} key={product.id} product={product}></Products>)
                    }
                </div>
                <div id="cartProduct" className="col-8 col-md-10 border-right border-dark row  m-0 d-flex justify-content-around none">
                   {
                       cart.map(product=><CartProduct  key={product.id} product={product}></CartProduct>)
                   }
                </div>
                <div className="col-4 col-md-2">
                    <DetailsCart viewCartHandler={viewCartHandler} cart={cart}></DetailsCart>
                </div>
            </div>
            
            
            
        </div>
        </div>
    );
};

export default Main;