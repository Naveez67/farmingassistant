import React,{useState} from 'react';
import userService from '../../services/UserService';
import { useHistory,useParams } from "react-router-dom";
import { Grid } from '@mui/material';
const Acountdata = () => {
    const history=useHistory();
    const param=useParams();
    const id =param.id;
    const [userdata,setuserdata]=useState();
    const [name,setname]=useState("");
    const [address,setaddress]=useState("");
    const [phone,setphone]=useState("");
    const [photo,setphoto]=useState("");
    const [regno,setregno]=useState("");
    const [user,setuser]=useState();
    const getuser=()=>{
        userService.getsingleuser(id).then((data)=>{setuser(data)}).catch((err)=>{console.log(err.response.data)})
    }
    const getuserdata=()=>{
        userService.getuserdata(id).then((data)=>
        {
            // console.log(data)
            setuserdata(data);
            setname(data.name);
            setregno(data.regno)
            setphone(data.phone)
            setphoto(data.photo)
        }).catch((err)=>{console.log(err.response.data)})
    }
    React.useEffect(getuser,[]);
    React.useEffect(getuserdata,[]);
    // console.log(name+address+phone);
    return ( <Grid container>
        <Grid item xs={12} className="head">
            <h3 className="profile">Profile</h3>
        </Grid>
        <Grid item xs={6} sm={6}> 
        <div  style={{textAlign:"left"}}>
                  <h3>Name</h3>
                  {name} 
                  <h4>Phone</h4>
                  {phone}
                  <h4>Company Registration number</h4>
                  {regno}
                  

              </div>
        </Grid>
        <Grid item xs={6} sm={6} >
            <div className="image" >
                <img src={photo} alt={name}  height="250" width="250"/>
            </div>
        </Grid>  
        <Grid item xs={12} >
            <div style={{display:"flex",flexWrap:"wrap",marginTop:"2rem"}}>
              <button  style={{width:"10%",padding:"10px",background:"green",color:"white",marginRight:"1rem"}}
               onClick={()=>{
                //   console.log("clicked")
                  userService.approve(id).then((data)=>{
                    //   console.log(data);
                      history.push("/notification");
                  }).catch((err)=>{
                      console.log(err.response.data);
                  })
                  
              }}>
                    Approve
              </button>
              <button  style={{width:"10%",padding:"10px",background:"green",color:"white"}}
              onClick={()=>{
                //   console.log("clicked")
                    userService.deleteuser(id).then((data)=>{
                    // console.log(data);
                    history.push("/notification");
                }).catch((err)=>{
                    console.log(err.response.data);
                })
              }}>
                    Reject
              </button>
              </div>
        </Grid>
        </Grid> );
}
 
export default Acountdata;