import moment from 'moment';
import React from 'react';
import complain from "../../../services/admin/complain";
import { Table } from 'react-bootstrap';
const Mycomplains = () => {
  const [mycomplaints,setmycomp]=React.useState([]);
  const getmycom=()=>{
    complain.getmycomplains().then((data)=>{
        console.log(data)
        setmycomp(data);
    })
    .catch((err)=>{
        console.log(err.response.data)
    })
}
React.useEffect(getmycom,[])
    return ( <div style={{width:"100%"}}>
        <h2>My complains</h2>
        {mycomplaints.length>0?<>
                <Table striped bordered hover style={{backgroundColor:"#6DDD00",color:"white"}}>
                    <thead>
                    <tr>
        <th>Complain</th>
        <th>Description</th>
        <th>Date</th>
        <th>Status</th>
      </tr>
                    </thead>
                  <tbody>
                    {mycomplaints.map((item,index) => {
            const {title,body,Status,dateofcomplain } = item //destructuring
              
            return (
                <tr key={index}>
                   <td>{title}</td>
                   <td>{body}</td>
                   <td>{moment(dateofcomplain).format("MMM Do YY")}</td>
                   <td>{Status}</td>
                </tr>
             )
            })}
            </tbody>
                    </Table>
                  </>:
                  <>
                  <h1>Nothing to Show</h1>
                  </>} 
    </div> );
}
 
export default Mycomplains;