import React from 'react';
import "./Header.css";
import logo from '../../logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShoppingBag } from '@fortawesome/free-solid-svg-icons'

const Header = (props) => {
    
    return (
        <div className="header p-4">
            <div className="container ">
                <div className="row">
                <div className="col-4">
                    <img src={logo} height="70" alt="logo"/>
                </div>
                <div className="col-8  ">
                    <nav className="d-flex justify-content-end">
                        
                        <button className="button" onClick={props.coursesButtonHandler}>Home</button>
                        <button className="button" onClick={props.coursesButtonHandler}>All Courses</button>
                        <button onClick={props.viewCartHandler} className='cart'><FontAwesomeIcon icon={faShoppingBag} /> </button>
                        <span className="cartTag ">{props.cart.length}</span>
                    </nav>
                    
                </div>
                </div>

            </div>
            
        </div>
        
    );
};

export default Header;