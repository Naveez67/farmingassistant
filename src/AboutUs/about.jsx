import React from "react";
import "./about.css";
import ali from "./images/Ali Hassan.jpg";
import naveez from "./images/Naveez Ahmad.jpg";
import inzi from "./images/Inzamam Ashraf.jpg";
const Aboutus = () => {
  return (
    <div className="html">
      <div
        className="about-section"
        style={{
          padding: "50px",
          textAlign: "center",
          backgroundColor: "#6DDD00",
          color: "white",
        }}
      >
        <h1 style={{ textDecoration: "orchid",background:"green",width:"100%" }}>About Us</h1>
        <p style={{ color: "mintcream" }}>
          We are team of three people. Leader is Mr Naveez Ahmed and member of
          this team is Inzamam Ashraf and Ali Hassan. We are working on a
          project of Farming Assistant Web service which we can deal the three
          main users Farmer,Supplier and Customer. The Farming system is
          basically for the help of farmer and customer and the main purpose is
          to remove middle men.
        </p>
      </div>

      <h2 style={{ textAlign: "center",background:"green",color:"white",padding:"10px" }}>Our Team</h2>
      <div className="rows">
        <div className="column">
          <div className="card" style={{backgroundColor:"#6DDD00",color:"white"}}>
            <img
              src={inzi}
              alt="Inzamam"
              style={{ width: "90%",marginLeft:"auto",marginRight:"auto", height: "400px", borderRadius: "50%" }}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h2 style={{ textAlign: "center" }}>Inzamam</h2>
              <p style={{fontSize:"24px"}}>Developer</p>
              <p>
                My Name is Inzamam Ashraf and i am student of comsats university
                Lahore campus and i am from Muridke.
              </p>
              <p>SP18-BSE-162@cuilahore.edu.pk</p>
              <p>
                <button
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                    padding: "8px",
                    backgroundColor: "green",
                    color: "white",
                    fontSize:"28px",
                    fontWeight:"bolder"
                  }}
                >
                  Contact
                </button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card" style={{backgroundColor:"#6DDD00",color:"white"}}>
            <img
              src={naveez}
              alt="Naveez"
              style={{ width: "90%",marginLeft:"auto",marginRight:"auto", height: "400px", borderRadius: "50%" }}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h2 style={{ textAlign: "center" }}>Naveez</h2>
              <p style={{fontSize:"24px"}}>Lead Developer</p>
              <p>
                My Name is Naveez Ahmad and i am student of comsats university
                Lahore campus and i am from lahore.
              </p>
              <p>SP18-BSE-123@cuilahore.edu.pk</p>
              <p>
                <button
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                    padding: "8px",
                    backgroundColor: "green",
                    color: "white",
                    fontSize:"28px",
                    fontWeight:"bolder"
                  }}
                >
                  Contact
                </button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card" style={{backgroundColor:"#6DDD00",color:"white"}}>
            <img
              src={ali}
              alt="Ali Hassan"
              style={{ width: "90%",marginLeft:"auto",marginRight:"auto", height: "400px", borderRadius: "50%" }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                color: "white",
              }}
            >
              <h2 style={{ textAlign: "center" }}>Ali Hassan</h2>
              <p style={{fontSize:"24px"}}>Developer</p>
              <p>
                My Name is Ali Hassan and i am student of comsats university
                Lahore campus and i am from sialkot.
              </p>
              <p>SP18-BSE-141@cuilahore.edu.pk</p>
              <p>
                <button
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                    padding: "8px",
                    backgroundColor: "green",
                    color: "white",
                    fontSize:"28px",
                    fontWeight:"bolder"
                  }}
                >
                  Contact
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
