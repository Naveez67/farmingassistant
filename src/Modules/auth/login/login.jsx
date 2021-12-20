import React,{useState} from "react";
import { BiUserCircle } from "react-icons/bi";
import "./style.css";
import { useHistory } from "react-router";
import userService from "../../../services/UserService"
import { toast } from "react-toastify";
const Login = () => {
 const history=useHistory()
  const [size,setsize]=useState("20%");
  const [username,setusername]=useState("");
  const [password,setpassword]=useState("");
  const [pserr,setpserr]=useState("");
  const [unerr,setunerr]=useState("");
  const getsize=()=>{
      if(window.innerWidth>600&&window.innerWidth<800){
          setsize("50%")
      }
      else if(window.innerWidth>800){
          setsize("25%")
      }
      else if(window.innerWidth<600){
          setsize("60%")
      }
  }
  // const check=()=>{
  //   if(username.length==0){
  //     setunerr("required")
  //   }
  //   else if(pserr.length==0){
  //     setunerr("")
  //     setpserr("required")
  //   }
  //   else {
  //     setpserr("")
  //     handlelogin()
  //   }
  // }
  const handlelogin=()=>{
    userService
    .login(username, password)
    .then((data) => {
      // console.log(data);
       window.location.href = "/";
    })
    .catch((err) => {
      // console.log(err.response.data);
      toast.error(err.response.data, {
        position: toast.POSITION.TOP_RIGHT,})
    });
  }
  window.addEventListener('resize',getsize);
  React.useEffect(getsize,[])
  return (
      <div
      className="bgimg"
        style={{
          display: "flex",
          justifyContent: "end",
          height: "800px",
          flexDirection: "column",
          width: "100%",
          margin: "auto",
          padding: "auto",
        }}
      >
        <div className="desgin"
          style={{
            marginTop: "auto",
            // backgroundColor: "orange",
            marginBottom: "auto",
            width: size,
            marginLeft: "auto",
            marginRight: "8%",
            padding:"1%"
          }}
        >
         
          <div style={{display:"flex",justifyContent:"center"}}>
              <BiUserCircle size="120px "/>
          </div>
          <div>
            <p style={{textAlign:"left",fontSize:"20px",fontWeight:"bold"}}>Username</p>
            <input
            type="text"
            className="inputform"
            placeholder="username"
            required
            onChange={(e)=>{
              setusername(e.target.value)
            }}
            /> 
            {unerr.length!=0?<p style={{textAlign:"left",color:"red"}}>{unerr}</p>:<></>}
            <p style={{textAlign:"left",fontSize:"20px",fontWeight:"bold"}}>Password</p>
            <input
            className="inputform"
            type="password"
            placeholder="*******"
            required
            onChange={(e)=>{
              setpassword(e.target.value)
            }}
            /> 
            {pserr.length!=0?<p style={{textAlign:"left",color:"red"}}>{pserr}</p>:<></>}
          </div>
          <div style={{display:"flex",justifyContent:"center"}}>
              <button 
                style={{width:"100%",backgroundColor:"green",color:"white",padding:"10px",marginTop:"1rem",fontSize:"24px",fontWeight:"bold"}}
                onClick={() => {
                  handlelogin()
                }}
              
              >Login</button>
          </div>
          <div>
              <p
              style={{cursor:"pointer",color:"blue",textDecoration:"underline"}}
              onClick={()=>{
                history.push("/register")
              }}
              >Not registed! register</p>
          </div>

        </div>
      </div>
  )
}
{/* <div>
<h2>Modal Login Form</h2>

<button onClick={()=>{setdis("block")}} style={{width:"auto"}}>Login</button>

<div id="id01" className="modal" style={{display:dis}}>
  
  <form className="modal-content animate">
  <span onClick={()=>{setdis("none")}} class="close" title="Close Modal">&times;</span>
  <div style={{display:"flex",justifyContent:"center"}}>
               <BiUserCircle size="120px "/>
           </div>
           <div>
             <p style={{textAlign:"left"}}>Username</p>
             <input
             type="text"
             className="inputform"
             placeholder="username"
             /> 
             <p style={{textAlign:"left"}}>Password</p>
             <input
             className="inputform"
             type="password"
             placeholder="username"
            
             /> 
           </div>
           <div style={{display:"flex",justifyContent:"center"}}>
               <button className="btn">Login</button>
           </div>
           <div>
               <p>Not registed! register</p>
           </div>
  </form>
</div>


</div> */}


export default Login;
