import React,{useState} from 'react';
import notification from '../../services/notification';
import userService from '../../services/UserService';
import complain from '../../services/admin/complain'
import './style.css'
import Showcomplains from './showcomplain';
import moment from 'moment';
import { Table } from 'react-bootstrap';
import { Button } from '@mui/material';
const Cardnotification = ({com}) => {
    const [noti,setnoti]=useState([]);
    const [name,setname]=useState("");
    const [role,setrole]=useState("");
//     const [Status,setStatus]=useState(com.Status);
    const getname=(id)=>{
              getuser(id)
              return role
    }
    const getuser=(id)=>{
     userService.getsingleuser(id).then((data)=>{
        console.log(data);
        setname(data.username);
        setrole(data.role);
     })
 }
 const hnadlestus=(status, comid)=>{
     console.log("status"+status);
     complain.updatecomplain(comid,{status}).then((data)=>{
       console.log(data);
     //   history.push("/notification")
     })
     .catch((err)=>{
       console.log('error');
     })
     
}
    
    const check=()=>{
        notification.getcomplain().
        then((data)=>{
              console.log(data);
              setnoti(data);
        })
        .catch((err)=>{console.log(err.response.data)});
    }
    
    
    React.useEffect(check,[]);
    
    return ( <div>

         <div style={{width:"100%",background:"green",color:"white",padding:"10px"}}>
              <h1>Shwoing complaints</h1>
         </div>
         {noti.length>0?<>
          <Table striped bordered hover  style={{backgroundColor:"#6DDD00",color:"white"}}>
                    <thead>
                    <tr>
        <th>Title</th>
        <th>Complain body</th> 
        <th>Complaint By</th>
        <th>Username</th>
        <th>Status</th>
        <th>Date of complain</th>
        <th>Acation</th>
      </tr>
                    </thead>
                  <tbody>
                    {noti.map((item,index) => {
            const {title,body,Status,dateofcomplain,complainby} = item //destructuring
              
            return (
                <tr key={index}>
                   <td>{title}</td>
                   <td>{body}</td>
                   <td>{getname(complainby)}</td>
                   <td>{name}</td>
                   <td>{Status}</td>
                   <td>{moment(dateofcomplain).format("MMM Do")}</td>
                   <td>
                      <div style={{display:"flex",flexDirection:"column"}}> 
                      <Button variant="contained" style={{background:"red",color:"white",marginBottom:"4px"}}
                      onClick={()=>{ hnadlestus("reject",item._id);}}
                      >
                           Reject
                      </Button>
                      <Button variant="contained" style={{background:"green",color:"white",marginBottom:"4px"}}
                      onClick={()=>{ hnadlestus("solved",item._id)}}>
                           Solve
                      </Button>
                      <Button variant="contained" style={{background:"black",color:"white"}} 
                      onClick={()=>{ hnadlestus("hold",item._id)}}>
                           Hold
                      </Button>
                      </div> 

                   </td>
                </tr>
             )
            })}
            </tbody>
                    </Table>
        </>:"no complain to show"}
        
        
    </div>
         );
}
 
export default Cardnotification;