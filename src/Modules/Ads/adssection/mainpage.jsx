import React from "react";
import "./main.css";
import fruit from './imeges/fruit.png';
import organic_food from './imeges/organic-food.png';
import seed_bag from './imeges/seed-bag.png';
import spray from './imeges/spray.png';
const Adslandinpage = ({settype}) => {
  return (
    <div>
      <div className="maincontainer">
        <div className="maintitle" style={{
            marginTop:"5rem"}} >
          <h1 className="textstyle">WELL COME TO THE MARKET PLACE</h1>
          <p style={{backgroundColor:"greenyellow"}}>Buy and Sell products realted to farming</p>
        </div>
        <div 
        style={{
            marginTop:"auto",
            marginBottom:"-5rem",
            marginRight:"10%",
            marginLeft:"10%",
            backgroundColor:"greenyellow",
            height:"150px",
            display:"flex",
            justifyContent:"space-around"
            }} >

            <div className="cat" onClick={()=>{settype("Fruit")}}>
                <img src={fruit} alt="fruit" width="50px" height="50px"/>
                <h2>Fruits</h2>
            </div>
            <div className="cat" onClick={()=>{settype("Vegitable")}}>
            <img src={organic_food} alt="fruit" width="50px" height="50px"/>
                <h2>Vegitables</h2>
            </div>
            <div className="cat" onClick={()=>{settype("Seed")}}>
            <img src={seed_bag} alt="fruit" width="50px" height="50px"/>
                <h2>Seeds</h2>
            </div>
            <div className="cat" onClick={()=>{settype("Spray")}}>
            <img src={spray} alt="fruit" width="50px" height="50px"/>
                <h2>Spray</h2>
            </div>

        </div>
      </div>
      <hr  style={{marginTop:"6rem"}}/>
    </div>
  );
};

export default Adslandinpage;
