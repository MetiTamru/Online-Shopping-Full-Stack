import { Link ,useMatch,useResolvedPath} from 'react-router-dom';
import "./Homestyle.css"
import logo from './assets/logo.jpg'






function Navbar() {
  
  return (  
<nav className="nav ">
  <Link to="/" className="sitetitle" style={{ color: ' #fe9e0d',fontWeight:'bold' }}><img src={logo}/>SHOPIT</Link>
  <ul>
      <CustomLink to="/buyershome">Home</CustomLink>
      
      <CustomLink to="/buyerview">View Items</CustomLink>
      <CustomLink to="/aboutus">About Us</CustomLink>
      
      
      
      
  
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