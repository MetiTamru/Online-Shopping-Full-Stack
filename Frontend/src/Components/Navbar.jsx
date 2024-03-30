import { Link ,useMatch,useResolvedPath} from 'react-router-dom';
import "./Homestyle.css"
import React, { useState } from "react";
import logo from './assets/logo.jpg'






function Navbar() {
  
  return (  
<nav className="nav ">
  <Link to="/" className="sitetitle" style={{ color: ' #fe9e0d',fontWeight:'bold' }}><img src={logo}/>SHOPIT</Link>
  <ul>
      <CustomLink to="/home">Home</CustomLink>
      <CustomLink to="/aboutus">About Us</CustomLink>
      <CustomLink to="/contact">Contact Us</CustomLink>
    
      
      
      
  
  </ul>
  
</nav>
  );
}

export default Navbar;
function CustomLink({
  to,children,...props
}){
 const resolvedPath = useResolvedPath(to)
 const isActive =useMatch({path :resolvedPath.pathname, end : true})
  return(

    <li className={isActive ? "active":""}>
      <Link to={to}{...props}>{children}</Link>
    </li>
  )
}