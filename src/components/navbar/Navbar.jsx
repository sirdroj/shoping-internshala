import React from 'react'
import "./Navbar.scss"
import{HiShoppingCart} from "react-icons";
import cartimg from "../../assets/cart.png"
import usericon from "../../assets/usericon.png"
const Navbar = ({setpg,username}) => {
  return (
    <div className='nav'>
        <h1 className='h1' onClick={()=>setpg(1)}>toystore.com</h1>
        <div className='nav_buttons'>
        <div className='user'><img src={usericon} />Hellow, {username}</div>
        <h2 onClick={()=>setpg(1)}>Home</h2>
        <h2>conntact</h2>
        <h2 onClick={()=>setpg(2)}><img className="cartlogo"src={cartimg} /></h2>
        </div>
    </div>
  )
}

export default Navbar