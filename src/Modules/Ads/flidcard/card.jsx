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
          {get(ad.body)}
        </Typography>
      </CardContent>
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

      </div>
     );
}
 
export default Cardd;