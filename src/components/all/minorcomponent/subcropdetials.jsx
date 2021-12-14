import React from "react";
import Showmodel from "./showmodel";
const Subcropdetials = ({ diseases }) => {
  return (
    <div style={{marginTop:"1rem",marginRight:"5rem"}}>
      {diseases.length > 0 ? (
        <>
          {diseases.map((item, index) => {
            return (

                <div key={index}

                >
                   <Showmodel name={item.DiseaseName} obj={item}/>
                  </div>
                  
                  
              )
          })}
        </>
      ) : (
        <></>
      )}
      
    </div>
  );
};

export default Subcropdetials;
