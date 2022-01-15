import React,{useState} from "react";
import "../login/style.css";
import { useHistory,useParams } from "react-router";
import userService from "../../../services/UserService";
import Firebasecal from "../New folder/firebasecal";
import { toast } from "react-toastify";
const Newpasswordscreen = () => {
 const history=useHistory();
 const param=useParams();
const name=param.username;
  const [size,setsize]=useState("20%");
  const [username,setusername]=useState("");
  const [phone,setphone]=useState("");
  const [otp,setotp]=useState(false);
//   const [pserr,setpserr]=useState("");
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
  const check=()=>{
    if(username.length==0){
      setunerr("required")
    }
    else {
        setunerr("");
        // <Firebasecal setotp={setotp} phone={phone} />
      // checkaccount()
    }
  }
  const getphone=()=>{
    userService.getuserphone(name)
    .then((data) => {
         console.log(data)
         setphone(data)
        //  console.log(typeof(phone))
    })
    .catch((err) => {
      // console.log(err.response.data);
      toast.error(err.response.data, {
        position: toast.POSITION.TOP_RIGHT,})
    });
  }
  window.addEventListener('resize',getsize);


  React.useEffect(getsize,[])
  React.useEffect(getphone,[])
  return (
      <div
      className="bgimg"
        style={{
          display: "flex",
          justifyContent: "center",
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
         
          <div>
            <p style={{textAlign:"left",fontSize:"20px",fontWeight:"bold"}}>can we send otp to this number<br />
             03********{phone.slice(-2)}
            </p>
            {/* <input
            type="text"
            className="inputform"
            placeholder="username"
            required
            value={username}
            onChange={(e)=>{
              let value = e.target.value;

                      value = value.replace(/[^0-9]/gi, "");
              setusername(value)
            }}
            /> 
            {unerr.length!=0?<p style={{textAlign:"left",color:"red"}}>{unerr}</p>:<></>} */}
            <Firebasecal setotp={setotp} phone={phone} />
          </div>
          {/* <div style={{display:"flex",justifyContent:"center"}}>
              <button 
                style={{width:"100%",backgroundColor:"green",color:"white",padding:"10px",marginTop:"1rem",fontSize:"24px",fontWeight:"bold"}}
                onClick={() => {
                  check()
                }}
              
              >Send  code</button>
          </div> */}
        </div>
      </div>
  )
}

export default Newpasswordscreen;