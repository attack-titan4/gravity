import React from 'react'
import "./Herobanner.css"

const Herobanner = () => {
  return (
    <div className="container">
    <div className="text-container">
      <h2 className="drop">First Drop Coming Soon</h2>
      <div className="coming">Join our exclusive waitlist for the coming drop</div>
      <button className="join">Join Now</button>
    </div>
    <div className="image-container">
      <img className="banner" src="\Resources\productimages\p4.png" alt="ops" />
    </div>
  </div>
  )
}

export default Herobanner