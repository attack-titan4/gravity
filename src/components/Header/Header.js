import React, { useState } from 'react'
import "./Header.css"
import { NavLink, Link} from 'react-router-dom'
import {FaBars, FaSearch, FaShoppingCart, FaTimes, FaUser} from 'react-icons/fa'
import Cart from '../Cart/Cart'

const Header = () => {

  const [scrolled, setScrolled] = useState(false);
  const[showCart, setShowCart] = useState(false);

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <div className='hamburger' onClick={handleClick}>
            {click ? (
              <FaTimes size={30} style={{color:'white'}}/>
            ) : (<FaBars size={30} style={{color:'white'}}/>)}
            
            
      </div>

      

      
        

    <header className="navbar"> 
      <Link to="/" className='astro'>
            <img src="/Resources/test.png"></img>
      </Link>
        <ul className={click ? "list active" : "list"}>
          <li>
          <Link to="/ourcollection" className='activelink'> Our Collections</Link>
          </li>
          <li>
          <NavLink to="/aboutus" className='activelink'>About us</NavLink>
          </li>
          <li>
          <NavLink to="/"className='activelink' >Blogs</NavLink>
          </li>
        </ul>
          <ul className='list2'>
            <li>
              <NavLink>
                <FaSearch size={15} style={{color:'white',  marginTop:"10px"}} />
              </NavLink>
            </li>
            <li>
              <NavLink>
              <FaShoppingCart size={15} style={{color:'white', marginTop:"10px"}} onClick={() => setShowCart(true)}/>
              <span className='cart-count'>5</span>
              </NavLink>
            </li>
            <li>
              <NavLink>
                <FaUser size={15} style={{color:'white', marginTop:"10px"}}/>
              </NavLink>
            
            </li>
          </ul>

          
          
        
        
    </header>
    {showCart && <Cart setShowCart={setShowCart}/>}
    </>
  )
}

export default Header