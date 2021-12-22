import React,{useState} from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useHistory } from "react-router-dom";
import blogService from "../../../services/admin/blog";
import { Grid } from "@mui/material";
import userService from "../../../services/UserService";

export default function MediaCard({ blog, onDelete }) {
  const history = useHistory();

  const [dis, setdis]=useState("none");
  const [ds, setds]=useState("none");
  const display=(val)=>{
      if(val.length>15){
         return val.slice(0, 15)
      }
      else
      return val
  }
  const handledeleteblog=()=>{
    blogService
                .deleteblog(blog._id)
                .then((data) => {
                  setds("block")
                })
                .catch((err) => {});
              onDelete();
  }

  return (
    <Grid item xs={12} sm={4}>
      <Card sx={{ maxWidth: 345 }} style={{ margin: "1.5rem" }}>
        <CardMedia
          component="img"
          height="140"
          image={blog.url}
          title={blog.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="h6" style={{textAlign:"left"}}>
            {display(blog.title)}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{textAlign:"left"}}>
            {display(blog.body)}...
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={(e) => {
              history.push("/readblog/" + blog._id);
            }}
          >
            Learn More
          </Button>
          {userService.isAdmin()?
          <>
          <Button
            size="small"
            color="primary"
            onClick={(e) => {
              history.push("/updateblog/" + blog._id);
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
          :<></>}
          
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
       <h1>Are you sure you want to delete blog</h1>
       <div style={{display:"flex",marginRight:"30%",marginLeft:"40%"}}>
         <button style={{width:"30%",padding:"8px",color:"white",fontWeight:"bold",background:"green"}}
         onClick={()=>{setdis("none")}}
         >CANCEL</button>
         <button style={{width:"30%",padding:"8px",color:"white",fontWeight:"bold",background:"red",marginLeft:"1rem"}}
         onClick={()=>{
          handledeleteblog();
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
      // window.location.reload(true)
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
