import React from "react";
import userService from "../../../services/UserService";
import { toast } from "react-toastify";
import Singleuser from "./singleuser";
import { Grid } from "@mui/material";
import Animationcard from "./skeltoncard";
import './style/style.css'
const Customers = () => {
  const [data, setdata] = React.useState([]);
  const [islod, setislod] = React.useState(false);
  const [isdelete, setisdelete] = React.useState(false);
  const getdata = () => {
    userService
      .getcustomer()
      .then((data) => {
        //console.log(data.length);
        setdata(data);
        setislod(true);
      })
      .catch((err) => {
        setdata([]);
        setislod(true);
        toast.error(err.response.data, {
          position: toast.POSITION.TOP_LEFT,
        });
      });
  };
  React.useEffect(getdata, []);
  return (
    <div  className="userbackground">
     <div style={{marginLeft:"10%",marginRight:"10%"}}> 
      {islod ? (
        <></>
      ) : (
        <>
          <Grid
            container
            spacing={3}
            sx={{ marginLeft: "auto", marginRight: "auto" }}
          >
            <Grid item xs={12} sm={4}>
              <Animationcard />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Animationcard />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Animationcard />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Animationcard />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Animationcard />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Animationcard />
            </Grid>
          </Grid>
        </>
      )}
      {data.length == 0 ? (
        <>
          <p>Nothing to show</p>
        </>
      ) : (
        <>
        <div>
          <Grid
            container
            spacing={3}
            sx={{ marginLeft: "auto", marginRight: "auto" }}
          >
            {data.map((user, index) => (
              <Singleuser key={index} user={user} onDelete={getdata} setval={setisdelete} />
            ))}
          </Grid>
          </div> 
        </>
      )}
      </div>
    </div>
  );
};

export default Customers;
