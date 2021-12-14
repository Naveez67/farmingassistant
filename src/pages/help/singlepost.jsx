import React from "react";
import { RiSendPlane2Fill } from "react-icons/ri";
import helpService from "../../services/helpservice";
import userService from "../../services/UserService";
import { Avatar } from "@mui/material";
import Showcomments from "./comments";
import moment from "moment";
const Showpost = ({ helpost, getposts }) => {
  const [text, settext] = React.useState("");
  const postid = helpost._id;
  const addcomment = () => {
    helpService
      .Addcomment({ text, postid })
      .then((data) => {
        //console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
    getposts();
    settext("");
  };
  const [data, setdata] = React.useState("");
  const getimg = () => {
    userService
      .getsingleuser(helpost.problempostedby)
      .then((res) => {
        //console.log(res);
        setdata(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  React.useEffect(getimg, []);

  return (
    <div style={{ width: "50%" }}>
      <div>
        <div style={{ display: "flex" }}>
          <Avatar alt="Remy Sharp" src="" />
          <div style={{ textAlign: "left" }}>
            <h5>{data.username}</h5>
            <p style={{ marginTop: "-.5rem" }}>
              {moment(helpost.posteddate).format("MMM Do YY")}
            </p>
          </div>
        </div>
      </div>

      <div>
        {helpost.photo === "" ? (
          <></>
        ) : (
          <img
            src={helpost.photo}
            alt={helpost.title}
            height="30%"
            width="100%"
          />
        )}
        <h3 style={{ textAlign: "left" }}>{helpost.title}</h3>
        <p style={{ textAlign: "left" }}>{helpost.body}</p>
      </div>
      {userService.isLoggedIn()?
      <>
       <div style={{ display: "flex" }}>
        <input
          width="200px"
          value={text}
          onChange={(e) => {
            settext(e.target.value);
          }}
          placeholder="comment "
        />
        <RiSendPlane2Fill
          size="40px"
          onClick={() => {
            addcomment();
            getposts();
          }}
        />
      </div>
      
      </>:
      <></>}
     
      <div style={{ display: "flex" }}>
        {helpost.comments.length > 0 ? (
          <>
            <Showcomments comments={helpost.comments} />
          </>
        ) : (
          "no comments"
        )}
      </div>

      <hr />
    </div>
  );
};

export default Showpost;
