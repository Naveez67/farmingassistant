import React ,{useState} from 'react';
import {  Table, Offcanvas } from 'react-bootstrap';
import './style.css'
const Showmodel = ({val,obj}) => {
  const array=Object.getOwnPropertyNames(obj)
  const getval=(item)=>{ 
    for (const [key, value] of Object.entries(obj)) {
       if(`${key}`===item)
      return `${value}`
    }

  }
   const [dis,setdis]=useState("none")
    return ( <div>

     <button id="myBtn"  style={{padding:"10px",background:"green",color:"white",fontSize:"22px" }}   onClick={()=>{
       setdis("block")
     }} >{val}</button>
     <div id="myModal" className="modal" style={{display:dis}} >

{/* <!-- Modal content --> */}
<div className="modal-content" >
  <div className="modal-header">
  <h2>{val}</h2>
    <span className="close" onClick={()=>{setdis("none")}} >&times;</span>
    
  </div>
  <div className="modal-body">
  <Table  >
         <tbody> 
        {array.length>0?<>
        {array.map((item,index) => {
               return (
                <tr style={{display:"flex"}} key={index} style={{listStyle:"none"}}>
                    <td><h5>{item}</h5><p>{getval(item)}</p></td>
                    
                </tr>
             )
              
              
            })}
     </>:
     <>
     
     </>}
     </tbody>
     </Table>
  </div>
  <div className="modal-footer">
    <h3></h3>
  </div>
</div>

</div>





    </div> );
}
 
export default Showmodel;