import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/Home.css";
import Rating from './Rating';
import { useStateValue } from "../context/StateProvider";
import Product from './Product';


function Home() {

  const [{products,newProducts}] = useStateValue();

 

 return (
    <div className="home">
      <div className="banner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 order-last text-center">
              <h1>
                 Fitness is life style !
                <br />
                Do not wait; the time will never be ‘just right.’
              </h1>
              <p> Start where you stand,
               and work with whatever tools you may have at your command, 
              better tools will be found as you click the button below.
              </p>
              <a href="#category" className="customBtn">
                Shop →
              </a>
            </div>
            <div className="col-md-6">
              <img className="img-fluid" src="/images/image1.png" />
            </div>
          </div>
        </div>
      </div>
     
      <div className="categories" id="category">
        <div className="container">
          <h2 className="title">Categories</h2>
          <div className="row">
            <div className="ct col-md-3">
             <Link to={''}> 
                 <img className="img-fluid"  src="/images/category-1.jpg" />
                    <div class="middle">
                          <div class="text">Watch</div>
                    </div>
               </Link>
            </div>
            <div className="ct col-md-3">
            <Link to={''}> 
              <img className="img-fluid" src="/images/category-2.jpg" />
              <div class="middle">
                    <div class="text">Socks</div>
                </div>
                </Link>
            </div>
            <div className="ct col-md-3">
            <Link to={''}> 
              <img className="img-fluid" src="/images/category-3.jpg" />
               <div class="middle">
                    <div class="text">Shoes</div>
                </div>
                </Link>
            </div>
            <div className="ct col-md-3">
            <Link to={''}> 
               <img className="img-fluid" src="/images/category-4.jpg" />
               <div class="middle">
                    <div class="text">Clothing</div>
                </div>
                </Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container">
        <h2 className="title">Hottest Products</h2>
        
        
        <div className="products">
        <div className="row">
         {products.map(product =>
           <Product name={product.name} 
                    price={product.price}
                    id={product._id} 
                    image={product.image}
                    rating={product.rating}
                    countInStock={product.countInStock}
       />  ) }
    </div>
  </div>    
   
   <h2 className="title">Future Products</h2>
        <div className="latest-products">
          <div className="row">
          {newProducts.map(product =>
          <div  key={product._id} class="col-md-3">
            <div className="product">
                <img className="product-image" src={product.image}/>
                <h4>{product.name}</h4>
                  <Rating value={product.rating}/>
                  <p>${product.price}</p>
                  
              </div>
           </div>
                )  
              }
         </div>
        </div>
    </div>
  
      <div className="offer">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-4 order-sm-last">
              <img className="img-fluid" src="/images/exclusive.png"/>
            </div>
            <div className="offset-1 col-sm-4">
                
              <p>Future Watch in Fitnezone</p>
              <h1>Extra Large Band</h1>
              <small>The mi Smart Band 4 features a 39.9%
                larger(than Mi Band 3) AMOLED color full-touch 
                display with adjustable brightness,<br />so everything is clear as 
                can be.</small>
              <div>
                <span href className="customBtn"> Coming Soon </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*----------reviews--------*/}
      <div className="reviews">
        <div className="container">
          <h2 className="title">Store Reviews</h2>
          <div className="row">
            <div className="col-md-3">
              <i className="fa fa-quote-left" />
              <p> Lorem Ipsum is simple dummy text of the printing and typesetting
                industry.Lorem Ipsum has been the industry's standard dummy text ever 
              </p>
              <div className="rating">
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star-o" aria-hidden="true" /> 
              </div>
              <img src="/images/user-1.jpeg" />
              <h3>Sean Spoon</h3>
            </div>     
            <div className="col-md-3">
              <i className="fa fa-quote-left" />
              <p> Lorem Ipsum is simple dummy text of the printing and typesetting
                industry.Lorem Ipsum has been the industry's standard dummy text ever 
              </p>
              <div className="rating">
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
                <i className="fa fa-star" aria-hidden="true" />
              </div>
                <img src="/images/user-2.jpeg" />
                <h3>Jane Gregorio</h3>
             </div> 
             <div className="col-md-3">
                <i className="fa fa-quote-left" />
                <p> Lorem Ipsum is simple dummy text of the printing and typesetting
                  industry.Lorem Ipsum has been the industry's standard dummy text ever 
                </p>
                <div className="rating">
                    <i className="fa fa-star" aria-hidden="true" />
                    <i className="fa fa-star" aria-hidden="true" />
                    <i className="fa fa-star" aria-hidden="true" />
                    <i className="fa fa-star" aria-hidden="true" />
                    <i className="fa fa-star-o" aria-hidden="true" /> 
                </div>
                <img src="/images/user-3.jpeg" />
              <h3>John Dee</h3>
              </div>   
            </div>
          </div>
        </div>
        {/*---------brands------------*/}
        <div className="brands">
           <div className="container">
              <div className="row">
                <div className="col-3">
                   <img src="/images/logo-speedo.jpg" />
                </div>
              <div className="col-3">
                <img src="/images/logo-essie.png" />
              </div>
              <div className="col-3">
                <img src="/images/logo-planet.png" />
              </div>
              <div className="col-3">
                <img src="/images/logo-jollo.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-top">
          <button type="button" className="block">
             <a href="#"><i className="fa fa-arrow-right"></i>Scroll Top</a>
          </button>
        </div>

    </div>
  );
}
export default Home;
