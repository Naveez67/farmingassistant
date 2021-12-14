import React from "react";
import { Avatar } from '@mui/material';
import moment from 'moment';
const Showcomments = ({ com }) => {
  console.log(com)
  return (
    <div style={{marginBottom:"0rem"}}>
      {console.log("comment page start")}
    <div style={{display:"flex"}}>
           {/* <Avatar alt="Remy Sharp" src="" size="20px"/> */}
           {/* <div style={{textAlign:"left"}}> */}
          {/* <h5>{com.username}</h5> */}
          {/* <p style={{marginTop:"-.5rem"}}>{ moment(com.comdate).format("MMM Do YY")}</p>  */}
          {/* </div> */}
    </div>
    {com.text===""?<></>:<><p style={{textAlign:"left"}}>{com.text}</p></>} 
    </div>
  );
};

export default Showcomments;
