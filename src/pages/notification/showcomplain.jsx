import React,{useState} from 'react';
import complain from '../../services/admin/complain';
import userService from '../../services/UserService';
import { useHistory } from 'react-router';
import './style.css'
const Showcomplains = ({com}) => {
    const history=useHistory();
    const title=com.title;
    const body=com.body;
    const complainby=com.complainby;
    const Status=com.Status;
    const [name,setname]=useState("");
    const [role,setrole]=useState("");
    const getuser=()=>{
        userService.getsingleuser(complainby).then((data)=>{
         //   console.log(data);
           setname(data.username);
           setrole(data.role);
        })
    }
    const hnadlestus=(status, comid)=>{
       // console.log("status"+status);
        complain.updatecomplain(comid,{status}).then((data)=>{
          console.log(data);
          history.push("/notification")
        })
        .catch((err)=>{
          console.log('error');
        })
        
   }
    React.useEffect(getuser,[getuser]);
    return ( 
    <div style={{display:"flex",flexDirection:"column",background:"#6DDD00",color:"white"}}>
       
       <div style={{textAlign:"left",marginLeft:"3%",marginTop:"1rem",marginBottom:"1rem"}}>
       <h3>Title</h3>
       <p>{title}</p>
       <h5>Complain body</h5>
       <p style={{textAlign:"justify",textJustify:"interword",width:"70%"}}>{body}</p>
       <h5>Complaint By</h5>
       <p>{role}</p>
       <h5>Complainer name</h5>
       <p>{name}</p>
       <h5>Status</h5>
       <p>{Status}</p>
       <div style={{display:"flex"}}>
       <button className='custombtn' onClick={()=>{ hnadlestus("reject",com._id);}}>Reject</button>
       <button className='custombtn' onClick={()=>{ hnadlestus("solved",com._id)}}>Solve</button>
       <button className='custombtn' onClick={()=>{ hnadlestus("hold",com._id)}}>Hold</button>
       </div>
     
       </div>
        
    <hr style={{color:"black",padding:"4px"}}    />        
    </div>
     );
}
 
export default Showcomplains;