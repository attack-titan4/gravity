import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Cartitem = () => {
  return (
    <div className='cart-products'>
      <div className='cart-product'>
        <div className='image-container'>
            <img src='\Resources\productimages\p2.png' alt='oops'/>
        </div>
        <div className='prod-details'>
            <span className='prod-name'>Product name</span>
            <FaTimes className='prod-close'/>
            <div className='prod-quantity-btn'>
                  <span>-</span>
                  <span>2</span>
                  <span>+</span>
            </div>
            <div className='prod-m-text'>
                <span>3</span>
                <span>x</span>
                <span>&#8377;999</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Cartitem
