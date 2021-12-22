import React, { useState } from "react";
import "./singleuser.css";
import userService from "../../../services/UserService";
import { useHistory } from "react-router-dom";
import {FaPhoneSquareAlt} from 'react-icons/fa';
import {GiCharacter} from 'react-icons/gi';
import './style/style.css'
//import moment from "moment";
import { toast } from "react-toastify";
import {
  Card,
  CardContent,
  Button,
  Typography,
  Grid,
  CardActionArea,
  Avatar,
} from "@mui/material";
//import { CardActionArea } from "@material-ui/core";
const Singleuser = ({ user, onDelete,setval }) => {
  const history=useHistory();
  const [image, setimage] = useState("");
  const [phone, setphone] = useState("");
  const [usedata,setuserdata]=useState();
  const [username, setusername]=useState(user.username);
  const [img, setimg]=useState("");
  const [dis, setdis]=useState("none");
  const [ds, setds]=useState("none");
  const handledeleteuser = () => {
    userService
      .deleteuser(user._id)
      .then((data) => {
        // alert("user deleted")
        setds("block")
        //console.log(users.length);
      })
      .catch((err) => {
        //console.log(err.response.data);
        toast.error(err.response.data, {
          position: toast.POSITION.TOP_LEFT,
        });
      });
  };
  const getdata = () => {
    userService.getuserdata(user._id).then((data)=>{
     // console.log(data);
     setphone(data.phone)
     setimg(data.photo)
     setuserdata(data);
  })
  .catch((err)=>{
    toast.error(err.response.data, {
      position: toast.POSITION.TOP_LEFT,})
  })

  };
  
React.useEffect(getdata,[setuserdata]);

  return (
    <Grid item xs={12} sm={4} >
    <Card sx={{ maxWidth: 345 }}>
      <CardContent
        sx={{ height: "70px", backgroundColor: "green" }}
      ></CardContent>
      <CardContent
        sx={{
          marginTop: "-3rem",
          display:"flex",
          justifyContent:"center"
        }}
      >
            <Avatar alt="photo" src={img} sx={{ width: 100, height: 100 }}/>
      </CardContent>

      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ marginTop: "-1rem" }}
        >
          {username}
        </Typography>
        <div style={{ display: "flex", textAlign: "left", width: "100%" }}>
          <FaPhoneSquareAlt />
          <h5 style={{ marginLeft: "1.5rem" }}>+92{phone}</h5>
        </div>
        <div style={{ display: "flex", textAlign: "left", width: "100%" }}>
          <GiCharacter />
          <h5 style={{ marginLeft: "1.5rem" }}>{user.role}</h5>
        </div>
        {/* <div style={{ display: "flex", textAlign: "left", width: "100%" }}> */}
          {/* <h5>Username: </h5> */}
          {/* <h5 style={{ marginLeft: "1.5rem" }}>Member Since:{moment(date, "YYYYMMDD").fromNow()}</h5> */}
        {/* </div> */}
      </CardContent>
      <CardActionArea>
        {userService.isAdmin()?
        <>
        <div>
        <Button
          size="small"
          onClick={(e) => {
           // console.log("edit clicked");
            history.push("/updateuser/" + user._id);
          }}
        >
          Edit
        </Button>
        <Button
          size="small"
          onClick={(e) => {
            
              // handledeleteuser();
              setdis("block")
              // onDelete();
            // window.location.reload();
          }}
        >
          delete
        </Button>
        </div>
        </>:
        <></>}
        
      </CardActionArea>
    </Card>
    <div id="myModal" className="modal" style={{display:dis}} >

{/* <!-- Modal content --> */}
<div className="modal-content" >
  <div className="modal-header">
  <h2></h2>
    <span className="close" onClick={()=>{setdis("none")}} >&times;</span>
    
  </div>
  <div className="modal-body">
     <div style={{display:"flex",flexDirection:"column"}}>
       <h1>Are you sure you want to delete user</h1>
       <div style={{display:"flex",marginRight:"30%",marginLeft:"40%"}}>
         <button style={{width:"30%",padding:"8px",color:"white",fontWeight:"bold",background:"green"}}
         onClick={()=>{setdis("none")}}
         >CANCEL</button>
         <button style={{width:"30%",padding:"8px",color:"white",fontWeight:"bold",background:"red",marginLeft:"1rem"}}
         onClick={()=>{
          handledeleteuser();
           setdis("none")
         }}
         
         >DELETE</button>
       </div>
     </div>

  </div>
  <div className="modal-footer">
    <h3></h3>
  </div>
</div>

</div>

<div id="myModal" className="modal" style={{display:ds}} >

{/* <!-- Modal content --> */}
<div className="modal-content" >
  <div className="modal-header">
  <h2></h2>
    <span className="close" onClick={()=>{setds("none")}} >&times;</span>
    
  </div>
  <div className="modal-body">
       <h1> deleted</h1>
  </div>
  <div className="modal-footer">
    <h3 style={{textAlign:"center",cursor:"pointer"}}
    onClick={()=>{
      setds("none")
      window.location.reload(true)
    }}
    
    >
     OK
    </h3>
  </div>
</div>

</div>



















    </Grid>
  );
};

export default Singleuser;
