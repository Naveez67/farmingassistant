import React from 'react';
import { Table } from 'react-bootstrap';
const More = ({more}) => {
   const array=Object.getOwnPropertyNames(more)
   const getval=(item)=>{ 
     for (const [key, value] of Object.entries(more)) {
        if(`${key}`===item)
       return `${value}`
     }

   }
    return ( <div>
        <Table  style={{width:"33%",textAlign:"left"}}>
         <tbody> 
        {array.length>0?<>
        {array.map((item,index) => {
               return (
                <tr style={{display:"flex"}} key={index} style={{listStyle:"none"}}>
                    <td >{item}:</td>
                    <td>{getval(item)}</td>
                </tr>
             )
              
              
            })}
     </>:
     <>
     
     </>}
     </tbody>
     </Table>
    </div> );
}
 
export default More;