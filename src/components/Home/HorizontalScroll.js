import React, { useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './HorizontalScroll.css';
import { Link } from 'react-router-dom';

const HorizontalScroll = () => {
  // Use useRef to get references to DOM elements
  const scrollContainerRef = useRef(null);

  const handleScroll = (evt) => {
    evt.preventDefault();
    scrollContainerRef.current.scrollLeft += evt.deltaY;
    scrollContainerRef.current.style.scrollBehavior = "auto";
  };

  const handleNextClick = () => {
    scrollContainerRef.current.style.scrollBehavior = "smooth";
    scrollContainerRef.current.scrollLeft += 500;
  };

  const handleBackClick = () => {
    scrollContainerRef.current.style.scrollBehavior = "smooth";
    scrollContainerRef.current.scrollLeft -= 500;
  };

  return (
    <div>
      <div className='gallery-wrap'>
        <FaArrowLeft  className='left' onClick={handleBackClick} />
        <div className='gallery' onWheel={handleScroll} ref={scrollContainerRef}>
          <div>
            <span>
              <Link to='/your-link'>
                <img src='/Resources/category/c1.png' alt='oops' />
              </Link>
              <div className='name-tag'>T-shirts</div>
            </span>
            <span>
            <Link>
              <img src='\Resources\category\c2.png' alt='oops' />
            </Link>
            <div className='name-tag'>Sweatshirt</div></span>
          <span>
            <Link>
              <img src='\Resources\category\c3.png' alt='oops' />
            </Link>
            <div className='name-tag'>Hoodies</div></span>
            <span><img src='\Resources\category\c4.png' alt='oops' /><div className='name-tag'>Joggers</div></span>
           <span><img src='\Resources\category\c5.png' alt='oops' /><div className='name-tag'>Shorts</div></span>
        </div>
        </div>
        <FaArrowRight className='right' onClick={handleNextClick} />
      </div>
    </div>
  );
};

export default HorizontalScroll;

