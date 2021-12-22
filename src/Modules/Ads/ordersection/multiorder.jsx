import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import userService from "../../../services/UserService";
import orderService from "../../../services/orderservice";
import { useCart } from "react-use-cart";
import '../model/model.css'
const Multiorder=()=>{
    const id = userService.getLoggedInUser()._id;
    const history=useHistory()
    const [buyername, setbuyername] = useState("");
    const [address, setaddress] = useState("");
    const [phone, setphone] = useState("");
    const [err, seterr] = useState("");
    const [dis, setdis] = useState("none");
    const {  items, removeItem,cartTotal } =useCart();
    function filterItems(arr, query) {
        return arr.filter(function(el) {
          return el.userid.toLowerCase().indexOf(query.toLowerCase()) !== -1
        })
      }
    function res(arr,name){
        let array=filterItems(arr,name)
        return array
    }
    
    let myoder=res(items,id);
    const checkandcal=()=>{
        if(myoder.length>0){
        for (let i = 0; i < myoder.length; i++) {
            
               postorder(
                  myoder[i].quantity,myoder[i].itemTotal,myoder[i].adid,myoder[i].postedby,myoder[i].image

               )
                removeItem(myoder[i].id)
        
        }
      }
      setdis("block")
    }

    const postorder=(quantity,totalamount,adid,adpostedby,photo)=>{
     order(adpostedby,quantity,totalamount,adid,photo)
    }
   const order=(adposter,quantity,totalamount,adid,photo)=>{
        orderService.placeorder(buyername,address,adposter,adid,totalamount,phone,quantity,photo).then((data)=>{
          console.log(data)
      }).catch((err)=>{
        toast.error(err.response.data, {
          position: toast.POSITION.TOP_CENTER,})
      })
   }
    const check=()=>{
       if(address.length===0){
           seterr("please enter address")
       }
       else if(address.length<6){
        seterr("address length must be greater then 6")
       }
       else if(address.length>=6){
           seterr("")
           checkandcal()
       }
    }
    const getuserdata = () => {
        userService
          .getuserdata(id)
          .then((data) => {
            setbuyername(data.name);
            setphone(data.phone);
          })
          .catch((err) => {
            toast.error(err.response.data, {
                position: toast.POSITION.TOP_CENTER,})
          });
      };
    useEffect(getuserdata, []);
    return(
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
            //   onChange={(e) => {
            //     setbuyername(e.target.value);
            //   }}
            />
          </div>
          <div>
            <p className="label">Phone*</p>
            <input
              type="number"
              className="inputform"
              required
              value={phone}
            //   onChange={(e) => {
            //     setphone(e.target.value);
            //   }}
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
            <p className="label">Amount*(in rupees)</p>
            <input
              type="text"
              className="inputform"
              required
              value={cartTotal+"  Rs"}
              
            />
          </div>
          <div>
            <p className="label">Cash on delivery</p>
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
                check();
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
           
           )
}
export default Multiorder;