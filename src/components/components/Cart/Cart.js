import React from 'react'
import "./Cart.css"
import { FaCartArrowDown, FaCartPlus, FaShoppingCart, FaTimes } from 'react-icons/fa'
import Cartitem from './Cartitem'

const Cart = ({setShowCart}) => {
  return (
    <div className='cart-panel'>
        <div className='opac-layer'></div>
        <div className='cart-content'>
            <div className='cart-header'>
                <span className='heading'>Shopping Cart</span>
                <span className='close-btn' onClick={()=> setShowCart(false)}>
                    <FaTimes size={"18px"}/>
                    <span className='close'>Close</span>
                </span>
            </div>
            <div className='empty-cart'>
                <FaShoppingCart className='empty-cart-icon'/>
                <span>No Product in the Cart.</span>
                <button className='return-btn'>RETURN TO SHOP</button>
            </div>
            <>
                {/* <Cartitem/>
                <div className='cart-footer'>
                    <div className='subtotal'>
                        <span className='sub-total'>Subtotal</span>
                        <span className='total-text'>&#8377;1234</span>
                    </div>
                    <div className='checkout'>
                        <button className='checkout-btn'>Checkout</button>
                    </div>
                    
                </div>    */}
            </>
        </div>

        
      
    </div>
  )
}

export default Cart
