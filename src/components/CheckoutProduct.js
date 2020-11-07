import React from 'react';
import { useStateValue } from "../context/StateProvider";
import Rating from './Rating';


function CheckoutProduct({ id, name, image, price, rating, hideButton}) {
    const [{basket}, dispatch] = useStateValue();
   

    const removeFromBasket = () => {

        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
         <div className='row align-items-center mb-5'>
            <img className="product_image text-center " src={image} width="200" height="auto" />
       
            <div className='col'>
                <p className='checkoutProduct__title'>{name}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                     <Rating value={rating}/>
                </p>
                {!hideButton && (
                 
                    <button className="btn btn-danger btn-sm" 
                    onClick={removeFromBasket}>Remove from Basket</button>
                  
                )}
            </div>
        </div>

    )
}

export default CheckoutProduct