import React,{useState} from 'react';
import {ImMenu} from 'react-icons/im';
import './demo.css'
const Demo=()=>{
    const [classnam,setclassname]=useState("topnav")
   const get=()=>{
      if(classnam==="topnav"){
          setclassname("responsive")
      }
      else
      setclassname("topnav")
   }

    return(
       
          <div className={classnam} id="myTopnav">
  <a href="#home" className="active">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
  <a href="javascript:void(0);" className="icon" onClick={()=>{
      get();
  }}>
    <ImMenu className="fa"/>
  </a>
</div>
        
    )
}
export default Demo;