import React,{useState} from 'react';
import notification from '../../services/notification';
// import userService from '../../services/UserService';
// import complain from '../../services/admin/complain'
import './style.css'
import Showcomplains from './showcomplain';
const Cardnotification = ({com}) => {
    const [noti,setnoti]=useState([]);
    
    // const [id,setid]=useState("");
    
    const check=()=>{
        notification.getcomplain().
        then((data)=>{
          //     console.log(data);
              setnoti(data);
        })
        .catch((err)=>{console.log(err.response.data)});
    }
    
    
    React.useEffect(check,[]);
    
    return ( <div>

         <div style={{width:"100%",background:"green",color:"white",textAlign:"center",padding:"10px"}}>
              <h1>Shwoing complaints</h1>
         </div>
         {noti.length>0?<>
          {noti.map((complain,index)=>(<Showcomplains key={index} com={complain}/>))}
        </>:"no complains"}

        
                   {/*  */}
                  
    </div>
         );
}
 
export default Cardnotification;