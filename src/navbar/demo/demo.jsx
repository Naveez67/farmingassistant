import React,{useState} from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import {ImMenu} from 'react-icons/im';
import{MenuList} from './menulist' 
import './demo.css'
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { BiMenuAltRight } from 'react-icons/bi';
const Demo=()=>{
    const [clicked, setClicked] = useState(false);
    const menuList = MenuList.map(({ url, title }, index) => {
      return (
        <li key={index}>
            
          <Link exact to={url} activeClassName="active">
           
          </Link>
        </li>
      );
    });
  
    const handleClick = () => {
      setClicked(!clicked);
    };
    return(
       
        <nav>
      <div className="logo">
        VPN<font>Lab</font>
      </div>
      <div className="menu-icon" onClick={handleClick}>
        <BiMenuAltRight size="35px" className={clicked ? "fas fa-times" : "fas fa-bars"}/>
      </div>
      <ul className={clicked ? "menu-list" : "menu-list close"}>{menuList}</ul>
    </nav>
    )
}
export default Demo;