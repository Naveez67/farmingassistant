import React, { useState } from "react";
import helpService from "../../services/helpservice";
import { useHistory } from "react-router";
import Showpost from "./singlepost";
import { toast } from "react-toastify";
import Skelton from "./skelton"; 
import userService from '../../services/UserService'
const Showallpost = () => {
  const [post, setposts] =useState([]);
  const [islod, setisload] =useState(false);
  const history = useHistory();
  const getposts = () => {
    helpService
      .getposts()
      .then((data) => {
        setposts(data);
        setisload(true);
      })
      .catch((err) => {
        setisload(true);
        toast.error(err.response.data, {
          position: toast.POSITION.TOP_LEFT,
        });
      });
  };
  React.useEffect(getposts, []);
  return (
    <div>
      {userService.isFarmer()?
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button
          onClick={() => {
            history.push("/help");
          }}
        >
          Need help
        </button>
      </div>
      :<></>}
      <h4>Help Posts</h4>
      {islod?<></>:
      <div style={{display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",}}>

         <Skelton />
         <Skelton />
         <Skelton />
      </div>
    }



      {post.length > 0 ? (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {post.map((helpost, index) => (
              <Showpost key={index} helpost={helpost} getposts={getposts} />
            ))}
          </div>
        </>
      ) : (
        "No post to show"
      )}
    </div>
  );
};

export default Showallpost;
