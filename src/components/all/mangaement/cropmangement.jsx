import React from "react";
import Showmodel from "./showmodel";
const Mangament = ({ mangament }) => {
  var val, array1;
  array1 = Object.getOwnPropertyNames(mangament);
  const getval = (item) => {
    for (const [key, value] of Object.entries(mangament)) {
      if (`${key}` === item) val = value;
    }
  };
  return (
    <div>
      {array1.length > 0 ? (
        <>
          {array1.map((item, index) => {
            return (
              <div
                key={index}
                style={{ display: "inline-flex", marginRight: "2rem" }}
              >
                {getval(item)}
                <Showmodel val={item} obj={val} />
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

export default Mangament;
