import { Grid } from "@mui/material";
import React from "react";
import Catagree from "../categriees/catgree";
import data from "../data/data.json";
import Singlecrop from "./singlecrop";
const Allcrops = () => {
  return (
    <div style={{marginTop:"3rem"}}>
      {/* <Catagree /> */}
      <h1 style={{textAlign:"center",background:"green",marginBottom:"1rem"}}>All Crops </h1>
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
      }}
    >
      <div style={{ width: "10%", height: "auto" }}></div>
      <div style={{ width: "80%" }}>
        {data.length > 0 ? (
          <>
            <Grid container spacing={5}>
              {data.map((crop, index) => (
                <Singlecrop key={index} crop={crop} />
              ))}
            </Grid>
          </>
        ) : (
          "No crops "
        )}
      </div>
      <div style={{ width: "10%", height: "auto"}}></div>
    </div>

    </div>
  );
};

export default Allcrops;
