import { Grid } from '@mui/material';
import React from 'react';
import {IoIosAddCircle, IoMdRemoveCircle} from 'react-icons/io'
import { useHistory } from 'react-router-dom';
import { useCart } from "react-use-cart";
import userService from '../../services/UserService';
const Mycart = () => {
    const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem,cartTotal ,totalItems} =
    useCart();
    const test=useCart();
   const [sum,setsum]=React.useState(0)
   const history=useHistory()
   console.log(test)
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
         {myoder.length==0?<><h1>You have not added any item yet </h1></>:
        <div>
          
        <Grid
            container
            spacing={3}
            // sx={{ marginLeft: "auto", marginRight: "auto" }}
          >
          <div style={{display:"flex",marginLeft:"auto",marginRight:"10%",marginTop:"2rem"}}>
            <button style={{color:"white",background:"green",padding:"5px",fontSize:"24px",fontWeight:"bold"}}
            onClick={()=>{
              history.push("/ads")
            }}
            >Add more items</button>
          </div>  
          {myoder.map((item,index) => (
            <Grid item xs={12} sm={12}>
            <div key={item.id}
             style={{
               width:"300",
               height:"300",
               backgroundColor:"yellowgreen",
               display:"flex",flexWrap:"wrap",justifyContent:"space-around",
               marginLeft:"10%",
               marginRight:"10%",
               }}>
              <div>
              <img src={item.image} width="300" height="300" style={{borderRadius:"50%"}}/>
              </div> 
               <div style={{textAlign:"left",color:"white"}}>
                  <h3>Name:{get(item.title)}</h3>
                  <h3>Description:{(get(item.body))}</h3>
                  <h3>Price:(for one){item.price}</h3>
                  <h3>Item Quantity :{item.quantity}</h3>
                  <h3>Total price={item.itemTotal}</h3>
              </div>
              <div>
                  <IoIosAddCircle size="50px"
                  style={{background:"green",color:"white",}}
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                    />
                  <b style={{background:"green",color:"white",paddingTop:".8rem",paddingBottom:"1.2rem"}}>Quantity</b>  
                  <br />
                    <IoMdRemoveCircle size="50px"
                     style={{background:"green",color:"white",}}
                     onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                    />
                    <b style={{background:"green",color:"white",paddingTop:".8rem",paddingBottom:"1.2rem"}}>Quantity</b> 
                  <br />
                  <button  onClick={() => removeItem(item.id)}style={{width:"100%",padding:"5px",backgroundColor:"red",fontSize:"18px",color:"white"}}>Remove Item</button>
                  <br />
              </div>
              
              
              
              
            </div>
            </Grid>
          ))}
        </Grid>

        <div style={{
          display:"flex",
          flexWrap:"wrap",
          justifyContent:"center",
          flexDirection:"column",
          width:"80%",
          background:"yellowgreen",
          // position:"fixed",
          // bottom:"0",
          marginLeft:"10%",
          marginRight:"10%",
          marginTop:"2rem"
          }}>
              <h1 style={{marginLeft:"2rem",color:"white"}}>Total price:{cartTotal}</h1>
              <button style={{padding:"10px",fontSize:"30px",background:"green",color:"white"}}
              onClick={()=>{
                history.push("/order")
              }}
              >Check out</button> 
          </div>
            
      </div>
       }
    </div> );
}
 
export default Mycart;