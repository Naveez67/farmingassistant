import React from "react";
import Showmodel from "./showmodel";
const Subcropdetials = ({ diseases }) => {
  return (
    <div style={{marginTop:"1rem"}}>
      {diseases.length > 0 ? (
        <>
          {diseases.map((item, index) => {
            return (

                <div key={index}
                 style={{marginLeft:"0px"}}
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
