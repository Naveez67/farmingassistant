import React, { useState, useEffect } from "react";
import userService from "../../../services/UserService";
import adsService from "../../../services/adsservice";
import orderService from "../../../services/orderservice";
import helpService from "../../../services/helpservice";
import complain from "../../../services/admin/complain";
import admin from './photo/admin.png'
import { useHistory } from "react-router-dom";
import "../profile.css";
import moment from "moment";
import Myposts from "./mypost";
import Myads from "./myads";
import Myorders from "./myorders";
import Mycomplains from "./Mycomplains";
import { IoIosLogOut } from "react-icons/io";
const Myprofile = () => {
  const history=useHistory()
  const [data, setdata] = useState(userService.getLoggedInUser());
  const [userdata, setuserdata] = useState([]);
  const [user, setuser] = useState([]);

  const [name, setname] = useState("");
  const [username, setusername] = useState("");
  const [address, setaddress] = useState("");
  const [photo, setphoto] = useState("");
  const [myorder, setmyorder] = useState(false);
  const [mycom, setmycom] = useState(false);
  const [complains, setcomplains] = useState(false);
  const [post, setmypost] = useState(false);
  const [myads, setmyads] = useState(false);
  const [phone, setphone] = useState("");
  const [ads, setads] = useState([]);
  const [orders, setorders] = useState([]);
  const [mypost, setpost] = useState([]);
  const [mycomplains, setcomplain] = useState([]);
  const getposts = () => {
    helpService
      .getmyposts()
      .then((data) => {
        //  console.log(data);
        setpost(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getcomplains = () => {
    complain
      .getmycomplains()
      .then((data) => {
        console.log(data);
        setcomplain(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getads = () => {
    adsService
      .getmyads()
      .then((data) => {
        setads(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getorders = () => {
    orderService
      .myorders()
      .then((data) => {
        // console.log(data)
        setorders(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
  useEffect(getads, []);
  useEffect(getorders, []); 
  useEffect(getposts, []);
  useEffect(getcomplains, []);
  return (
    <div>
      {/* profile section */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginRight: "20%",
          marginLeft: "20%",
          justifyContent: "flex-end",
          marginTop:"2rem"
        }}
      >
        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            userService.logout();
            window.location.href = "/";
          }}
        >
          <IoIosLogOut
            size="55px"
            style={{ background: "green", color: "white" }}
          />
          <p style={{ fontWeight: "bold" }}>Logout</p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginRight: "20%",
          marginLeft: "20%",
        }}
      >
        <div>
          {userService.isAdmin()?<>
            <img
            src={admin}
            width="250px"
            height="250px"
            alt={name}
            style={{ borderRadius: "50%" }}
          />
          </>:<>
          <img
            src={photo}
            width="250px"
            height="250px"
            alt={name}
            style={{ borderRadius: "50%" }}
          />
          </>}
          
        </div>
        <div
          style={{ textAlign: "left", marginLeft: "2rem", marginTop: "2rem" }}
        >
          <h1>{username}</h1>
          <h2>{phone}</h2>
          <h3>Joined:{moment(userdata.accountcreated).format("MMM Do YY")}</h3>
          <p style={{color:"blue",textDecoration:"underline"}}>Edit profile</p>
        </div>
      </div>
      {/* profile section end */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginRight: "20%",
          marginLeft: "20%",
          marginTop: "2rem",
          justifyContent: "space-between",
        }}
      >
        {userService.isFarmerorSupplier() ? (
          <>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => {
                setmyorder(true);
                setmycom(false);
                setmypost(false);
                setmyads(false);
              }}
            >
              <h3> orders</h3>
              {orders.length}
            </div>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => {
                setmyorder(false);
                setmycom(false);
                setmypost(false);
                setmyads(true);
              }}
            >
              <h3> my ads</h3>
              {ads.length}
            </div>
          </>
        ) : (
          <></>
        )}
        {userService.isFarmer() ? (
          <>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => {
                setmyorder(false);
                setmycom(false);
                setmypost(true);
                setmyads(false);
              }}
            >
              <h3> my posts</h3>
              {mypost.length}
            </div>
          </>
        ) : (
          <></>
        )}
        {userService.isnotadmin()?<>
          <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            setmyorder(false);
            setmycom(true);
            setmypost(false);
            setmyads(false);
          }}
        >
          <h3> my complains</h3>
          {mycomplains.length}
        </div>
        </>:<></>}
        {userService.isAdmin()?<>
          <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            history.push("/addblog")
          }}
        >
          <h3>Add blog</h3>
        </div>
          <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            history.push("/addnews")
          }}
        >
          <h3>Add news</h3>
        </div>
          <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            history.push("/addrates")
          }}
        >
          <h3>Add rates</h3>
        </div>
          <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            history.push("/newagrioffice")
          }}
        >
          <h3>Add office</h3>
        </div>
        </>:<></>}
        
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginRight: "20%",
          marginLeft: "20%",
          marginTop: "2rem",
          justifyContent: "space-between",
        }}
      >
        {myorder ? (
          <>
            <Myorders orders={orders} />
          </>
        ) : (
          <></>
        )}
        {mycom ? (
          <>
            <Mycomplains  />
          </>
        ) : (
          <></>
        )}
        {post ? (
          <>
            <Myposts />
          </>
        ) : (
          <></>
        )}
        {myads ? (
          <>
            <Myads />
          </>
        ) : (
          <></>
        )}
        {complains?<>Complains </>:<></>}
      </div>
    </div>
  );
};

export default Myprofile;
