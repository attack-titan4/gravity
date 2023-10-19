import React from 'react'
import { FaCartPlus } from 'react-icons/fa'
import "./Productdetails.css"

const Productdetails = () => {
  
  return (
    <div className='single-product-main'>
      <div className="layout">
        <div className="single-product-page">
          <div className="left-p">
            <div>
              <img src='\Resources\productimages\p2.png' alt='opps'/>
            </div>

            <div className='product-image-list'>
              <img src='\Resources\productimages\p2.png' alt='opps'/>
              <img src='\Resources\productimages\p2.png' alt='opps'/>
              <img src='\Resources\productimages\p2.png' alt='opps'/>
              <img src='\Resources\productimages\p2.png' alt='opps'/>
            </div>
            
          </div>
          <div className="right-p">
            <span className='name'>EVOSPEED 2.0 SL</span>
            <div className='style-num'>STYLE NUMBER 204823.17 </div>
            <div className='real-price'> Rs. 2,299.00</div>
            <div className='discount-price'>Rs. 1,299.00</div>
            <div className='size'>Size Chart</div>

            <div className='size-btn'>
              <div className='btn'>S</div>
              <div className='btn'>M</div>
              <div className='btn'>L</div>
              <div className='btn'>XL</div>
            </div>

            <div className='color'>Color</div>
            <div className='colors'>
              <span className='red'></span>
              <span className='orange'></span>
              <span className='blue'></span>
              <span className='black'></span>

            </div>

            {/* <div className='size-guide'>Size Guide</div> */}

              <div className='cart-btn'>
                {/* <div className='quantity-btn'>
                  <span>-</span>
                  <span>2</span>
                  <span>+</span>
                </div> */}
                <button className='buy-now'>BUY NOW</button>
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