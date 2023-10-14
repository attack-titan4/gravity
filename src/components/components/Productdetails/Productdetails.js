import React from 'react'
import { FaCartPlus } from 'react-icons/fa'
import "./Productdetails.css"

const Productdetails = () => {
  
  return (
    <div className='single-product-main'>
      <div className="layout">
        <div className="single-product-page">
          <div className="left-p"><img src='\Resources\productimages\p2.png' alt='opps'/></div>
          <div className="right-p">
            <span className='name'>Regular Fit Hoodie</span>
            <div className='price'> Rs. 2,299.00</div>
            <div className='size'>Sizes</div>

            <div className='size-btn'>
              <button className='btn'>S</button>
              <button className='btn'>M</button>
              <button className='btn'>L</button>
              <button className='btn'>XL</button>
            </div>

            <div className='size-guide'>Size Guide</div>

              <div className='cart-btn'>
                <div className='quantity-btn'>
                  <span>-</span>
                  <span>2</span>
                  <span>+</span>
                </div>
                <button className='add-to-cart'>
                  <FaCartPlus size={20}/>
                  ADD TO CART
                </button>
              </div>

              <div className='info'>
                <span className='desc'>Description</span>
                <span className='product-care'>Product Care</span>
              </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Productdetails