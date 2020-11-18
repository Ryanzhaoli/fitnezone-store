import React, { useState } from 'react'
import '../style/Home.css'
import Rating from './Rating'
import { useStateValue } from '../context/StateProvider'
import Product from './Product'

function Home() {
  const [{ products, newProducts }] = useStateValue()

  const [category, setCategory] = useState('')

  const toggleWatch = () => {
    setCategory('Watch')

  }
  const toggleShoes = () => {
    setCategory('Shoes')
  }
  const toggleSocks = () => {
    setCategory('Socks')
  }
  const togglePants = () => {
    setCategory('Pants')
  }

  return (
    <div className='home'>
      <div className='banner'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-md-6 order-last text-center'>
              <h1>
                Fitness is life style !
                <br />
                Do not wait; the time will never be ‘just right.’
              </h1>
              <p>
                {' '}
                Start where you stand, and work with whatever tools you may have
                at your command, better tools will be found as you click the
                button below.
              </p>
              <a href='/#category' className='customBtn'>
                Shop →
              </a>
            </div>
            <div className='col-md-6'>
              <img
                className='img-fluid'
                src='https://raw.githubusercontent.com/jijizaza999/fitnezone-store/master/public/assets/images/image1.png'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>

      <div className='categories' id='category'>
        <div className='container'>
          <h2 className='title'>By Categories</h2>
          <div className='row'>
            <div className='ct col-3'>
              <span type='button' onClick={toggleWatch}>
                <img
                  className='img-fluid'
                  src='https://raw.githubusercontent.com/jijizaza999/fitnezone-store/master/public/assets/images/category-1.jpg'
                  alt=''
                />
                <div className='middle'>
                  <div className='text'>Watch</div>
                </div>
              </span>
            </div>

            <div className='ct col-3'>
              <span type='button' onClick={toggleSocks}>
                <img
                  className='img-fluid'
                  src='https://raw.githubusercontent.com/jijizaza999/fitnezone-store/master/public/assets/images/category-2.jpg'
                  alt=''
                />
                <div className='middle'>
                  <div className='text'>Socks</div>
                </div>
              </span>
            </div>

            <div className='ct col-3'>
              <span type='button' onClick={toggleShoes}>
                <img
                  className='img-fluid'
                  src='https://raw.githubusercontent.com/jijizaza999/fitnezone-store/master/public/assets/images/category-3.jpg'
                  alt=''
                />
                <div className='middle'>
                  <div className='text'>Shoes</div>
                </div>
              </span>
            </div>

            <div className='ct col-3'>
              <span type='button' onClick={togglePants}>
                <img
                  className='img-fluid'
                  src='https://raw.githubusercontent.com/jijizaza999/fitnezone-store/master/public/assets/images/category-4.jpg'
                  alt=''
                />
                <div className='middle'>
                  <div className='text'>Clothing</div>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        {category? <h2 className='title'>{category}</h2>:null}
        <div className='products'>
          <div className='row'>
            {products.map((product) =>
              product.category === category ? (
                <Product
                  name={product.name}
                  price={product.price}
                  id={product._id}
                  image={product.image}
                  rating={product.rating}
                  countInStock={product.countInStock}
                  key={product._id}
                />
              ) : null
            )}
          </div>
        </div>
      </div>

      <div className='container'>
        <h2 className='title'>All Products</h2>
        <div className='products'>
          <div className='row'>
            {products.map((product) => (
              <Product
                name={product.name}
                price={product.price}
                id={product._id}
                image={product.image}
                rating={product.rating}
                countInStock={product.countInStock}
                key={product._id}
              />
            ))}
          </div>
        </div>

        <h2 className='title'>Coming Products</h2>
        <div className='latest-products'>
          <div className='row'>
            {newProducts.map((product) => (
              <div key={product._id} className='col-md-3'>
                <div className='product'>
                  <img className='product-image' src={product.image} alt='' />
                  <h4>{product.name}</h4>
                  <Rating value={product.rating} />
                  <p>${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='offer'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-sm-4 order-sm-last'>
              <img
                className='img-fluid'
                src='https://raw.githubusercontent.com/jijizaza999/fitnezone-store/master/public/assets/images/exclusive.png'
                alt=''
              />
            </div>
            <div className='offset-1 col-sm-4'>
              <p>Future Watch in Fitnezone</p>
              <h1>Extra Large Band</h1>
              <small>
                The mi Smart Band 4 features a 39.9% larger(than Mi Band 3)
                AMOLED color full-touch display with adjustable brightness,
                <br />
                so everything is clear as can be.
              </small>
              <div>
                <span className='customBtn'> Coming Soon </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*----------reviews--------*/}
      <div className='reviews'>
        <div className='container'>
          <h2 className='title'>Store Reviews</h2>
          <div className='row'>
            <div className='col-md-3'>
              <i className='fa fa-quote-left' />
              <p>
                {' '}
                Lorem Ipsum is simple dummy text of the printing and typesetting
                industry.Lorem Ipsum has been the industry's standard dummy text
                ever
              </p>
              <div className='rating'>
                <i className='fa fa-star' aria-hidden='true' />
                <i className='fa fa-star' aria-hidden='true' />
                <i className='fa fa-star' aria-hidden='true' />
                <i className='fa fa-star' aria-hidden='true' />
                <i className='fa fa-star-o' aria-hidden='true' />
              </div>
              <img
                src='https://raw.githubusercontent.com/jijizaza999/fitnezone-store/master/public/assets/images/user-1.jpeg'
                alt=' '
              />
              <h3>Sean Spoon</h3>
            </div>
            <div className='col-md-3'>
              <i className='fa fa-quote-left' />
              <p>
                {' '}
                Lorem Ipsum is simple dummy text of the printing and typesetting
                industry.Lorem Ipsum has been the industry's standard dummy text
                ever
              </p>
              <div className='rating'>
                <i className='fa fa-star' aria-hidden='true' />
                <i className='fa fa-star' aria-hidden='true' />
                <i className='fa fa-star' aria-hidden='true' />
                <i className='fa fa-star' aria-hidden='true' />
                <i className='fa fa-star' aria-hidden='true' />
              </div>
              <img
                src='https://raw.githubusercontent.com/jijizaza999/fitnezone-store/master/public/assets/images/user-2.jpeg'
                alt=' '
              />
              <h3>Jane Gregorio</h3>
            </div>
            <div className='col-md-3'>
              <i className='fa fa-quote-left' />
              <p>
                {' '}
                Lorem Ipsum is simple dummy text of the printing and typesetting
                industry.Lorem Ipsum has been the industry's standard dummy text
                ever
              </p>
              <div className='rating'>
                <i className='fa fa-star' aria-hidden='true' />
                <i className='fa fa-star' aria-hidden='true' />
                <i className='fa fa-star' aria-hidden='true' />
                <i className='fa fa-star' aria-hidden='true' />
                <i className='fa fa-star-o' aria-hidden='true' />
              </div>
              <img
                src='https://raw.githubusercontent.com/jijizaza999/fitnezone-store/master/public/assets/images/user-3.jpeg'
                alt=' '
              />
              <h3>John Dee</h3>
            </div>
          </div>
        </div>
      </div>
      {/*---------brands------------*/}
      <div className='brands'>
        <div className='container'>
          <div className='row'>
            <div className='col-3'>
              <img
                src='https://raw.githubusercontent.com/jijizaza999/fitnezone-store/master/public/assets/images/logo-speedo.jpg'
                alt=''
              />
            </div>
            <div className='col-3'>
              <img
                src='https://raw.githubusercontent.com/jijizaza999/fitnezone-store/master/public/assets/images/logo-essie.png'
                alt=''
              />
            </div>
            <div className='col-3'>
              <img
                src='https://raw.githubusercontent.com/jijizaza999/fitnezone-store/master/public/assets/images/logo-planet.png'
                alt=''
              />
            </div>
            <div className='col-3'>
              <img
                src='https://raw.githubusercontent.com/jijizaza999/fitnezone-store/master/public/assets/images/logo-jollo.png'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
      <div className='scroll-top'>
        <button type='button' className='block'>
          <a href='/#'>
            <i className='fa fa-arrow-right'></i>Scroll Top
          </a>
        </button>
      </div>
    </div>
  )
}
export default Home
