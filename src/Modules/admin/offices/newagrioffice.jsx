import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import agriofficeService from "../../../services/admin/Agrioffices";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify"; 
import './style.css'
import '../../../components/all/mangaement/style.css'
const Newagrioffice = () => {
  const history = useHistory();
  const [name, setname] = React.useState("");
  const [phone, setphone] = React.useState("");
  const [address, setaddress] = React.useState("");
  const [city, setcity] = React.useState("");
  const [dis,setdis]=React.useState("none")
  
  return (
    <div className="container">
      <div className="child">
      <TextField
          label="Name"
          fullWidth
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
        />{" "}
        <TextField
          label="Phone"
          type="number"
          fullWidth
          value={phone}
          onChange={(e) => {
            setphone(e.target.value);
          }}
        />{" "}
        <br />
        <TextField
          label="address"
          fullWidth
          value={address}
          onChange={(e) => {
            setaddress(e.target.value);
          }}
        />{" "}
        <br />
        <TextField
          label="city"
          fullWidth
          value={city}
          onChange={(e) => {
            setcity(e.target.value);
          }}
        />{" "}
        <br />
       

          <Button
          variant="contained"
         
          style={{marginTop:"1.5rem",background:"#6DDD00"}}
          onClick={(e) => {
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