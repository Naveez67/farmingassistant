import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdAccountCircle,MdNotificationsActive } from "react-icons/md";
import {BsFillCartFill} from "react-icons/bs"
import Logo from "./img/fawslogo.png";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import "./style.css";
import userService from "../services/UserService";
const MyNavbar = () => {
  const isadmin=userService.isAdmin();
  const notadmin=userService.isnotadmin();
  const isloggedin=userService.isLoggedIn();
  const [showoffcan, setshowoffcan] = useState(true);
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const getlist = () => {
    return (
      <ul className={showoffcan ? "list-nav" : "list-can"} style={{color:"white"}}>
        <li className="list-item">
        <Link style={{textDecoration:"none",color:"white"}} to="/">
          Home
          </Link>
        </li>
        {userService.isLoggedIn()?<>
          
        </>:<>
        <li className="list-item">
          <Link style={{textDecoration:"none",color:"white"}} to="/showblog">
            Blog
          </Link>
        </li> 
        </>}
        
        <li className="list-item">
          <Link style={{textDecoration:"none",color:"white"}} to="/showrates">
          Market
          </Link>
        </li>
        <li className="list-item">
          <Link style={{textDecoration:"none",color:"white"}} to="/offices">
          Offices
          </Link>
        </li>
        <li className="list-item">
          <Link style={{textDecoration:"none",color:"white"}} to="/news">
            News
          </Link>
         
        </li>
        <li className="list-item">
          <Link style={{textDecoration:"none",color:"white"}} to="/ads">
            Ads
          </Link>
         
        </li>
        {isloggedin?
        <li className="list-item">
        <div className="dropdown">
                Users
  <div className="dropdown-content">
  <Link to="/showusers">All</Link>
  <Link to="/showfarmers">Farmers</Link>
  <Link to="/showcustomers">Customers</Link>
  <Link to="/showsuppliers">Suppliers</Link>
  </div>
</div>
        </li>:<></>}
        <li className="list-item">
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
        <li className="list-item">
        <Link style={{textDecoration:"none",color:"white"}} to="/showhelpposts">
          Help
        </Link>  
        </li>
        <li className="list-item">
        <Link style={{textDecoration:"none",color:"white"}} to="/complain">
          Complain
        </Link>  
        </li></>
        :<></>}
        <li className="list-item">
          <Link style={{textDecoration:"none",color:"white"}} to="/weather">
          Weather
          </Link>
        </li>
        {isloggedin?
        <>
        {userService.isnotadmin()?<>
          <li className="list-item">
          <Link style={{textDecoration:"none",color:"white"}} to="/mycart">
           <BsFillCartFill />
          </Link>
        </li>
        </>:<></>}
        
        {isadmin?<>
          <li className="list-item">
          <Link style={{textDecoration:"none",color:"white"}} to="/notification">
           <MdNotificationsActive size="35px" />
          </Link>
        </li>
        </>:<></>}
        
        <li className="list-item">
        <div className="dropdown">
        <MdAccountCircle size="35px" />
  <div className="dropdown-content">
  <Link to="/showprofile">Profile</Link>
  </div>
</div>
        </li>
        
        </>
        :<>
        <li className="list-item">
          <Link 
          style={{textDecoration:"none",color:"white"
          }} to="/register">
          Register
          </Link>
        </li>
        <li className="list-item">
          <Link style={{textDecoration:"none",color:"white"}} to="/login">
            Login
          </Link>
        </li>
        </>}
      </ul>
    );
  };
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 350,backgroundColor:"#38B000" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    
    >
      <div style={{background:"green",height:"70px"}}><img src={Logo} alt="logo" width="300px" height="60px" /></div>
      <br/>
      {getlist()}
    </Box>
  );

  const get = () => {
    if (showoffcan) {
      return <div>{getlist()}</div>;
    } else
      return (
        <div>
         {['left'].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}><AiOutlineMenu  className="menuicon"size="35px"/></Button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
        </div>
        
      );
  };

  const handleResize = () => {
    if (window.innerWidth > 970) {
      setshowoffcan(true);
    } else setshowoffcan(false);
  };
   
  window.addEventListener("resize", handleResize);
React.useEffect(handleResize,[])
  return (
    <div>
      <div className="main" style={{width:"100%",height:"100px",backgroundColor:"#2AA400"}}>
        <div className="brand">
          <img src={Logo} alt="logo" width="300px" height="80px" />
        </div>
        <div className="list">{get()}</div>
      </div>
    </div>
  );
};

export default MyNavbar;
