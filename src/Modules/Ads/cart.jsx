import { Grid } from '@mui/material';
import React from 'react';
import {IoIosAddCircle, IoMdRemoveCircle} from 'react-icons/io'
import { useHistory } from 'react-router-dom';
import { CartProvider, useCart } from "react-use-cart";
import userService from '../../services/UserService';
const Mycart = () => {
    const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem,cartTotal ,totalItems} =
    useCart();
   const history=useHistory()
   // console.log(items)
    const [show,setshow]=React.useState(false);
    const id=userService.getLoggedInUser()._id;
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

   const get=(val)=>{
    if(val.length>60){
      return val.slice(0, 50)
   }
   return val
   }

    return ( <div>
         {myoder.length==0?<><h1>No item to show </h1></>:
        <div>
          <div style={{display:"flex",flexWrap:"wrap",justifyContent:"flex-end",marginRight:"10%"}}>
              <h1><span style={{backgroundColor:"greenyellow",color:"white"}}>Total items</span>={totalItems}</h1>
              <h1 style={{marginLeft:"2rem"}}> <span style={{backgroundColor:"greenyellow",color:"white"}}>Total price</span>:{cartTotal}</h1>
            </div>
        <Grid
            container
            spacing={3}
            // sx={{ marginLeft: "auto", marginRight: "auto" }}
          >
          {items.map((item) => (
            <Grid item xs={12} sm={12}>
            <div key={item.id}
             style={{
               width:"300",
               height:"400",
               backgroundColor:"yellowgreen",
               display:"flex",flexWrap:"wrap",justifyContent:"space-around",
               marginLeft:"10%",
               marginRight:"10%",
               }}>
              <div>
              <img src={item.image} width="300" height="300" />
              </div> 
               <div style={{textAlign:"left"}}>
                  <h3>Name:{get(item.title)}</h3>
                  <h3>Description:{(get(item.body))}</h3>
                  <h3>Price:(for one):{item.price}</h3>
                  <h3>Item Quantity :{item.quantity}</h3>
                  <h3>Total price={item.itemTotal}</h3>
              </div>
              <div>
                  <IoIosAddCircle size="50px"
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                    />
                  <b>Quantity</b>  
                  <br />
                    <IoMdRemoveCircle size="50px"
                     onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                    />
                    <b>Quantity</b> 
                  <br />
                  <button  onClick={() => removeItem(item.id)}style={{width:"100%",padding:"10px",backgroundColor:"red",fontSize:"30px",color:"white"}}>Remove Item</button>
                  <br />
                  <button 
                  onClick={()=>{
                    history.push("/placeorder/"+item.adid+"/"+item.quantity)
                  }}
                  style={{width:"100%",padding:"10px",backgroundColor:"green",color:"white",fontSize:"30px"}}>Order now</button>
              </div>
              
              
              
              
            </div>
            </Grid>
          ))}
        </Grid>
            
      </div>
       }
    </div> );
}
 
export default Mycart;