import React,{useState} from "react";
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
  const [isloading,setisloading]=useState(false);
  
  const [productname, setproductname] = useState("");
  const [productprice, setproductprice] = useState("");
  const [quantity, setquantity] = useState(1);
  const [city, setcity] = useState("");
  const [distric, setdistric] = useState("");
  const [pnerr,setpnerr]=useState("");
  const [prerr,setprerr]=useState("");
  const [diserr,setdiserr]=useState("");
  const [cityerr,setcityerr]=useState("");
  const [dis,setdis]=useState("none");
  const check=()=>{
    if(productname.length==0){
      setpnerr("product name is required")
    }
    else if(productname.length<3)
    {
      setpnerr("product name length must be greater then or equal to 3");
    }
    else {
      setpnerr("")
      checkprice()
    }
  }
  const checkprice=()=>{
    if(productprice==0){
      setprerr("required and price must be greater then 0")
    }
    else if(productprice<0){
      setprerr("price must be greater then 0 ")
    }
    else{
      setprerr("")
      checkcity()
      
    }
  }
  const checkcity=()=>{
    if(city.length==0){
      setcityerr("required")
    }
    else if(city.length<5){
      setcityerr("city name length must be greater then or equal to 5")
    }
    else {
      setcityerr("")
      checkdis();
    }
  }
  const checkdis=()=>{
    if(distric.length==0){
      setdiserr("required")
    }
    else if(distric.length<5){
      setdiserr("distric name length must be greater then or equal to 5")
    }
    else {
      setdiserr("")
      handleclick();
    }
  }
  const handleclick=()=>{
    marketrates
    .updaterate(productname,quantity, productprice,city,distric,id)
    .then((data) => {
      setdis("block")
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
        />
        {pnerr.length!=0?<p style={{textAlign:"left",color:"red"}}>{pnerr}</p>:<></>}
        {" "}
        <TextField
          label="productprice"
          fullWidth
          type="Number"
          value={productprice}
          onChange={(e) => {
            setproductprice(e.target.value);
          }}
        />
        {prerr.length!=0?<p style={{textAlign:"left",color:"red"}}>{prerr}</p>:<></>}
        {" "}
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
        />
        {cityerr.length!=0?<p style={{textAlign:"left",color:"red"}}>{cityerr}</p>:<></>}
        {" "}
        <br />
        <TextField
          label="Distric"
          fullWidth
          value={distric}
          onChange={(e) => {
            setdistric(e.target.value);
          }}
        />
        {diserr.length!=0?<p style={{textAlign:"left",color:"red"}}>{diserr}</p>:<></>}
        {" "}
        <br />
       

          <Button
          variant="contained"
          color="primary"
          onClick={(e) => {check()}}
        >
          Update rates
        </Button>
        
      </div>

      <div id="myModal" className="modal" style={{display:dis}} >

{/* <!-- Modal content --> */}
<div className="modal-content" >
  <div className="modal-header">
  <h2></h2>
    <span className="close" onClick={()=>{setdis("none")}} >&times;</span>
    
  </div>
  <div className="modal-body">
       <h1>Updated</h1>
     </div>

  </div>
  <div className="modal-footer">
    <h3  style={{cursor:"pointer",textAlign:"center",color:"white"}}
    onClick={()=>{
      setdis("none")
      history.push("/showrates")
    }}
    > Ok</h3>
  </div>
</div>



    </div>
 );
}

export default UpdateMarketrates;