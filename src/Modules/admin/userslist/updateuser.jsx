import React, { useState } from "react";
import { useParams } from "react-router-dom";
import userService from "../../../services/UserService";
import Formdata from "./form";
import {Grid, TextField} from '@mui/material';
import { toast } from "react-toastify";
import Uploadphoto from "./uploadimage";

const Updateuser = () => {
  const param = useParams();
  const id = param.id;
  const [photo, setphoto] = useState("");
  const [name, setname] = useState("");
const getdata = () => {
    userService
    .getuserdata(id)
    .then((data) => {
        console.log(data);
        setphoto(data.photo);
        setname(data.name)
        //console.log(users.length);
      })
      .catch((err) => {
       // console.log(err.response.data);
        toast.error(err.response.data, {
          position: toast.POSITION.TOP_LEFT,})
      });
  };
  React.useEffect(getdata, []);
  return (
    <Grid container>
        <Grid item xs={6} sm={6}>
        <Formdata id={id} photo={photo}/>
        </Grid>
        <Grid item xs={6} sm={6}>
          <Uploadphoto photo={photo} setphoto={setphoto} name={name}/>
        </Grid>
        <Grid item xs={6} sm={6}>
        </Grid>
    </Grid>
  );
};

export default Updateuser;
