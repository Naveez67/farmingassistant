import { Grid } from "@mui/material";
import React from "react";
import Singlecrop from "../all/singlecrop";
import Catagree from "../categriees/catgree";
import data from "../data/data.json";
const Crops = () => {
  function filterItems(arr, query) {
    return arr.filter(function (el) {
      return el.type.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
  }
  function res(arr, name) {
    let array = filterItems(arr, name);
    return array;
  }
  let crop = res(data, "crops");
  return (
    <div style={{marginTop:"3rem"}}>
      {/* <Catagree /> */}
      <h1 style={{textAlign:"center",background:"green",marginBottom:"1rem"}}>Crops </h1>
    
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      <div style={{ width: "10%", height: "auto" }}></div>
      <div style={{ width: "80%" }}>
        {crop.length > 0 ? (
          <>
            <Grid container spacing={5}>
              {crop.map((crop, index) => (
                <Singlecrop key={index} crop={crop} />
              ))}
            </Grid>
          </>
        ) : (
          "Medicinal "
        )}
      </div>
      <div style={{ width: "10%", height: "auto" }}></div>
    </div>
    </div>
  );
};

export default Crops;
