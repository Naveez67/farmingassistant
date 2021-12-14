import { Grid } from '@mui/material';
import React,{useState,useEffect} from 'react';
import userService from '../../services/UserService';
import './profile.css'
import {useHistory} from "react-router-dom"
import TextField from '@mui/material/TextField';
import { toast } from 'react-toastify';
import supplierService from '../../services/supplierservice';
import customerService from '../../services/customerservice';
import farmerService from '../../services/farmerservice';
const Profileupdate = () => {
    const [data,setdata]=useState(userService.getLoggedInUser());
    const [userdata,setuserdata]=useState([]);
    const [user,setuser]=useState([]);
    const [name,setname]=useState([]);
    const [photo,setphoto]=useState("");
    const [username, setusername] = useState("");
    const [role, setrole] = useState("");
    const [address,setaddress]=useState([]);
    const [phone,setphone]=useState([]);
    const history=useHistory();
  console.log(data);
   const getuser=()=>{
       userService.getsingleuser(data._id).then((data)=>{
           console.log(data);
           setuser(data);
           setusername(data.username);
           setrole(data.role)
       })
       .catch((err)=>{
           console.log(err.response.data);
       })

   }
   const getuserdata=()=>{
       userService.getuserdata(data._id).then((data)=>{
           console.log(data);
           setuserdata(data);
           setname(data.name);
           setphone(data.phone);
           setaddress(data.address);
           setphoto(data.photo)
       })
       .catch((err)=>{
           console.log(err.response.data);
       })

   }
   const farmer=()=>{
    farmerService.updatefarmer(user.userid,{name,username,phone,photo,address})
    .then((data)=>{
      alert("updated")
    }).catch((err)=>{
      toast.error(err.response.data, {
        position: toast.POSITION.TOP_LEFT,})
    })
  }
  const customer=()=>{
    customerService.updatecustomer(user.userid,{name,username,phone,photo,address})
    .then((data)=>{
      alert("updated");
     
    }).catch((err)=>{
      toast.error(err.response.data, {
        position: toast.POSITION.TOP_LEFT,})
    })
  }
  const supplier=()=>{
    supplierService.updatesupplier(user.userid,{name,username,phone,photo,address})
    .then((data)=>{
      alert("updated");
    })
    .catch((err)=>{
      toast.error(err.response.data, {
        position: toast.POSITION.TOP_LEFT,})
    })
  }
    const gett=()=>{
        if(role==="farmer") {
         // console.log("Gett > farmer >> ",name);
          farmer();
        }
        
        else if(role==="supplier") {
          //console.log("Gett > supplier >>",name);
           supplier();
        }
        else {
           // console.log("Gett > customer >>",name);
            customer();
        }
    }
   React.useEffect(getuser,[])
   React.useEffect(getuserdata,[])
    return ( <div>
        <Grid container>
        <Grid item xs={12} className="head">
            <h3 className="profile">{username} Profile</h3>
        </Grid>
        <Grid item xs={6} sm={6}>
             <div className="name">
             <TextField id="standard-basic" label="Name" variant="standard"
                value={name}
                onChange={(e)=>{
                    setname(e.target.value)
                }}
             />
                {""}<br />
                <TextField id="standard-basic" label="Address" variant="standard" 
                value={address}
                onChange={(e)=>{
                    setaddress(e.target.value)
                }}
                />
                {""}<br />
                <TextField id="standard-basic" label="Phone" variant="standard" 
                value={phone}
                type="number"
                onChange={(e)=>{
                    setphone(e.target.value)
                }}
                />
                {""}<br />
              </div>
        </Grid>
        <Grid item xs={6} sm={6} >
            <div className="image" >
                   Profile Image 
            </div>
        </Grid>  
        <Grid item xs={12} >
              <button className="btn" onClick={()=>{
                  console.log("clicked")
                  gett();
                  history.push("/showprofile");
              }}>
                    Edit
              </button>
        </Grid>
        </Grid>
            
    </div> );
}
 
export default Profileupdate;  