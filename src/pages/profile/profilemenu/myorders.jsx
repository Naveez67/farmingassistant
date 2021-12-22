import moment from 'moment';
import React,{useState} from 'react';
import { Table } from 'react-bootstrap';
import "../../../components/all/mangaement/style.css"
const Myorders = ({orders}) => {
  const [adid, setadid] = useState(""); 
  const [title, settitle] = useState(""); 
  const [dis, setdis] = useState(""); 
  const getorders=(item,index)=>{
     if(item._id===adid){
       return <div key={index} style={{textAlign:"left"}}>
            <img src={item.photo} alt="img" width="200px" height="200px" />
            <h2>Product name:{" "+title}</h2>
           <h2>Buyer Name:{" "+item.buyername}</h2>
           <h2>Delivery address:{" "+item.address}</h2>
           <h2>Buyer Phone:{" "+item.phone}</h2>
           <h2>Total amount:{" "+item.totalamount}</h2>
       </div>

     }
  }


    return ( <div style={{width:"100%"}}>
  <h2>orders</h2>
  {orders.length>0?<>
                <Table striped bordered hover  style={{backgroundColor:"#6DDD00",color:"white"}}>
                    <thead>
                    <tr>
        <th>Buyer Name</th>
        <th>Contact No</th> 
        <th>Quanitity</th>
        <th>Total amount</th>
        <th>Address</th>
        <th>Date of order</th>
        <th>Acation</th>
      </tr>
                    </thead>
                  <tbody>
                    {orders.map((item,index) => {
            const {buyername,totalamount,quantity,phone,address,dateoforder} = item //destructuring
              
            return (
                <tr key={index}>
                   <td>{buyername}</td>
                   <td>{phone}</td>
                   <td>{quantity}</td>
                   <td>{totalamount}</td>
                   <td>{address}</td>
                   <td>{moment(dateoforder).format("MMM Do YY")}</td>
                   <td><p style={{cursor:"pointer"}} onClick={()=>{
                     setadid(item._id)
                     setdis("block")
                     }}>View</p></td>
                </tr>
             )
            })}
            </tbody>
                    </Table>
                  </>:
                  <>
                  <h1>You have not recived any order yet</h1>
                  </>} 
                  <div id="myModal" className="modal" style={{display:dis}} >

{/* <!-- Modal content --> */}
<div className="modal-content" >
  <div className="modal-header">
  <h2></h2>
    <span className="close" onClick={()=>{setdis("none")}} >&times;</span>
    
  </div>
  <div className="modal-body">
         <div > 
        {orders.length>0?<>
        {orders.map((item,index) => {
               return (

                getorders(item,index)
             )
              
              
            })}
     </>:
     <>
     
     </>}
     </div>
  </div>
  <div className="modal-footer">
    <h3></h3>
  </div>
</div>

</div>
    </div> );
}
 
export default Myorders;