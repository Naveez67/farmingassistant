import moment from 'moment';
import React from 'react';
import { Table } from 'react-bootstrap';

const Myorders = ({orders}) => {
  console.log(orders)
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
                   <td><p style={{cursor:"pointer"}}>View</p></td>
                </tr>
             )
            })}
            </tbody>
                    </Table>
                  </>:
                  <>
                  <h1>You have not recived any order yet</h1>
                  </>} 
    </div> );
}
 
export default Myorders;