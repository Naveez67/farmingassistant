import React from "react";
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
  const display=(val)=>{
    if(val.length>19){
       return val.slice(0, 19)
    }
    else
    return val
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
                  news
                    .deletenews(newss._id)
                    .then((data) => {
                      console.log(data);
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                  onDelete();
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
    </Grid>
  );
}
