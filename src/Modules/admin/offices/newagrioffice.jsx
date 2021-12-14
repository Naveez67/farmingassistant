import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import agriofficeService from "../../../services/admin/Agrioffices";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify"; 
import './style.css'
const Newagrioffice = () => {
  const history = useHistory();
  const [name, setname] = React.useState("");
  const [phone, setphone] = React.useState("");
  const [address, setaddress] = React.useState("");
  const [city, setcity] = React.useState("");
  
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
          color="primary"
          style={{marginTop:"1.5rem"}}
          onClick={(e) => {
            agriofficeService
              .Addoffice(name,address, phone,city)
              .then((data) => {
                console.log(data);
                console.log(history);
                history.push("/offices")
              })
              .catch((err) => {
                console.log(err.response.data);
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
    </div>
 );
}

export default Newagrioffice;