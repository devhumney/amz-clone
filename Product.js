import React from 'react'
import './Product.css';
import DOUGH from './img/IMAGE1.png'
import { FaEthereum } from "react-icons/fa";




function product({title, image, price, rating }) {
  return (
    <div className='product'>
        <div className="productinfo">

            <a href="#">
              <h3>{ title }</h3>
            <p className="productprice">               
            <span className='pricefont'>{ price }</span>
                <FaEthereum /> 
               <strong>ETH</strong>
                
                </p></a>
 
                <div className="productrating">
                  {Array(rating).fill().map((_,i) => ( <p>⭐️</p>))}
                
                </div>
       
        </div>         
        <a href="#"><img src={ image } alt="" /></a>
        
                <button>Buy NFT</button>
                <button className='secondbutton'>details</button>
        </div>
  )
}

export default product;