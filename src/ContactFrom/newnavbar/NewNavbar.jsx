import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
// import { MenuList } from "./MenuList";
import "./Navbar.css";
import Logo from '../../navbar/img/fawslogo.png'
import userService from "../../services/UserService";
import { BsFillCartFill } from "react-icons/bs";
import { MdAccountCircle, MdNotificationsActive } from "react-icons/md";
const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const isadmin=userService.isAdmin();
  const notadmin=userService.isnotadmin();
  const isloggedin=userService.isLoggedIn();
//   const menuList = MenuList.map(({ url, title }, index) => {
//     return (
//       <li key={index}>
//         <NavLink exact to={url} activeClassName="active">
//           {title}
//         </NavLink>
//       </li>
//     );
//   });

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav>
      <div className="logo">
      <img src={Logo} alt="logo" width="300px" height="50px" />
      </div>
      <div className="menu-icon" onClick={handleClick}>
        {clicked ?<FaTimes className="fas" />:<FaBars  className="fas"/>}
      </div>
      <ul className={clicked ? "menu-list" : "menu-list close"}>
          
          {/* {menuList} */}
          <li >
        <Link  to="/">
          Home
          </Link>
        </li>
        {userService.isLoggedIn()?<>
          
        </>:<>
        <li >
          <Link  to="/showblog">
            Blog
          </Link>
        </li> 
        </>}
        
        <li >
          <Link  to="/showrates">
          Market
          </Link>
        </li>
        <li >
          <Link  to="/offices">
          Offices
          </Link>
        </li>
        <li >
          <Link  to="/news">
            News
          </Link>
         
        </li>
        <li >
          <Link  to="/ads">
            Ads
          </Link>
         
        </li>
        {isloggedin?
        <li >
        <div className="dropdown">
                Users
  <div className="dropdown-content">
  {/* <Link to="/showusers">All</Link> */}
  <Link to="/showfarmers">Farmers</Link>
  <Link to="/showcustomers">Customers</Link>
  <Link to="/showsuppliers">Suppliers</Link>
  </div>
</div>
        </li>:<></>}
        <li >
        <div className="dropdown">
                Crops
  <div className="dropdown-content">
  <Link to="/all">All</Link>
  <Link to="/crops">Crops</Link>
  <Link to="/fruits">Fruits</Link>
  <Link to="/vegitable">Vegetables</Link>
  <Link to="/medicinal">Medicinal</Link>
  <Link to="/ornamentals">Ornamentals</Link>
  </div>
</div>
        </li>
        {notadmin?<>
        <li >
        <Link  to="/showhelpposts">
          Help
        </Link>  
        </li>
        <li >
        <Link  to="/complain">
          Complain
        </Link>  
        </li></>
        :<></>}
        <li >
          <Link  to="/weather">
          Weather
          </Link>
        </li>
        {isloggedin?
        <>
        {userService.isnotadmin()?<>
          <li >
          <Link  to="/mycart">
           <BsFillCartFill />
          </Link>
        </li>
        </>:<></>}
        
        {isadmin?<>
          <li >
          <Link style={{textDecoration:"none",color:"white"}} to="/notification">
           <MdNotificationsActive size="35px" />
          </Link>
        </li>
        </>:<></>}
        
        <li >
        
          <Link to="/showprofile" style={{textDecoration:"none",color:"white"}}><MdAccountCircle size="35px" /></Link>   
        </li>
        
        </>
        :<>
        <li >
          <Link 
          style={{textDecoration:"none",color:"white"
          }} to="/register">
          Register
          </Link>
        </li>
        <li >
          <Link style={{textDecoration:"none",color:"white"}} to="/login">
            Login
          </Link>
        </li>
        </>}
      </ul>
    </nav>
  );
};

export default Navbar;