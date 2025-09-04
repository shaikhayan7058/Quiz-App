import React from 'react'
import {Link, Outlet} from "react-router-dom"
import "./Navbar.css"


function Navbar() {
  return (
    <>
      <nav>
        <div className='nav-container'>
         <div className='logo'>SRK GROCERY</div>
         <div className='search-bar'><input type="text"placeholder='Search for product' /></div>
          <div className='nav-links'>
                  <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="appointment">Product</Link></li>
                    <li><Link to="doctor">Grocery</Link></li>
                   
                  </ul>
          </div>
        </div>
      </nav>
      <Outlet/>
    </>
  )
}
export default Navbar