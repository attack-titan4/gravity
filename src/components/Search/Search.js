import React from 'react'
import { FaTimes } from 'react-icons/fa'
import './Search.css'

const Search = ({setShowSearch}) => {
  return (
    <div className='search-modal'>
        <div className='form-field'>
            <input 
                type='text'
                autoFocus
                placeholder='Search for Products'
            />
            <FaTimes className='search-close' onClick={() => setShowSearch(false)} />
        </div>
        <div className='search-result-content'>
            <div className='search-results'>
                <div className='search-result-items'>
                    <div className='search-photo-container'>
                        <img src='\Resources\productimages\p2.png' alt='oops'/>
                    </div>

                    <div className='search-prod-details'>
                        <span className='search-prod-name'>Product name</span>
                        <span className='search-prod-desc'>Product desc</span>
                    </div>
                </div>
            </div>
        </div>
    
    </div>
  )
}

export default Search
