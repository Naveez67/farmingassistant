import { Grid } from '@mui/material';
import React,{useState,useEffect} from 'react';
import userService from '../../services/UserService';
// import './profile.css'
import {useHistory} from "react-router-dom"
import TextField from '@mui/material/TextField';
import { toast } from 'react-toastify';
import supplierService from '../../services/supplierservice';
import customerService from '../../services/customerservice';
import farmerService from '../../services/farmerservice';
import { CircularProgress } from "@mui/material";
const Profileupdate = () => {
    const [data,setdata]=useState(userService.getLoggedInUser());
    const [{ alt, src }, setImg] = useState({
      src: "",
      alt: "Upload an Image",
    });
    const [userdata,setuserdata]=useState([]);
    const [user,setuser]=useState([]);
    const [name,setname]=useState([]);
    const [photo,setphoto]=useState("");
    const [username, setusername] = useState("");
    const [role, setrole] = useState("");
    const [address,setaddress]=useState([]);
    const [phone,setphone]=useState([]);
    const [imege, setImege] = useState("");
    const[imgupload,setimgupload]=useState(false);
    const[showanimation,setshowanimation]=useState(false);
    const[showbtn,setshowbtn]=useState(false);
    const history=useHistory();
  // console.log(data);
   const getuser=()=>{
       userService.getsingleuser(data._id).then((data)=>{
          //  console.log(data);
           setuser(data);
           setusername(data.username);
           setrole(data.role)
       })
       .catch((err)=>{
           console.log(err.response.data);
       })

   }
   const handleImg = (e) => {
    setImege(e.target.files[0]);
    setshowbtn(true)
    if (e.target.files[0]) {
      setImg({
        src: URL.createObjectURL(e.target.files[0]),
        alt: e.target.files[0].name,
      });
    }
  };
  const postdetials = () => {
    const data = new FormData();
    data.append("file", imege);
    data.append("upload_preset", "testapp");
    data.append("cloud_name", "van12");
    fetch("https://api.cloudinary.com/v1_1/van12/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.url);
        setimgupload(true)
        setshowanimation(false)
        setphoto(data.url);
        // console.log(url);
      })
      .catch((err) => {
        console.log(err);
      });
  };
   const getuserdata=()=>{
       userService.getuserdata(data._id).then((data)=>{
          //  console.log(data);
           setuserdata(data);
           setname(data.name);
           setphone(data.phone);
           setaddress(data.address);
           setphoto(data.photo);
           setImg({
            src: data.photo,
            alt: data.name,
          });
       })
       .catch((err)=>{
           console.log(err.response.data);
       })

   }
   const farmer=()=>{
    farmerService.updatefarmer(user.userid,{name,username,phone,photo,address})
    .then((data)=>{
      alert("updated")
      history.push("/showprofile")
    }).catch((err)=>{
      toast.error(err.response.data, {
        position: toast.POSITION.TOP_LEFT,})
    })
  }
  const customer=()=>{
    customerService.updatecustomer(user.userid,{name,username,phone,photo,address})
    .then((data)=>{
      alert("updated");
      history.push("/showprofile")
    }).catch((err)=>{
      toast.error(err.response.data, {
        position: toast.POSITION.TOP_LEFT,})
    })
  }
  const supplier=()=>{
    supplierService.updatesupplier(user.userid,{name,username,phone,photo,address})
    .then((data)=>{
      alert("updated");
      history.push("/showprofile")
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
   useEffect(getuser,[getuser])
  useEffect(getuserdata,[getuserdata])
    return ( <div>
        <Grid container>
        <Grid item xs={12} className="head">
            <h3 >{username} Profile</h3>
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
                   <img src={src} alt={name} width="150px" height="150px" />
               <div>
                   {showanimation?<><CircularProgress />uploading....</>:<></>}
                    {imgupload?<><h4 style={{color:"green"}}>Uploaded</h4></>:<>
                    {showbtn?<><button  style={{fontWeight:"bolder",fontSize:"20px",border:"1px solid black"}} 
                    onClick={()=>{
                        setshowanimation(true);
                        postdetials()
                    }}
                    >
                        Upload photo
                        </button></>:
                    <>
                     <input
                       type="file"
                      //  accept=".png, .jpg, .jpeg"
                       id="photo"
                       onChange={handleImg}
                      />
                    
                    </>}
                    
                    </>
                    }
                    {/* {pterr.length!=0?<p style={{textAlign:"left",color:"red"}}>{pterr}</p>:<></>} */}
      </div>

            </div>
        </Grid>  
        <Grid item xs={12} >
              <button className="btn" style={{background:"green",color:"white",padding:"10px",fontSize:"30px",marginTop:"2rem"}} onClick={()=>{
                  // console.log("clicked")
                  gett();
                  // history.push("/showprofile");
              }}>
                    Edit
              </button>
        </Grid>
        </Grid>
            
    </div> );
}
 
export default Profileupdate;  