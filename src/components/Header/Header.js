import React from 'react'
import "./Header.css"
import { NavLink, Link} from 'react-router-dom'
import {FaSearch, FaShoppingCart, FaUser} from 'react-icons/fa'

const Header = () => {

  const activeLinkStyle = {
    textDecoration: 'none',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '18px'
  };

  return (
    <>
      <Link to="/">
        <img className="image" src="/Resources/test.png"></img>
      </Link>
        

    <header className="navbar"> 
        
        <ul className="list">
          <li>
          <Link to="/ourcollection" style={activeLinkStyle}> Our Collections</Link>
          </li>
          <li>
          <NavLink to="/aboutus" style={activeLinkStyle}>About us</NavLink>
          </li>
          <li>
          <NavLink to="/" style={activeLinkStyle}>Blogs</NavLink>
          </li>
          <li>
            <NavLink>
              <FaSearch size={15} style={{color:'white', marginLeft:"50rem", marginTop:"10px"}} />
            </NavLink>
          </li>
          <li>
            <NavLink>
            <FaShoppingCart size={15} style={{color:'white', marginLeft:"0.2rem", marginTop:"10px"}}/>
            </NavLink>
          </li>
          <li>
            <NavLink>
              <FaUser size={15} style={{color:'white', marginLeft:"0.2rem", marginTop:"10px"}}/>
            </NavLink>
            
          </li>
        </ul>
        
    </header>
    </>
  )
}

export default Header