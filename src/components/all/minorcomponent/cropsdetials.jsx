import React from "react";
import Subcropdetials from "./subcropdetials";
const Cropdetials = ({ detials }) => {
  var val;
  const array1 = Object.getOwnPropertyNames(detials);
  const getval = (item) => {
    for (const [key, value] of Object.entries(detials)) {
      if (`${key}` === item) val = value;
    }
  };
  return (
    <div style={{ marginTop: "1rem" }}>
      <h3 style={{ textAlign: "left" }}>Diseases</h3>
      <h5 style={{ textAlign: "left" }}>{detials.Name}</h5>
      {array1.length > 0 ? (
        <>
          {array1.map((item, index) => {
            return (
              <div key={index}>
                {item === "Name" ? (
                  <></>
                ) : (
                  <h4
                    style={{
                      textAlign: "left",
                      border: "3px solid green",
                      padding: "1rem",
                      background:"green",
                      color:"white"
                    }}
                  >
                    {item}
                  </h4>
                )}
                {"  "}
                {item === "Name" ? (
                  <></>
                ) : (
                  <>
                    {getval(item)}
                    <div style={{marginRight:"auto"}}>
                    <Subcropdetials diseases={val} />
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Cropdetials;
