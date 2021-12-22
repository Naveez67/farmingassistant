import React,{useState} from "react";
import userService from "../../../services/UserService";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useHistory } from "react-router-dom";
import news from "../../../services/admin/news";
import { CardActionArea, Grid } from "@mui/material";

export default function MediaCard({ newss, onDelete }) {
  const history = useHistory();
  const [dis, setdis]=useState("none");
  const [ds, setds]=useState("none");
  const display=(val)=>{
    if(val.length>19){
       return val.slice(0, 19)
    }
    else
    return val
}
const handledeletenews=()=>{
  news
                    .deletenews(newss._id)
                    .then((data) => {
                      // console.log(data);
                      setds("block")
                    })
                    .catch((err) => {
                      console.log(err);
                    });
}
  return (
    <Grid item xs={12} sm={4} style={{ marginTop: "4rem" }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={newss.imgurl}
            alt={newss.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {display(newss.title)}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {display(newss.body)}...
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={(e) => {
              history.push("/news/readnews/" + newss._id);
            }}
          >
            Learn More
          </Button>
          {userService.isAdmin() ? (
            <>
              <Button
                size="small"
                color="primary"
                onClick={(e) => {
                  history.push("/news/updatenews/" + newss._id);
                }}
              >
                Edit
              </Button>
              <Button
                size="small"
                color="primary"
                onClick={(e) => {
                  setdis("block")
                    
                }}
              >
                Delete
              </Button>
            </>
          ) : (
            <></>
          )}
        </CardActions>
      </Card>
      <div id="myModal" className="modal" style={{display:dis}} >

{/* <!-- Modal content --> */}
<div className="modal-content" >
  <div className="modal-header">
  <h2></h2>
    <span className="close" onClick={()=>{setdis("none")}} >&times;</span>
    
  </div>
  <div className="modal-body">
     <div style={{display:"flex",flexDirection:"column"}}>
       <h1>Are you sure you want to delete news</h1>
       <div style={{display:"flex",marginRight:"30%",marginLeft:"40%"}}>
         <button style={{width:"30%",padding:"8px",color:"white",fontWeight:"bold",background:"green"}}
         onClick={()=>{setdis("none")}}
         >CANCEL</button>
         <button style={{width:"30%",padding:"8px",color:"white",fontWeight:"bold",background:"red",marginLeft:"1rem"}}
         onClick={()=>{
          handledeletenews();
           setdis("none")
         }}
         
         >DELETE</button>
       </div>
     </div>

  </div>
  <div className="modal-footer">
    <h3></h3>
  </div>
</div>

</div>

<div id="myModal" className="modal" style={{display:ds}} >

{/* <!-- Modal content --> */}
<div className="modal-content" >
  <div className="modal-header">
  <h2></h2>
    <span className="close" onClick={()=>{setds("none")}} >&times;</span>
    
  </div>
  <div className="modal-body">
       <h1> deleted</h1>
  </div>
  <div className="modal-footer">
    <h3 style={{textAlign:"center",cursor:"pointer"}}
    onClick={()=>{
      setds("none")
      window.location.reload(true)
    }}
    
    >
     OK
    </h3>
  </div>
</div>

</div>
    </Grid>
  );
}
