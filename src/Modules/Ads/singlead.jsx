import React from "react";
import './style.css';
import Cardd from "./flidcard/card";
import { Grid } from "@mui/material";
const Singlead = ({ ad }) => {
  return (
    <Grid item xs={12} sm={4}>

           <div >
           <Cardd  ad={ad}/>
           
           </div>
    </Grid>
    
  );
};

export default Singlead;
