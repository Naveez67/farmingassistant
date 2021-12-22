import React from "react";
import { RiSendPlane2Fill } from "react-icons/ri";
import helpService from "../../services/helpservice";
import userService from "../../services/UserService";
import { Avatar } from "@mui/material";
import Showcomments from "./comments";
import moment from "moment";
const Showpost = ({ helpost, getposts }) => {
  const [text, settext] = React.useState("");
  const [err, seterr] = React.useState("");
  const check=()=>{
    if(text.length==0){
      seterr("required")
    }
    else {
      seterr("")
      addcomment();
    }
  }
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
    
    <div style={{ width: "50%",backgroundColor:"white",padding:"10px" }}>
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
            height="20%"
            width="100%"
          />
        )}
        <h3 style={{ textAlign: "left" }}>{helpost.title}</h3>
        <p style={{ textAlign: "left" }}>{helpost.body}</p>
      </div>
      {userService.isLoggedIn()?
      <>
       <div style={{ display: "flex",marginBottom:"1rem" }}>
        <input
          style={{width:"90%"}}
          value={text}
          onChange={(e) => {
            settext(e.target.value);
          }}
          placeholder="comment "
        />
        <RiSendPlane2Fill
        style={{background:"green",color:"white"}}
          size="40px"
          onClick={() => {
            check();
            getposts()
          }}
        />
        
      </div>
      {err.length!=0?<p style={{textAlign:"left",color:"red"}}>{err}</p>:<></>}
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

      <hr style={{padding:"4px",background:"green"}}/>
    </div>
  );
};

export default Showpost;
