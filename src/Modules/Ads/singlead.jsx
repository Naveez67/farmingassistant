import React, { useState } from "react";
import './style.css';
import { useHistory } from "react-router";
import moment from 'moment';
import userService from "../../services/UserService";
//import adsService from "../../services/adsservice";
import {useCart } from "react-use-cart";
import Card from "./flidcard/card";
import { Grid } from "@mui/material";
const Singlead = ({ ad }) => {
  const { addItem } = useCart();
 const history=useHistory();
 const islogin=userService.isLoggedIn();
 const [pid, setpid] = useState("123");
 const get=()=>{
       if(islogin){
         setpid(userService.getLoggedInUser()._id)
       }
 }
  const [photo, setphoto] = useState("");
  const [show, setshow] = useState(false);
  const [membersinc, setmember] = useState("");
  const [dis, setdis] = useState("none");
  //  const [pid, setpid] = useState("");
  const [username, setusername] = useState("");
  const [role, setrole] = useState("");
  const [userid, setuserid] = useState("");
  // const [cal, setcal] = useState(false);
  // const [value, setValue] = React.useState(0);
  // const [open, setOpen] = React.useState(false);
  const item={id:ad._id+pid,title:ad.title,price:ad.price,body:ad.body,image:ad.photo,userid:pid,adid:ad._id}
  const getuserphoto = () => {
    userService.getuserdata(ad.postedby).then((data) => {
      console.log(data);
      setphoto(data.photo);
      setmember(data.accountcreated);
      setuserid(data._id);
    });
  };
  const getusername = () => {
    userService.getsingleuser(ad.postedby).then((data) => {
      console.log(data);
      setusername(data.username);
      setrole(data.role);
    });
  };
  React.useEffect(getuserphoto, []);
  React.useEffect(getusername, []);
  React.useEffect(get, []);
  return (
    <Grid item xs={12} sm={4}>

           <div className="adcard">
           <div style={{display:"flex",width:"350px",justifyContent:"space-between",color:"white"}}>
            <h1 >Rs:{ad.price}</h1>
            <p>{moment(ad.dateofpost).format("MMM Do YY")}</p>
           </div>
           <Card  ad={ad}/>
           {userService.isnotadmin()?<>
            <div style={{display:"flex",width:"350px",marginTop:"2rem",}} >
           <button style={{width:"100%",backgroundColor:"green",padding:"1rem",fontWeight:"bold",color:"white",fontSize:"24px"}}
           onClick={()=>{
             addItem(item);
             history.push("/mycart")
           }}
           >Order Now</button>
           <button style={{width:"100%",backgroundColor:"yellowgreen",padding:"1rem",fontWeight:"bold",color:"white",fontSize:"24px"}}
           onClick={()=>{
             addItem(item)
             history.push("/mycart")
           }}
           >Add to Cart</button>
           </div>
           </>:<></>}
           
           </div>
    </Grid>
    
  );
};

export default Singlead;
