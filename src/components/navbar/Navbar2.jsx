import React from 'react'
import "./Navbar2.scss"
import usericon from "../../assets/usericon.png"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Navbar2 = () => {
  return (
    

    <nav class="navbar">
    <div class="logo">Shoping.com</div>
    
    {/* <!-- NAVIGATION MENU --> */}
    <ul class="nav-links">

      {/* <!-- USING CHECKBOX HACK --> */}
      <input type="checkbox" id="checkbox_toggle" />
      <label for="checkbox_toggle" class="hamburger">&#9776;</label>

      {/* <!-- NAVIGATION MENUS --> */}
      <div class="menu">
        <li><Link to="/">HomeR</Link></li>
        <li><Link to="/cart">CartR</Link></li>
      </div>
    </ul>
  </nav>
  )
}

export default Navbar2