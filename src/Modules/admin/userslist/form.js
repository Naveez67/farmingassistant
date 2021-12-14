import React, { useState } from "react";
import TextField from "@mui/material/TextField";
//import axios from "axios";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import userService from "../../../services/UserService";
import farmerService from "../../../services/farmerservice";
//import getadmin from '../../../services/admin/getadmin';
import supplierService from "../../../services/supplierservice";
import customerService from "../../../services/customerservice";
import { toast } from "react-toastify";
import { useHistory} from "react-router-dom";

//import NativeSelectDemo from "./roledropdown";
const Formdata = ({id,photo}) => {
  const [role, setRole] = useState("");
  const [user,setuser]=useState("");
  const [name, setname] = useState("");
  const [username, setusername] = useState("");
  const [address, setaddress] = useState("");
  const [phone, setphone] = useState("");
  // const [regno, setregno] = useState("");
  const history = useHistory();
//console.log(name); 
const farmer=()=>{
  farmerService.updatefarmer(user.userid,{name,username,phone,photo,address})
  .then((data)=>{
    alert("updated")
    history.push("/showusers")
  }).catch((err)=>{
    toast.error(err.response.data, {
      position: toast.POSITION.TOP_LEFT,})
  })
}
const customer=()=>{
  customerService.updatecustomer(user.userid,{name,username,phone,photo,address})
  .then((data)=>{
    alert("updated");
    history.push("/showusers")
  }).catch((err)=>{
    toast.error(err.response.data, {
      position: toast.POSITION.TOP_LEFT,})
  })
}
const supplier=()=>{
  supplierService.updatesupplier(user.userid,{name,username,phone,photo,address})
  .then((data)=>{
    alert("updated");
    history.push("/showusers")
  })
  .catch((err)=>{
    toast.error(err.response.data, {
      position: toast.POSITION.TOP_LEFT,})
  })
}
  const gett=()=>{
      if(role==="farmer") {
       // console.log("Gett > farmer >> ",name);
        farmer();
      }
      
      else if(role==="supplier") {
        //console.log("Gett > supplier >>",name);
         supplier();
      }
      else {
         // console.log("Gett > customer >>",name);
          customer();
      }
  }

const getuser=()=>{
    userService
    .getsingleuser(id)
    .then((data) => {
      //  console.log(data);
        setuser(data);
        setusername(data.username);
        setRole(data.role);
        //console.log(users.length);
      })
      .catch((err) => {
        console.log(err.response.data);
        toast.error(err.response.data, {
          position: toast.POSITION.TOP_LEFT,})
      });
}
const getuserdata=()=>{
    userService
    .getuserdata(id)
    .then((data) => {
       // console.log(data);
        setname(data.name);
        setphone(data.phone);
        setaddress(data.address);
        //console.log(users.length);
      })
      .catch((err) => {
       // console.log(err.response.data);
        toast.error(err.response.data, {
          position: toast.POSITION.TOP_LEFT,})
      });
}
React.useEffect(getuser,[]);
React.useEffect(getuserdata,[]);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <TextField
          id="filled-basic"
          label="Name"
          variant="standard"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="filled-basic"
          label="UserName"
          variant="standard"
          value={username}
          onChange={(e) => {
            setusername(e.target.value);
          }}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="filled-basic"
          label="Address"
          variant="standard"
          value={address}
          onChange={(e) => {
            setaddress(e.target.value);
          }}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} >
        <TextField
          id="filled-basic"
          label="Phone"
          variant="standard"
          value={phone}
          onChange={(e) => {
            setphone(e.target.value);
          }}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained"
        onClick={()=>{
            //console.log(name,username,phone,address,photo);
            gett();
        }}
        
        >Update</Button>
      </Grid>
    </Grid>
  );
};
export default Formdata;