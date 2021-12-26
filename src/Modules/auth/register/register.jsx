import React,{useState} from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import {useForm} from 'react-hook-form'
import './register.css';
import '../../Ads/model/model.css'
import { useHistory } from 'react-router';
import customerService from '../../../services/customerservice';
import supplierService from '../../../services/supplierservice';
import farmerService from '../../../services/farmerservice';
import { toast } from 'react-toastify';
const Register = () => {
  const history=useHistory();
  // const {register,handleSubmit,erros}=useForm();
    const [size,setsize]=useState("20%");
   const[fname,setfname]=useState("");
   const[lname,setlname]=useState("");
   const[name,setname]=useState("");
   const[username,setusername]=useState("");
   const[password,setpassword]=useState("");
   const[role,setrole]=useState("farmer");
   const[photo,setphoto]=useState("");
   const[dis,setdis]=useState("none");
   const[phone,setphone]=useState("");
   const[regno,setregno]=useState("");
   const[imgupload,setimgupload]=useState(false);
   const[showanimation,setshowanimation]=useState(false);
   const[showbtn,setshowbtn]=useState(false);
   const[isempty,setisempty]=useState(false);
   const[fnerr,setfnerr]=useState("");
   const[lnerr,setlnerr]=useState("");
   const[unerr,setunerr]=useState("");
   const[pherr,setpherr]=useState("");
   const[pterr,setpterr]=useState("");
   const[pserr,setpserr]=useState("");
   const[regnoerr,setregnoerr]=useState("");

   const check=()=>{
     if(fname.length==0){
         setfnerr("first name is required")
     }
     else if(fname.length<3){
          setfnerr("First name length must be greater or equal to 3")
     }
     else 
     {
       setfnerr("")
       checklname()
     }
   }
   const checklname=()=>{
      if(lname.length==0){
         setlnerr("lastname is required")
     }
     else if(lname.length<3){
          setlnerr("lastname length must be greater or equal to 3")
     }
     else 
     {
       setlnerr("")
       checkuname()
     }
   }
   const checkuname=()=>{
      if(username.length==0){
         setunerr("username is required")
     }
     else if(username.length<3){
          setunerr("username length must be greater or equal to 3")
     }
     else 
     {
       setunerr("")
       checkphone()
     }
   }
   const checkphone=()=>{
      if(phone.length==0){
         setpherr("phone number is required")
     }
     else if(phone.length<11){
        setpherr("phone number must be 11 digit ")
     }
     else if(phone.length>11){
        setpherr("phone number must be 11 digit ")
     }
     else 
     {
       setpherr("")
       checkphoto()
     }
   }
   const checkphoto=()=>{
      if(photo.length==0){
         setpterr("please upload photo")
     }
     else 
     {
       setpterr("")
       if(role==="supplier"){
         checkregno()
       }
       else
       checkpassword()
     }
   }
   const checkregno=()=>{
     if(regno.length==0){
       setregnoerr("required")
     }
     else{
       setregnoerr("")
       checkpassword();
     }
   }
   const checkpassword=()=>{
      if(password.length==0){
         setpserr("password is required")
     }
     else if(password.length<6){
          setpserr("password lenght must be greater then 6")
     }
     else 
     {
       setpserr("")
       reg()
     }
   }
   const [imege,setImege]=useState("");
    const handleImg = (e) => {
        setImege(e.target.files[0]) 
        setshowbtn(true)
    }

   const postdetials=()=>{
       console.log("here is the call")
    const data=new FormData();
    data.append("file",imege)
    data.append("upload_preset","testapp")
    data.append("cloud_name","van12")
    fetch("https://api.cloudinary.com/v1_1/van12/image/upload",{
        method:"post",
        body:data
    })
    .then(res=>res.json())
    .then(data=>{
        setimgupload(true)
        setshowanimation(false)
        setphoto(data.url)
    })
    .catch(err=>{
        console.log(err)
    })
}

const reg = () => {
    if (role === "farmer")
      return farmerService
        .register(name, username, password, phone, photo)
        .then((data) => {
          setdis("block")
        })
        .catch((err) => {
            toast.error(err.response.data, {
                position: toast.POSITION.TOP_CENTER,
              });
        });
    else if (role === "supplier")
      return supplierService
        .register(name, username, password, phone, photo,  regno)
        .then((data) => {
          setdis("block")
        })
        .catch((err) => {
          toast.error(err.response.data, {
            position: toast.POSITION.TOP_CENTER,
          });
        });
    else
      return customerService
        .register(name, username, password, phone, photo)
        .then((data) => {
          setdis("block")
        })
        .catch((err) => {
          toast.error(err.response.data, {
            position: toast.POSITION.TOP_CENTER,
          });
        });
  };

  const getsize=()=>{
      if(window.innerWidth>600&&window.innerWidth<800){
          setsize("50%")
      }
      else if(window.innerWidth>800){
          setsize("25%")
      }
      else if(window.innerWidth<600){
          setsize("90%")
      }
  }

  window.addEventListener('resize',getsize);
  React.useEffect(getsize,[])
    return ( 
    <div className="registermain bgimg">
        {/* {showanimation?{postdetials}:<></>} */}
       <div className="registerform" style={{width:size}}>
         <div className="form">
                   <div style={{display:"flex"}}>
                   <div style={{width:"50%",marginRight:"6px"}}>
                    <p className="label">First Name*</p>
                    <input type="text" className="inputform"
                    required
                    value={fname}
                    onChange={(e)=>{
                      let value = e.target.value;

                      value = value.replace(/[^A-Za-z ]/gi, "");
                        setfname(value)
                       
                    }}
                    />
                    {fnerr.length!=0?<p style={{textAlign:"left",color:"red"}}>{fnerr}</p>:<></>}
                    </div> 
                    <div style={{width:"50%"}}>
                    <p className="label">Last name*</p>
                    <input type="text" className="inputform"
                    required
                    value={lname}
                    onChange={(e)=>{
                      let value = e.target.value;

                      value = value.replace(/[^A-Za-z ]/gi, "");
                        setlname(value)
                        setname( fname.concat(" "+lname))
                    }}
                    />
                     {lnerr.length!=0?<p style={{textAlign:"left",color:"red"}}>{lnerr}</p>:<></>}
                    </div> 
                   
                   </div>
                    
                    <div>
                    <p className="label">Username*</p>
                    <input type="text" className="inputform" 
                    required
                     value={username}
                      onChange={(e)=>{
                          setusername(e.target.value)
                      }}
                    />
                    </div> 
                    {unerr.length!=0?<p style={{textAlign:"left",color:"red"}}>{unerr}</p>:<></>}
                    <div>
                    <p className="label">Phone*</p>
                    <input type="text" className="inputform" 
                    required
                    value={phone}
                      onChange={(e)=>{
                        let value = e.target.value;

                      value = value.replace(/[^0-9]/gi, "");
                          setphone(value)
                      }}
                    />
                    </div> 
                    {pherr.length!=0?<p style={{textAlign:"left",color:"red"}}>{pherr}</p>:<></>}
                    <div>
                    <p className="label">Upload photo*</p>
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
                     <input type="file" className="inputform"
                     required
                      onChange={handleImg}
                    />
                    {pterr.length!=0?<p style={{textAlign:"left",color:"red"}}>{pterr}</p>:<></>}
                    </>}
                    
                    </>
                    }
                    </div> 
                    <div>
                    <p className="label">Select*</p>
                    <select id="role" name="role" className="select" 
                       value={role}
                       onChange={(e)=>{
                        //    console.log(e.target.value);
                           setrole(e.target.value)
                       }}
                    >
                      <option value="farmer">Farmer</option>
                      <option value="customer">Customer</option>
                       <option value="supplier">Supplier</option>
                    </select>
                    {/* {console.log(role)} */}
                    </div> 
                    {role==="supplier"?
                    <div>
                    <p className="label">Company Registeration Number*</p>
                    <input type="text" className="inputform"
                    required
                    onChange={(e)=>{
                        setregno(e.target.value)
                    }}
                    />
                    {regnoerr.length!=0?<p style={{textAlign:"left",color:"red"}}>{regnoerr}</p>:<></>}
                    </div> :<></>}
                    <div>
                    <p className="label">Password*</p>
                    <input type="password" className="inputform"
                    required
                      onChange={(e)=>{
                          setpassword(e.target.value)
                      }}
                    />
                    {pserr.length!=0?<p style={{textAlign:"left",color:"red"}}>{pserr}</p>:<></>}
                  
                    </div> 
                    <div>
                        
                    <button 
                     
                    className="btn" style={{backgroundColor:"green",fontWeight:"bolder",fontSize:"28px",color:"white"}}
                    onClick={() => {
                        // setModalOpen(true);
                        // reg();
                        check()
                      }}
                    >Sign Up</button>
                    <p style={{cursor:"pointer",color:"blue",textDecoration:"underline"}}
                      onClick={()=>{
                        history.push("/login")
                      }}
                    >Have already account!login</p>
                    </div> 
                    
            
         </div>




       </div>

       <div id="myModal" className="modal" style={{display:dis}} >

{/* <!-- Modal content --> */}
<div className="modal-content" >
  <div className="modal-header">
  <h2></h2>
    <span className="close" onClick={()=>{
      setdis("none") 
       history.push("/ads")}} >&times;</span>
    
  </div>
  <div className="modal-body">
      <h1>Successfully signed up</h1>
  </div>
  <div className="modal-footer">
    <h1  onClick={()=>
    {setdis("none")
     history.push("/login")
  }}
    style={{marginRight:"auto",marginLeft:"auto",border:"1px solid green",padding:"10px",backgroundColor:"green",cursor:"pointer"}}
    >OK</h1>
  </div>
</div>

</div>

    </div> );
}
 
export default Register;