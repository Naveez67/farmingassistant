import { Avatar } from '@mui/material';
import moment from 'moment';
import React from 'react';
import userService from "../../services/UserService"
const Userinfo = ({id,text,time}) => {
    const [data,setdata]=React.useState("")
    const getimg=()=>{
        userService.getsingleuser(id).then((res)=>
        {
           // console.log(res);
            setdata(res)})
            .catch((err)=>{console.log(err)})
    }
    React.useEffect(getimg,[])
    return ( 
        <div style={{marginBottom:"0rem"}}>
    <div style={{display:"flex"}}>
           <Avatar alt="Remy Sharp" src="" size="20px"/>
           <div style={{textAlign:"left"}}>
          <h5>{data.username}</h5>
          <p style={{marginTop:"-.5rem"}}>{ moment(time).format("MMM Do YY")}</p> 
          </div>
    </div>
    {text===""?<></>:<><p style={{textAlign:"left"}}>{text}</p></>} 
    </div>
    );
}
 
export default Userinfo;