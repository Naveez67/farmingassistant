import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import { toast } from "react-toastify";
import adsService from "../../../services/adsservice";
import userService from "../../../services/UserService";
import orderService from "../../../services/orderservice";
import '../model/model.css'
const Orderform = () => {
  const param = useParams();
  const userid = userService.getLoggedInUser()._id;
  const history = useHistory();
  const [buyername, setbuyername] = useState("");
  const [address, setaddress] = useState("");
  const [quantity, setquantity] = useState(param.q);
  const [phone, setphone] = useState("");
  const [err, seterr] = useState("");
  const [adid, setadid] = useState(param.id);
  const [adpostedby, setadpostedby] = useState("");
  const [totalamount, settotalamount] = useState();
  const [dis, setdis] = useState("none");
  const get = () => {
    adsService
      .getsingleads(adid)
      .then((data) => {
        settotalamount(data.price);
        setadpostedby(data.postedby);
      })
      .catch((err) => {
        toast.error(err.response.data, {
          position: toast.POSITION.TOP_CENTER,})
      });
  };
  const getuserdata = () => {
    userService
      .getuserdata(userid)
      .then((data) => {
        setbuyername(data.name);
        setphone(data.phone);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const check=()=>{
    if(address.length===0){
        seterr("please enter address")
    }
    else if(address.length<4){
     seterr("address length must be greater then 4")
    }
    else if(address.length>4){
        seterr("")
        handleclick()
    }
 }
  const handleclick=()=>{
    orderService.placeorder(buyername,address,adpostedby,adid,totalamount*quantity,phone,quantity).then((data)=>{
      setdis("block")
    }).catch((err)=>{
      toast.error(err.response.data, {
        position: toast.POSITION.TOP_CENTER,})
    })
  }



  useEffect(get, []);
  useEffect(getuserdata, []);
  return (
    <div>
      <div style={{ marginLeft: "20%", marginRight: "20%" }}>
        <div className="form">
          <div>
            <p className="label">Buyer Name*</p>
            <input
              type="text"
              className="inputform"
              required
              value={buyername}
              onChange={(e) => {
                setbuyername(e.target.value);
              }}
            />
          </div>
          <div>
            <p className="label">Phone*</p>
            <input
              type="number"
              className="inputform"
              required
              value={phone}
              onChange={(e) => {
                setphone(e.target.value);
              }}
            />
          </div>
          <div>
            <p className="label">Address where to send*</p>
            <input
              type="text"
              className="inputform"
              required
              value={address}
              onChange={(e) => {
                setaddress(e.target.value);
              }}
            />
            {err===""?<></>:<><p style={{color:"red",textAlign:"left"}}>{err}</p></>}
          </div>
          <div>
            <p className="label">Product ID*</p>
            <input type="text" className="inputform" required value={adid} />
          </div>
          <div>
            <p className="label">Quantity</p>
            <input
              type="number"
              className="inputform"
              required
              value={quantity}
              onChange={(e) => {
                setquantity(e.target.value);
                // settotalamount(quantity.totalamount)
              }}
            />
          </div>
          <div>
            <p className="label">Amount*(in rupees)</p>
            <input
              type="text"
              className="inputform"
              required
              value={totalamount*quantity}
              
            />
          </div>
          <div>
            <p className="label">Payement on delver</p>
          </div>
          <div>
            <button
              className="btn"
              style={{
                backgroundColor: "green",
                fontWeight: "bolder",
                fontSize: "28px",
                color: "white",
              }}
              onClick={() => {
                  check()
              }}
            >
              Place order
            </button>
          </div>
        </div>
      </div>

{/* model code starts here */}


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
      <h1>Thanks for placing order</h1>
  </div>
  <div className="modal-footer">
    <h1  onClick={()=>
    {setdis("none")
     history.push("/ads")
  }}
    style={{marginRight:"auto",marginLeft:"auto",border:"1px solid green",padding:"10px",backgroundColor:"green",cursor:"pointer"}}>OK</h1>
  </div>
</div>

</div>

    </div>
  );
};

export default Orderform;
