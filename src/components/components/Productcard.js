import React from 'react';
import './Productcard.css';
import { Link } from 'react-router-dom';

const Productcard = () => {
  return (
    <div className='product-container'>
      <div className='product'>
        <div className='thumbnail'>
            <img src='\Resources\productimages\p1.png' alt='ops'/>
        </div>
        <div className='prod-details'>
          <span className='name'>Product Name</span>
          <span className='price'>&#8377;999</span>
        </div>
        <button>Buy Now</button>
      </div>

      <div className='product'>
        
        <div className='thumbnail'>
        <Link to="/product">
          <img src='\Resources\productimages\p2.png' alt='ops'/>
        </Link>
        </div>
        <div className='prod-details'>
          <span className='name'>Product Name</span>
          <span className='price'>&#8377;999</span>
        </div>
        <button>Buy Now</button>
      </div>

      <div className='product'>
        <div className='thumbnail'>
            <img src='\Resources\productimages\p3.png' alt='ops'/>
        </div>
        <div className='prod-details'>
          <span className='name'>Product Name</span>
          <span className='price'>&#8377;999</span>
        </div>
        <button>Buy Now</button>
      </div>

      <div className='product'>
        <div className='thumbnail'>
            <img src='\Resources\productimages\p4.png' alt='ops'/>
        </div>
        <div className='prod-details'>
          <span className='name'>Product Name</span>
          <span className='price'>&#8377;999</span>
        </div>
        <button>Buy Now</button>
      </div>
    </div>
  );
};

export default Productcard;