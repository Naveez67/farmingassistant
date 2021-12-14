import React from "react";
import adsService from "../../services/adsservice";
import Singlead from "./singlead";

import { Grid } from "@mui/material";
const Showads = ({type}) => {

  const [data, setdata] = React.useState([]);
  const getads = () => {
    adsService
      .getads()
      .then((res) => {
        setdata(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  React.useEffect(getads, []);
  return (
    <div style={{marginLeft:"15%",marginRight:"15%"}}>
      {data.length > 0 ? (
        <>
          <Grid
            container
            spacing={3}
            // sx={{ marginLeft: "auto", marginRight: "auto" }}
          >
            {data.map((ad, index) => (
              <Singlead key={index} ad={ad} />
            ))}
          </Grid>
        </>
      ) : (
        <>
          <h4>No recoreds found</h4>
        </>
      )}
    </div>
  );
};

export default Showads;
