import React,{useState} from 'react';
import notification from '../../services/notification';
import userService from '../../services/UserService';
import complain from '../../services/admin/complain';
import { Table } from 'react-bootstrap';
import {MdDoubleArrow } from 'react-icons/md'
//import Cardnotification from './complaintcard';
import { useHistory } from 'react-router';
import './style.css'
// import Showmycom from './mycom';
import moment from 'moment';
const Notification = () => {
    const history=useHistory();
    const [complaints,setcomp]=useState([]);
    const [mycomplaints,setmycomp]=useState([]);
    const [users,setusers]=useState([]);//unverfied users 
    const getmycom=()=>{
              complain.getmycomplains().then((data)=>{
                //   console.log(data)
                  setmycomp(data);
              })
              .catch((err)=>{
                  console.log(err.response.data)
              })
    }
    
    const get=()=>{
        if(userService.isAdmin()){
            // console.log("not admin")
        notification.getsolved().then((data)=>{
            setcomp(data)})
        .catch((err)=>{console.log(err.response.data)});
        }
        else
        return;
    }
    const accountcheck=()=>{
        if(userService.isAdmin()){
        notification.getaccounts().then((data)=>{
            setusers(data);
          }).catch((err)=>{
           console.log(err.response.data)
         })
        }
        else
        return ;
    }
    React.useEffect(getmycom,[])
    React.useEffect(get,[]);
    React.useEffect(accountcheck,[]);
    return ( <div> 
           {userService.isAdmin()?
               <div>

                   <div style={{width:"100%",color:'white'}}>
                     <h1 style={{background:"green",padding:"10px"}}>Click to see</h1>
                   </div>
                   <div style={{background:"#6DDD00",display:"flex",flexDirection:'column',textAlign:"left"}}>
                       <h1 style={{cursor:"pointer",color:'white'}}
                        onClick={()=>{
                             history.push("/complaints")
                         }}
                        >
                           <MdDoubleArrow />
                           Complains 
                       </h1>
                       <h1 style={{cursor:"pointer",color:'white'}}
                       onClick={()=>{
                         history.push("/accounts")
                        }}
                       >
                       <MdDoubleArrow />
                           Unverfied accounts 
                       </h1>
                   </div>
                     
                       
                   
               </div>
           :<div>
               <h1>Showing your complaints</h1>
               {mycomplaints.length>0?<>
                <Table striped bordered hover>
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
            </div>
            }
           
    </div> );
}
 
export default Notification;