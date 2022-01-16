import React from 'react';
import Showads from '../showads';
import userService from '../../../services/UserService';
import {Button} from "@mui/material";
import { useHistory } from 'react-router-dom';
import './main.css'
const Displayads = () => {
    const [type,setype]=React.useState("");
     const history=useHistory();
    return ( 
    <div>
           <div style={{width:"100%",padding:"15px",background:"green",marginBottom:"1rem"}}>
               <h1 style={{textAlign:"center",color:"white"}}>Ads</h1>
           </div>
           {userService.isFarmerorSupplier()?<>
            <div style={{marginBottom:"1rem",marginTop:"1rem",display:"flex"}}>
           <Button size="large" variant="contained" color="success" sx={{marginLeft:"auto",marginRight:"5%"}}
        onClick={()=>{
           history.push("/postad")
         }}
        >Post ad</Button>
        </div>
           </>:<></>}
          
           
           <Showads type={type}/>
           
    </div> 
    );
}
 
export default Displayads;