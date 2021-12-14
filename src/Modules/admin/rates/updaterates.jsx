import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import marketrates from "../../../services/admin/marketrates";
import { useHistory ,useParams} from "react-router-dom";
import { toast } from "react-toastify"; 
import './style.css';
const UpdateMarketrates = () => {
  // const classes = useStyles();
  const history = useHistory();
  const param = useParams();
  const id=param.id;
  const [isloading,setisloading]=React.useState(false);
  
  const [productname, setproductname] = React.useState("");
  const [productprice, setproductprice] = React.useState("");
  const [quantity, setquantity] = React.useState(1);
  const [city, setcity] = React.useState("");
  const [distric, setdistric] = React.useState("");

  const handleclick=()=>{
    marketrates
    .updaterate(productname,quantity, productprice,city,distric,id)
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
  const get=()=>{
     marketrates.getsingleval(id).then((data)=>{
       setproductname(data.productname);
       setproductprice(data.productprice);
       setquantity(data.quantity);
       setcity(data.city);
       setdistric(data.distric);
     })
     .catch((err)=>{
       console.log(err)
     })
  }


React.useEffect(get,[])  
  return (
    <div className="container">
      <div className="child">
      <TextField
          label="ProductName"
          fullWidth
          value={productname}
          onChange={(e) => {
            setproductname(e.target.value);
          }}
        />{" "}
        <TextField
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
          label="quantity"
          fullWidth
          value={quantity}
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
        <TextField
          label="Distric"
          fullWidth
          value={distric}
          onChange={(e) => {
            setdistric(e.target.value);
          }}
        />{" "}
        <br />
       

          <Button
          variant="contained"
          color="primary"
          onClick={(e) => {handleclick()}}
        >
          Update rates
        </Button>
        
      </div>
    </div>
 );
}

export default UpdateMarketrates;