import { Grid } from "@mui/material";
import React from "react";
import { useHistory } from "react-router";
const Singlecrop = ({ crop }) => {
  const history = useHistory();
  // console.log(Object.getOwnPropertyNames(crop))
  return (
      <Grid item xs={4} sm={3}>
    <div
      style={{ width: "20%", height: "120px" }}
      onClick={() => {
        history.push("/detials/" + crop.name);
      }}
    >
      <img
        src={crop.image}
        alt={crop.name}
        width="80px"
        height="80px"
        style={{ borderRadius: "50%" }}
      />
      <h5>{crop.name}</h5>
    </div>
    </Grid>
  );
};

export default Singlecrop;
