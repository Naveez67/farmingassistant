import React,{useState} from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import agriofficeService from "../../../services/admin/Agrioffices";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify"; 
import './style.css'
import '../../../components/all/mangaement/style.css'
const Newagrioffice = () => {
  const history = useHistory();
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [address, setaddress] = useState("");
  const [city, setcity] = useState("");
  const [dis,setdis]=useState("none")
  const [pnerr,setpnerr]=useState("");
  const [prerr,setprerr]=useState("");
  const [aderr,setaderr]=useState("");
  // const [diserr,setdiserr]=useState("");
  const [cityerr,setcityerr]=useState("");
  const check=()=>{
    if(name.length===0){
      setpnerr("name is required")
    }
    else if(name.length<3)
    {
      setpnerr("name length must be greater then or equal to 3");
    }
    else {
      setpnerr("")
      checkphone()
    }
  }
  const checkphone=()=>{
    if(phone.length===0){
      setprerr("phone number  is required")
    }
    else if(phone.length<11){
      setprerr("phone number must be 11 digit ")
    }
    else if(phone.length>11){
      setprerr("phone number must be 11 digit ")
    }
    else{
      setprerr("")
      checkaddress()
      
    }
  }
  const checkaddress=()=>{
    if(address.length===0){
      setaderr("address is required")
    }
    else if(address.length<5){
      setaderr("address length must be greater then or equal to 5")
    }
    else {
      setaderr("")
      checkcity()
    }
  }
  const checkcity=()=>{
    if(city.length===0){
      setcityerr("required")
    }
    else if(city.length<5){
      setcityerr("city name length must be greater then or equal to 5")
    }
    else {
      setcityerr("")
      handleclick();
    }
  }
  const handleclick=()=>{
    agriofficeService
              .Addoffice(name,address, phone,city)
              .then((data) => {
                // console.log(data);
                setdis("block")
                
              })
              .catch((err) => {
               // console.log(err.response.data);
                toast.error(err.response.data, {
                  position: toast.POSITION.TOP_LEFT,
                });
              })
  }
  return (
    <div  style={{marginTop:"1rem"}}>
      <div style={{marginLeft:"25%",marginRight:"25%"}}>
      <h4 style={{textAlign:"left"}}>Name</h4>
        <input
         style={{width:"100%",padding:"10px"}}
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
        {pnerr.length!==0?<p style={{textAlign:"left",color:"red"}}>{pnerr}</p>:<></>}
        <h4 style={{textAlign:"left"}}>Phone</h4>
        <input
          style={{width:"100%",padding:"10px"}}
          type="number"
          value={phone}
          onChange={(e) => {
            setphone(e.target.value);
          }}
        />
        {prerr.length!==0?<p style={{textAlign:"left",color:"red"}}>{prerr}</p>:<></>}
        <h4 style={{textAlign:"left"}}>Address</h4>
        <input
         style={{width:"100%",padding:"10px"}}
          value={address}
          onChange={(e) => {
            setaddress(e.target.value);
          }}
        />
        {aderr.length!==0?<p style={{textAlign:"left",color:"red"}}>{aderr}</p>:<></>}
        {" "}
        <h4 style={{textAlign:"left"}}>City</h4>
        <input
          style={{width:"100%",padding:"10px"}}
          value={city}
          onChange={(e) => {
            setcity(e.target.value);
          }}
        />
        {cityerr.length!==0?<p style={{textAlign:"left",color:"red"}}>{cityerr}</p>:<></>}
        {" "}
        <br />
       

          <Button
          variant="contained"
         
          style={{marginTop:"1.5rem",background:"#6DDD00"}}
          onClick={(e) => {
             check()
            //console.log(name,city,address,phone);
          }}
        >
          Add office
        </Button>
        
      </div>


      <div id="myModal" className="modal" style={{display:dis}} >

{/* <!-- Modal content --> */}
<div className="modal-content" >
  <div className="modal-header">
  <h2 style={{padding:"15px"}}></h2>
    <span className="close" onClick={()=>{setdis("none")
  history.push("/offices")
  }} >&times;</span>
    
  </div>
  <div className="modal-body">
    <h2>office successfully added</h2>
  </div>
  <div className="modal-footer">
  <h2 style={{padding:"15px",marginRight:"50%",marginLeft:"50%",cursor:"pointer"}}
  onClick={()=>{
    setdis("none")
    history.push("/offices")
  }}
  >Ok</h2>
  </div>
</div>

</div>

      
    </div>
 );
}

export default Newagrioffice;