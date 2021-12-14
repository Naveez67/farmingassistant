import React from "react";
import data from "../data/data.json";
import { useParams } from "react-router";
import More from "./minorcomponent/more";
import Cropdetials from "./minorcomponent/cropsdetials";
import Mangament from "./mangaement/cropmangement";
const Detials = () => {
  const param = useParams();
  const name = param.name;
  function filterItems(arr, query) {
    return arr.filter(function (el) {
      return el.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
  }
  function res(arr, name) {
    let array = filterItems(arr, name);
    return array;
  }
  let crop = res(data, name);
  return (
    <div style={{ marginTop: "3rem",marginLeft:"1rem" }}>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div style={{ width: "30%", marginRight: "2rem"  }}>
          <img src={crop[0].image} alt={name} width="150px" height="150px"  />
          <h2>{name}</h2>
          <h4 style={{textAlign:"left"}}>Details</h4>
          <p style={{textAlign:"justify",textJustify:"interword"}}>
           {crop[0].detail}
           </p>
          <h4 style={{textAlign:"left"}}>More</h4>
          <More more={crop[0].more} />
        </div>
        <div style={{ width: "60%" }}>
          <div>
            <h4 style={{textAlign:"left",marginBottom:"1.5rem"}}>Management</h4>
            <Mangament mangament={crop[0].Managements} />
          </div>
          <div>
            <Cropdetials detials={crop[0].cropDetail} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detials;
