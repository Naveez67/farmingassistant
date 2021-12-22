import React from 'react';
import userService from '../../../services/UserService';
import {useCart } from "react-use-cart";
import { useHistory } from "react-router";
import {
  Card,
  CardContent,
  Button,
  Typography,
  CardMedia,
  CardActions,
} from "@mui/material";
import moment from 'moment';

const Cardd = ({ad}) => {
  const history=useHistory();
  const { addItem } = useCart();
  const islogin=userService.isLoggedIn();
  
  const [pid, setpid] = React.useState("00");
  const [dis, setdis] = React.useState("none");

 const getid=()=>{
       if(islogin){
         setpid(userService.getLoggedInUser()._id)
       }
 }
  const get=(val)=>{
    if(val.length>130){
       return val.slice(0, 130)
    }
    return val
  }
  const gettitle=(val)=>{
    if(val.length>15){
       return val.slice(0, 15)
    }
    return val
  }
  const item={id:ad._id+pid,title:ad.title,price:ad.price,body:ad.body,image:ad.photo,userid:pid,adid:ad._id,postedby:ad.postedby}
  React.useEffect(getid, []);
    return ( 
       <div> 
     
     <Card sx={{ maxWidth: 345 }}>
     <div
      style={{cursor:"pointer"}}
     onClick={()=>{
       setdis("block")
     }}> 
     <CardContent sx={{display:"flex",justifyContent:"space-between"}}>
     <Typography gutterBottom variant="h5" component="div" >
          {ad.price+" Rs"}
     </Typography>
     <Typography gutterBottom variant="h5" component="div" >
          {moment(ad.dateofpost).format("MMM Do")}
     </Typography>
     </CardContent>
     <CardMedia
        component="img"
        alt={ad.title}
        height="140"
        image={ad.photo}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{textAlign:"left"}}>
          {gettitle(ad.title)}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{textAlign:"left"}}>
          {get(ad.body)}...
        </Typography>
      </CardContent>
      </div> 
      {userService.isnotadmin()?<>
        <CardActions>
        <Button size="medium" variant="contained" color="success"
        onClick={()=>{
           addItem(item);
           history.push("/placeorder/"+ad._id+"/"+1)
         }}
        >order now</Button>
        <Button size="medium" variant="contained" style={{background:"yellowgreen"}}
        onClick={()=>{
          addItem(item)
          history.push("/mycart")
        }}
        >Add to cart</Button>
      </CardActions>
      
      </>:<></>}
      
     </Card>
     <div id="myModal" className="modal" style={{display:dis}} >

{/* <!-- Modal content --> */}
<div className="modal-content" >
  <div className="modal-header">
  <h2></h2>
    <span className="close" onClick={()=>{setdis("none")
  }} >&times;</span>
    
  </div>
  <div className="modal-body" style={{textAlign:"left"}}>
    <img src={ad.photo} alt={ad.title}  height="200px" width="200"/>
    <h4>{ad.title}</h4>
    <p>{ad.body}</p>
    <h4>Price</h4>
    <p>{ad.price}</p>
    <h4>Type</h4>
    <p>{ad.type}</p>
  </div>
  <div className="modal-footer">
    <h3 style={{textAlign:"center",cursor:"pointer",alignContent:"center"}}
    ></h3>
  </div>
</div>

</div>






      </div>
     );
}
 
export default Cardd;