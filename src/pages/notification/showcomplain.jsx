import React,{useState} from 'react';
import complain from '../../services/admin/complain';
import userService from '../../services/UserService';
import { useHistory } from 'react-router';
import './style.css'
const Showcomplains = ({com}) => {
    const history=useHistory();
    const [title,settitle]=useState(com.title);
    const [body,setbody]=useState(com.body);
    const [complainby,setcomplainby]=useState(com.complainby);
    const [Status,setStatus]=useState(com.Status);
    const [name,setname]=useState("");
    const [role,setrole]=useState("");
    const getuser=()=>{
        userService.getsingleuser(complainby).then((data)=>{
           console.log(data);
           setname(data.username);
           setrole(data.role);
        })
    }
    const hnadlestus=(status, comid)=>{
        console.log("status"+status);
        complain.updatecomplain(comid,{status}).then((data)=>{
          console.log(data);
          history.push("/notification")
        })
        .catch((err)=>{
          console.log('error');
        })
        
   }
    React.useEffect(getuser,[]);
    return ( <div>
        <div className="cardbd">
                   <h3>Title</h3>
                   {title}
                   <h5>Complain body</h5>
                   {body} 
                   <h6>Complaint By</h6>
                   {role}
                   <h6>Status</h6>
                   {Status}
                   <h6>Username</h6>
                   {name}
                   <br/>
                   <button className="button"onClick={()=>{ hnadlestus("reject",com._id);}}>Reject</button>
                   <button className="button"onClick={()=>{ hnadlestus("solved",com._id)}}>Solve</button>
                   <button className="button"onClick={()=>{ hnadlestus("hold",com._id)}}>Hold</button>
                   

                   </div>
    </div> );
}
 
export default Showcomplains;