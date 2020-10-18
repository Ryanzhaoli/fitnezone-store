import React from 'react';
import "../style/Home.css";
import Rating from './Rating';
import { useStateValue } from "../context/StateProvider";




function Product(props) {
   
 const [,dispatch] = useStateValue();

  const addToBasket = () => {
            dispatch({
            type: "ADD_TO_BASKET",
            item:{
             id:props.id,
             image:props.image,
             price:props.price,
             rating:props.rating,
             name:props.name,
           
              }
            })
        }
        
    
    return (
        <div key={props.id} class="col-md-3 my-3 ">
           <div className="product">
              <img className="product-image" src={props.image} alt=""/>
                 <Rating value={props.rating}/>
              <p>${props.price}</p>
              <h4>{props.name}</h4>
              <button onClick={addToBasket} className="btn btn-primary">Add to Basket</button>
           </div>
        </div>
    
    )
}

export default Product;

    
    
