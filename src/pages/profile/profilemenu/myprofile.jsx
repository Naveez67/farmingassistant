import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import userService from "../../../services/UserService";
import adsService from '../../../services/adsservice';
import orderService from "../../../services/orderservice";
import helpService from "../../../services/helpservice";
import complain from '../../../services/admin/complain'
import "../profile.css";
import moment from "moment";
const Myprofile = () => {
  const [data, setdata] = useState(userService.getLoggedInUser());
  const [userdata, setuserdata] = useState([]);
  const [user, setuser] = useState([]);
  const [name, setname] = useState("");
  const [username, setusername] = useState("");
  const [address, setaddress] = useState("");
  const [photo, setphoto] = useState("");
  const [phone, setphone] = useState("");
  const [ads,setads]=useState([]);
  const [orders,setorders]=useState([]);
  const [mypost, setpost] = useState([]);
  const [mycomplains, setcomplain] = useState([]);
  const getposts = () => {
    helpService
      .getmyposts()
      .then((data) => {
         // console.log(data);
        setpost(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getcomplains = () => {
    complain.getcomplain()
      .then((data) => {
         // console.log(data);
        setcomplain(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
    const getads=()=>{
        adsService.getmyads().then((data)=>{
            setads(data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    const getorders=()=>{
        orderService.myorders(data._id).then((data)=>{
            setorders(data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
  const getuser = () => {
    userService
      .getsingleuser(data._id)
      .then((data) => {
        console.log(data);
        setuser(data);
        setusername(data.username);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  const getuserdata = () => {
    userService
      .getuserdata(data._id)
      .then((data) => {
        console.log(data);
        setname(data.name);
        setaddress(data.address);
        setphone(data.phone);
        setphoto(data.photo);
        setuserdata(data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  useEffect(getuser, []);
  useEffect(getuserdata, []);
  useEffect(getads,[])
  useEffect(getorders,[]);
  useEffect(getposts, []);
  useEffect(getcomplains, []);
  return (
    <div >
      {/* profile section */}
      <div style={{display:"flex",flexWrap:"wrap",marginRight:"20%",marginLeft:"20%"}} >
        <div >
            <img src={photo} width="250px" height="250px"  alt={name}  style={{borderRadius:"50%"}}/>
        </div>
        <div style={{textAlign:"left",marginLeft:"2rem",marginTop:"2rem"}}>
          <h1>{username}</h1>
          <h2>{phone}</h2>
          <h3>Joined:{moment(userdata.accountcreated).format("MMM Do YY")}</h3>
        </div>

      </div>
      {/* profile section end */}
      <div style={{display:"flex",flexWrap:"wrap",marginRight:"20%",marginLeft:"20%",marginTop:"2rem",justifyContent:"space-between"}} >
          <div>
                <h3> orders</h3> 
                {orders.length}
          </div>
          <div>
                <h3> my complains</h3>
                {mycomplains.length}
          </div>
          <div>
               <h3>  my ads</h3>
               {ads.length}
          </div>
          <div>
               <h3>  my posts</h3>
               {mypost.length}
          </div>
      </div>
     
    </div>
  );
};

export default Myprofile;
