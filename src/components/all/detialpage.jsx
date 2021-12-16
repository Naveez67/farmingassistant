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
    <div style={{ marginLeft:"5%",marginRight:"5%" }}>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div style={{ width: "100%", display:"flex",flexWrap:"wrap",}}>
          <div style={{marginRight:"auto",marginLeft:"auto"}}>
            <img src={crop[0].image} alt={name} width="200px" height="200px" style={{borderRadius:"50%"}} />
            <h2>{name}</h2>
            </div>
          <diV>
          
          <h4 style={{textAlign:"left"}}>Details</h4>
          <p style={{textAlign:"justify",textJustify:"interword"}}>
           {crop[0].detail}
           </p>
          </diV>
        </div>
        <div style={{ width: "100%" }}>
          <div>
            <h4 style={{textAlign:"left",marginBottom:"1.5rem"}}>Management</h4>
            <Mangament mangament={crop[0].Managements} />
          </div>
          <div>
            <Cropdetials detials={crop[0].cropDetail} />
          </div>
        </div>
        <div style={{ width: "100%" }}>
          <h4 style={{textAlign:"left",padding:"15px",background:"green",color:"white"}}>More</h4>
          <More more={crop[0].more} />
        </div>
      </div>
    </div>
  );
};

export default Detials;
