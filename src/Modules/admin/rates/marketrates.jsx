import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import marketrates from "../../../services/admin/marketrates";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify"; 
import './style.css';
const Marketrates = () => {
  // const classes = useStyles();
  const history = useHistory();
  const [isloading,setisloading]=React.useState(false);
  const handleclick=()=>{
    
    marketrates
    .Addrates(productname,quantity, productprice,city,distric)
    .then((data) => {
      //console.log(data);
      //console.log(history);
      setisloading(true); 
      history.push("/showrates")
    })
    .catch((err) => {
      console.log(err.response.data);
      toast.error(err.response.data, {
        position: toast.POSITION.TOP_LEFT,
      });
    })

  }
  const [productname, setproductname] = React.useState("");
  const [productprice, setproductprice] = React.useState("");
  const [quantity, setquantity] = React.useState(1);
  const [city, setcity] = React.useState("");
  const [distric, setdistric] = React.useState("");
  
  return (
    <div className="container" >
      <div className="child" style={{marginTop:"2rem"}}>
      <TextField
          style={{marginTop:"1rem"}}
          label="ProductName"
          fullWidth
          value={productname}
          onChange={(e) => {
            setproductname(e.target.value.toLowerCase());
          }}
        />{" "}
        <TextField
          style={{marginTop:"1rem"}}
          label="productprice"
          fullWidth
          type="Number"
          value={productprice}
          onChange={(e) => {
            setproductprice(e.target.value);
          }}
        />{" "}
        <br />
        <TextField
          style={{marginTop:"1rem"}}
          label="quantity"
          fullWidth
          value={quantity}
        />{" "}
        <br />
        <TextField
          style={{marginTop:"1rem"}}
          label="city"
          fullWidth
          value={city}
          onChange={(e) => {
            setcity(e.target.value);
          }}
        />{" "}
        <br />
        <TextField
          style={{marginTop:"1rem"}}
          label="Distric"
          fullWidth
          value={distric}
          onChange={(e) => {
            setdistric(e.target.value);
          }}
        />{" "}
        <br />
       

          <Button
          style={{marginTop:"1rem"}}
          variant="contained"
          color="primary"
          onClick={(e) => {handleclick()}}
        >
          Add rates
        </Button>
        
      </div>
    </div>
 );
}

export default Marketrates;