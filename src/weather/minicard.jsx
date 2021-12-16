
import React from "react";
import moment from "moment";
import { Grid } from "@mui/material";
const Mincard = ({ day }) => {
  const weekday = day.dt * 1000;
  var newdate = new Date();
  newdate.setTime(weekday);
  const dayname = moment(newdate).format("dddd");
  var time = moment(newdate).format("hA");
  return (
    <Grid item xs={12} sm={2}>
      <div
        style={{
          width: "150px",
          textAlign: "center",
          backgroundColor: "green",
        }}
      >
        <h4>{dayname}</h4>
        <p>{time}</p>
        
        <img
          src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
          alt="icon "
        />
        <h3 style={{marginTop:"-1.3rem"}}>
          {Math.round(day.main.temp) - 273}
          <sup>&deg;C</sup>
        </h3>
        <p>Max temp:{Math.round(day.main.temp_max) - 273}<sup>&deg;C</sup></p>
        <p>Min temp:{Math.round(day.main.temp_min) - 273}<sup>&deg;C</sup></p>
      </div>
    </Grid>
  );
};

export default Mincard;
