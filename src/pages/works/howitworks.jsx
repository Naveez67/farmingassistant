import React  from "react";
import { FaRegAddressBook } from "react-icons/fa";
import { BiLogIn } from "react-icons/bi";
import { GrSystem } from "react-icons/gr";
// import Spin from 'react-reveal/Spin';
import Rotate from 'react-reveal/Rotate';
import "./howworks.css";
// import back2 from "../Carousel/images/back2.jpg";
// import Demo from "./demo";
const Works = () => {
  return (
    <div
      className="mainsec"
    > 
      <h1 className="maintitle">How its works</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: "3rem",
        }}
      >
        <Rotate top left>
        <span>
          <div className="simplecard">
            <FaRegAddressBook size="50px" className="imgpos" />
            <p style={{ textAlign: "center" }}>Register</p>
          </div>
          <h1 className="subtitle">Step1</h1>
        </span>
        </Rotate>
        
        <Rotate top left>
        <span>
          <div className="simplecard">
            <BiLogIn size="50px" className="imgpos" />
            <p style={{ textAlign: "center" }}>Login</p>
          </div>
          <h1 className="subtitle">Step2</h1>
        </span>
        </Rotate>
        <Rotate top left>
        <span>
          <div className="simplecard">
            <GrSystem size="50px" className="imgpos" style={{backgroundColor:"#1deb38"}} />
            <p style={{ textAlign: "center" }}>Dashbord</p>
          </div>
          <h1 className="subtitle">Step3</h1>
        </span>
        </Rotate>
        <br />
      </div>
      {/* <Demo /> */}

      {/* <div class="box" id="box1"></div>
<div class="box" id="box2"></div>
<div class="box" id="box3"></div>

<div class="line" id="line1"></div>
<div class="line" id="line2"></div> */}
    </div>
  );
};

export default Works;
