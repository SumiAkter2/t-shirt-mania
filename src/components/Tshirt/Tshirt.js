import React from 'react';
import './Tshirt.css'
const Tshirt = ({handleToCart,tshirt}) => {
    const {price,picture, name}=tshirt;


    return (
        <div className=' t-shirt'>
            
            <img src={picture} alt="" />
            <h1>{name}</h1>
            <h2>$ {price}</h2>
            <button onClick={()=>handleToCart(tshirt)} className='add-btn'>Add To Cart</button>
        </div>
    );
};

export default Tshirt;