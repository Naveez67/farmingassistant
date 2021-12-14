import React, { useState } from "react";
import moment from "moment";
import Mincard from "./minicard";
import { Grid } from "@mui/material";
const Showcard = ({ today, Forecast }) => {
  const weekday = today.dt * 1000;
  var newdate = new Date();
  newdate.setTime(weekday);
  const dayname = moment(newdate).format("dddd");
  return (
    <div style={{ width: "70%", marginLeft: "auto", marginRight: "auto" }}>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div style={{ display: "flex" }}>
          <img
            src={`https://openweathermap.org/img/wn/${today.weather[0].icon}@2x.png`}
            alt={today.weather[0].description}
          />
          <h1>{Math.round(today.main.temp) - 273}</h1>
          <sup>&deg;C|F</sup>
        </div>
        <div>
          <ul style={{ listStyle: "none" }}>
            <li>Humidity:{today.main.humidity}%</li>
            <li>Wind:{today.wind.speed}Km/h</li>
          </ul>
        </div>

        <div
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "right",
            width: "33%",
          }}
        >
          <h1>
            {today.name}
            <sup>{today.sys.country}</sup>
          </h1>
          <h3>{dayname}</h3>
          <h4>{today.weather[0].description}</h4>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          width: "60%",
          marginBottom:"1.5rem"
        }}
      >
        <h5>Max temp:{Math.round(today.main.temp_max) - 273}&deg;C</h5>
        <h5>Min temp:{Math.round(today.main.temp_min) - 273}&deg;C</h5>
        <h5>Feels like:{Math.round(today.main.feels_like) - 273}&deg;C</h5>
      </div>
      <div>
        {Forecast.length > 0 ? (
          <>
            <Grid
              container
              spacing={3}
              sx={{ marginLeft: "auto", marginRight: "auto" }}
            >
              {Forecast.map((day, index) => (
                <Mincard key={index} day={day} />
              ))}
            </Grid>
          </>
        ) : (
          <>
            <h4>No forecast is available</h4>
          </>
        )}
      </div>
    </div>
  );
};

export default Showcard;
