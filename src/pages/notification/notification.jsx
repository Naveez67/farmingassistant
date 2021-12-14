import React,{useState} from 'react';
import notification from '../../services/notification';
import userService from '../../services/UserService';
import complain from '../../services/admin/complain';
import { Table } from 'react-bootstrap';
//import Cardnotification from './complaintcard';
import { useHistory } from 'react-router';
import './style.css'
import Showmycom from './mycom';
import moment from 'moment';
const Notification = () => {
    const history=useHistory();
    const [complaints,setcomp]=useState([]);
    const [mycomplaints,setmycomp]=useState([]);
    const [users,setusers]=useState([]);//unverfied users 
    const getmycom=()=>{
              complain.getmycomplains().then((data)=>{
                  console.log(data)
                  setmycomp(data);
              })
              .catch((err)=>{
                  console.log(err.response.data)
              })
    }
    
    const get=()=>{
        if(userService.isAdmin()){
            console.log("not admin")
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
                     <div className="main">
                     <h1>Showing notification</h1>
                     </div>
                     <div className="show">
                         <div className="complain" onClick={()=>{
                             console.log("complaints");
                             history.push("/complaints")
                         }}>
                                <span className="text"> Complaints</span>
                         </div>
                         <div className="complain" onClick={()=>{
                             console.log("Accounts")
                             history.push("/accounts")
                            }}
                             >
                                <span className="text"> Accounts</span>
                         </div>
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