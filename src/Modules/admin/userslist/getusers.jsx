import React from "react";
import userService from "../../../services/UserService";
import { toast } from "react-toastify";
import Singleuser from "./singleuser";
import { Grid } from "@mui/material";
import Animationcard from "./skeltoncard";
const Getusers = () => {
  const [users, setusers] = React.useState([]);
  const [islod, setislod] = React.useState(false);
  const getusers = () => {
    console.log("called")
    userService
      .getusers()
      .then((data) => {
        // console.log(data.length);
        setusers(data);
        setislod(true);
        //console.log(users.length);
      })
      .catch((err) => {
        setislod(true);
        setusers([]);
        toast.error(err.response.data, {
          position: toast.POSITION.TOP_LEFT,
        });
      });
  };
  React.useEffect(getusers, []);
  return (
    <div style={{ marginTop: "4rem" }}>
      <h1>Showing all the users</h1>
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
      {users.length > 0 ? (
        <>
          <Grid
            container
            spacing={3}
            sx={{ marginLeft: "auto", marginRight: "auto" }}
          >
            {users.map((user, index) => (
              <Singleuser key={index} user={user} onDelete={getusers} />
            ))}
          </Grid>
        </>
      ) : (
        <>
          {islod ?<h4>No recoreds found</h4>:<></>}
        </>
      )}
    </div>
  );
};

export default Getusers;
