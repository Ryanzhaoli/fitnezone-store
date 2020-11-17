import React from "react";
import Subtotal from "./Subtotal";
import { useStateValue } from "../context/StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Basket() {
  const [{basket}] = useStateValue();
 
 
  
  if(basket.length === 0)
  return <div className="mt-5 mb-5">
   <h3 style={{textAlign: "center", fontSize: "5rem",}}>Basket Is Empty</h3>
   </div>
   

 
 return (
   <div className='container'>
     <div className='row'>
       <div>
         <h3>Hello, </h3>
         <h2 className='checkout__title'>Your shopping Basket : </h2>
         <div className='col offset-1'>
           {basket.map((item) => (
               <CheckoutProduct
                 id={item.id}
                 image={item.image}
                 price={item.price}
                 rating={item.rating}
                 name={item.name}
               />
           ))}
         </div>
       </div>
     </div>

     <div className='text-center mb-5'>
       <Subtotal />
     </div>
   </div>
 )
}

export default Basket;