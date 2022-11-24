import React, { useState } from 'react';
import useTshirt from '../../Hooks/useTshirt';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css'
const Home = () => {
    const [tshirts, setTshirts]=useTshirt();
    const [carts, setCarts]=useState([]);
    const handleToCart=(selectItem)=>{
       const newCart=[...carts,selectItem];
       setCarts(newCart);
    }
    const handleItemRemove=selectItem=>{
 setCarts([]);
        console.log(selectItem);
    }
    return (
        <div>
           <div className="shop-container">
               <div className="shirt-container">
              
               {
                   tshirts.map(tshirt=><Tshirt 
                    key={tshirt._id}
                    tshirt={tshirt}
                    handleToCart={handleToCart}
                    handleItemRemove={handleItemRemove}
                    ></Tshirt>)
               }
               </div>
               <div className="cart-container">
               <h1>Order Summary</h1>
                  <Cart carts={carts}></Cart>
               </div>
           </div>
        </div>
    );
};

export default Home;