import React from 'react';
import './Cart.css';
import {  TrashIcon } from '@heroicons/react/solid'
const Cart = ({carts,handleItemRemove}) => {

  
    return (
        <div>
           {
               carts.map(tshirt=><div className='cart'>
                   <img src={tshirt.picture} alt="" />
                   <p>{tshirt.name} </p>
                     <TrashIcon onClick={ handleItemRemove} className='trush'></TrashIcon> 
               </div>


               )
           }
            
        </div>
    );
};

export default Cart;