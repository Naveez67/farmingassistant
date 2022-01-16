import React, { useState } from "react";
// import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import marketrates from "../../../services/admin/marketrates";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify"; 
import './style.css';
const Marketrates = () => {
  // const classes = useStyles();
  const history = useHistory();
  // const [isloading,setisloading]=React.useState(false);
  const handleclick=()=>{
    
    marketrates
    .Addrates(productname,quantity, productprice,city,distric)
    .then((data) => {
      setdis("block")
    })
    .catch((err) => {
      // console.log(err.response.data);
      toast.error(err.response.data, {
        position: toast.POSITION.TOP_LEFT,
      });
    })

  }
  const [productname, setproductname] = React.useState("");
  const [productprice, setproductprice] = React.useState("");
  const quantity= 1;
  const [city, setcity] = React.useState("");
  const [distric, setdistric] = React.useState("");
  const [pnerr,setpnerr]=useState("");
  const [prerr,setprerr]=useState("");
  const [diserr,setdiserr]=useState("");
  const [cityerr,setcityerr]=useState("");
  const [dis,setdis]=useState("none");
  const check=()=>{
    if(productname.length===0){
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
    if(productprice===0){
      setprerr(" price is required")
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
    if(city.length===0){
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
    if(distric.length===0){
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



  return (
    <div  style={{marginTop:"1rem"}}>
      <div className="child" style={{marginRight:"auto",marginLeft:"auto"}}>
        <h4 style={{textAlign:"left"}}>Product Name</h4> 
        <input 
        style={{width:"100%",padding:"10px"}}
        value={productname}
        onChange={(e)=>{
          setproductname(e.target.value)
        }}
        />
        {pnerr.length!==0?<p style={{textAlign:"left",color:"red"}}>{pnerr}</p>:<></>}
        <h4 style={{textAlign:"left"}}>Product Price</h4> 
        <input 
        style={{width:"100%",padding:"10px"}}
        type="Number"
          value={productprice}
          onChange={(e) => {
            setproductprice(e.target.value);
          }}
        />
        {prerr.length!==0?<p style={{textAlign:"left",color:"red"}}>{prerr}</p>:<></>}
        <h4 style={{textAlign:"left"}}>Product Quantity</h4> 
        <input 
         style={{width:"100%",padding:"10px"}}
          value={quantity}
        />
        <h4 style={{textAlign:"left"}}>City</h4> 
        <input 
        style={{width:"100%",padding:"10px"}}
        type="text"
        value={city}
        onChange={(e) => {
          setcity(e.target.value);
        }}
        />
        {cityerr.length!==0?<p style={{textAlign:"left",color:"red"}}>{cityerr}</p>:<></>}
        <h4 style={{textAlign:"left"}}>District</h4> 
        <input 
        style={{width:"100%",padding:"10px"}}
        type="text"
        value={distric}
        onChange={(e) => {
          setdistric(e.target.value);
        }}
        />
        {diserr.length!==0?<p style={{textAlign:"left",color:"red"}}>{diserr}</p>:<></>}
       

          <Button
          style={{marginTop:"1rem",background:"green"}}
          variant="contained"
          onClick={(e) => {check()}}
        >
          Add rates
        </Button>
        
      </div>
      <div id="myModal" className="modal" style={{display:dis}} >

{/* <!-- Modal content --> */}
<div className="modal-content" >
  <div className="modal-header">
  <h2>{" "} </h2>
    <span className="close" onClick={()=>{setdis("none")}} >&times;</span>
    
  </div>
  <div className="modal-body">
       <h1>reate is added</h1>
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

export default Marketrates;