import React, { useState } from "react";
import "./singleuser.css";
import userService from "../../../services/UserService";
import { useHistory } from "react-router-dom";
import {FaPhoneSquareAlt} from 'react-icons/fa';
import {GiCharacter} from 'react-icons/gi';
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
const Singleuser = ({ user, onDelete }) => {
  const history=useHistory();
  const [image, setimage] = useState("");
  const [phone, setphone] = useState("");
  const [usedata,setuserdata]=useState();
  const [username, setusername]=useState(user.username);
  const [img, setimg]=useState("");
 

  const handledeleteuser = () => {
    userService
      .deleteuser(user._id)
      .then((data) => {
        alert("user deleted")

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
          marginTop: "-2rem",
          display:"flex",
          justifyContent:"center"
        }}
      >
            <Avatar alt="photo" src={img} sx={{ width: 70, height: 70 }}/>
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
            
              handledeleteuser();
              onDelete();
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
    </Grid>
  );
};

export default Singleuser;
