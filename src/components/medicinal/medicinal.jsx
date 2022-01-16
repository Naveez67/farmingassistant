import React from "react";
import { Grid } from "@mui/material";
import Singlecrop from "../all/singlecrop";
import data from "../data/data.json";
// import Catagree from "../categriees/catgree";
const Medicinal = () => {
  function filterItems(arr, query) {
    return arr.filter(function (el) {
      return el.type.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
  }
  function res(arr, name) {
    let array = filterItems(arr, name);
    return array;
  }
  let medi = res(data, "Medicinal Plants");
  return (
    <div style={{ marginTop: "3rem" }}>
      {/* <Catagree /> */}
      <h1
        style={{
          textAlign: "center",
          background: "green",
          marginBottom: "1rem",
        }}
      >
        Medicinal
      </h1>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <div style={{ width: "10%", height: "auto" }}></div>
        <div style={{ width: "80%" }}>
          {medi.length > 0 ? (
            <>
              <Grid container spacing={5}>
                {medi.map((crop, index) => (
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
export default Medicinal;
