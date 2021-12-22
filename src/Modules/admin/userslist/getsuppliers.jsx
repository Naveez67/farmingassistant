import React from "react";
import userService from "../../../services/UserService";
import { toast } from "react-toastify";
import Singleuser from "./singleuser";
import './style/style.css'
import { Grid } from "@mui/material";
import Animationcard from "./skeltoncard";
const Suppliers = () => {
  const [data, setdata] = React.useState([]);
  const [islod, setislod] = React.useState(false);
  const getdata = () => {
    console.log("get suppliers")
    userService
      .getsupplier()
      .then((data) => {
        console.log(data.length);
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
          <Grid
            container
            spacing={3}
            sx={{ marginLeft: "auto", marginRight: "auto" }}
          >
            {data.map((user, index) => (
              <Singleuser key={index} user={user} onDelete={getdata} />
            ))}
          </Grid>
        </>
      )}
      </div>
    </div>
  );
};

export default Suppliers;
