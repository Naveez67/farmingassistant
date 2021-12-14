import React, { useState } from "react";
import { Table, } from "react-bootstrap";
import { IoIosArrowDropright } from "react-icons/io";
import '../mangaement/style.css'
const Showmodel = ({ name, obj }) => {
  const [dis,setdis]=useState("none")
  return (
    <div> 
      <div>
       <p style={{padding:"5px",cursor:"pointer",textAlign:"left"}} onClick={()=>{setdis("block")}}><IoIosArrowDropright size="25px" style={{background:"green"}} /> {name}</p>
      </div>

      

{/* <!-- The Modal --> */}
<div id="myModal" class="modal" style={{display:dis}}>

  {/* <!-- Modal content --> */}
  <div class="modal-content">
    <div class="modal-header">
    <h2>{name}</h2>
      <span class="close" onClick={()=>{setdis("none")}}>&times;</span>
      
    </div>
    <div class="modal-body">
    <Table style={{ width: "70%" }}>
            <tr>
              <div>
                <td>
                  <div style={{ width: "30%" }}>
                    {obj.DiseaseType !== "undefined" ? (
                      <h5>DiseaseType</h5>
                    ) : (
                      <></>
                    )}
                    {obj.Control !== "undefined" && obj.Control.length !== 0 ? (
                      <h5>Control</h5>
                    ) : (
                      <></>
                    )}
                  </div>
                </td>
                <td>
                  <div style={{ width: "70%" }}>
                    {obj.DiseaseType !== "undefined" ? (
                      <h5>{obj.DiseaseType}</h5>
                    ) : (
                      <></>
                    )}
                    {obj.Control !== "undefined" && obj.Control.length !== 0 ? (
                      <>
                        {obj.Control.map((item, index) => {
                          return (
                            <div key={index}>
                              <h6>{item.name}</h6>
                              <p>{item.usage}</p>
                            </div>
                          );
                        })}
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                </td>
              </div>
            </tr>
            </Table>
    </div>
    <div class="modal-footer">
      <h3></h3>
    </div>
  </div>

</div>





    </div>
  );
};

export default Showmodel;
