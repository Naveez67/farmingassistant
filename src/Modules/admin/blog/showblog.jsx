import React from "react";
import MediaCard from "./singleblog";
import blogService from "../../../services/admin/blog";
import userService from "../../../services/UserService";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "./style.css";
import { Grid } from "@mui/material";
import Skelton from "./skelton";
const Showblog = () => {
  const [blogs, setblogs] = React.useState([]);
  const [isloaded, setisloaded] = React.useState(false);
  const history = useHistory();
  const getblogs = () => {
    blogService
      .getblog()
      .then((data) => {
        setblogs(data);
        setisloaded(true);
      })
      .catch((err) => {
        setisloaded(true);
        toast.error(err.response.data, {
          position: toast.POSITION.TOP_LEFT,
        });
      });
  };
  const show = () => {
    <h4>Nothing to show </h4>;
  };
  React.useEffect(getblogs, []);
  return (
    <div >
      <div className="style" style={{ marginTop: "3rem" }}>
        <h3 className="text"><span style={{fontSize:"32px"}}>Blogs </span>  </h3>
      </div>
      {isloaded ? (
        <></>
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Skelton />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Skelton />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Skelton />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Skelton />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Skelton />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Skelton />
          </Grid>
        </Grid>
      )}

      {blogs.length > 0 ? (
        <>
          <Grid container spacing={3}>
            {blogs.map((blog, index) => (
              <MediaCard key={index} blog={blog} onDelete={getblogs} />
            ))}
          </Grid>
        </>
      ) : (
        show()
      )}

      {userService.isAdmin() ? (
        <div style={{ marginLeft: "auto", marginRight: "auto" }}>
          <button
            onClick={() => {
              history.push("/addblog");
            }}
          >
            Add blog
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Showblog;
