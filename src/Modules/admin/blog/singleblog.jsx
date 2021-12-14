import React from "react";
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
  const display=(val)=>{
      if(val.length>19){
         return val.slice(0, 19)
      }
      else
      return val
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
          <Typography gutterBottom variant="h4" component="h2">
            {display(blog.title)}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
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
              blogService
                .deleteblog(blog._id)
                .then((data) => {})
                .catch((err) => {});
              onDelete();
            }}
          >
            Delete
          </Button>
          </>
          :<></>}
          
        </CardActions>
      </Card>
    </Grid>
  );
}
