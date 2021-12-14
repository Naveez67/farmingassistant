import React, { useState } from "react";
import { useParams } from "react-router-dom";
import blogService from "../../../services/admin/blog";
import {FaArrowCircleRight} from 'react-icons/fa'
//import { makeStyles } from "@material-ui/core/styles";
//import CloudUploadIcon from '@material-ui/icons/CloudUpload';
//import { toast } from "react-toastify";
//import { BorderStyle } from '@material-ui/icons';
import "./style.css";
//import Showcomments from "./commentcar";
import Showcomments from "./com/comments"
import userService from "../../../services/UserService";
const Readblog = () => {
  const [text, settext] = useState(""); 
  const [comments, setcomments] = useState([]);
  const [{ alt, src }, setImg] = useState({
    src: "",
    alt: "Upload an Image",
  });
  // const classes = useStyles();
  //  const history = useHistory();
  const param = useParams();
  const [title, settitle] = useState("");
  const [body, setbody] = useState("");
  const id = param.id;
  const getblog=()=>{
    blogService.getSingleblog(id).then((data) => {
      setImg({
        src: data.url,
        alt: data.title,
      });
      settitle(data.title);
      setbody(data.body);
      setcomments(data.comments);
  }).catch((err)=>{
    console.log(err)
  })
}

  React.useEffect(getblog, []);
  return (
    <div> 
    
    <div style={{display:"flex",flexDirection:"column",width:"50%",marginLeft:"auto",marginRight:"auto"}}>
      <div>
        {src === "" ? (
          <div className="divimg"></div>
        ) : (
          <img src={src} alt={alt} style={{ width: "100%", height: 300 }} />
        )}
      </div>
      <div style={{textAlign:"left"}}>
        <h1>{title}</h1>
        <p style={{textAlign:"justify",textJustify:"interword"}}>{body}</p>
        {""}
      </div>
      {userService.isLoggedIn()?
      <>
      <div style={{textAlign:"left",display:"flex",marginBottom:"1rem"}}>
        <input
          className="inputcom"
          value={text}
          onChange={(e) => {
            settext(e.target.value);
          }}
          width="100%"
          style={{ borderRadius: "5%" }}
        />
        <FaArrowCircleRight style={{marginTop:".3rem"}} size="35px" onClick={() => {
            blogService.addcomment(id, { text }).then((data) => {
              console.log(data);
              setcomments(data.comments);
              settext("");
            });
          }}/>
      </div>
      </>:
      <></>}
      
      <div style={{textAlign:"left"}}>
        {comments.length > 0 ? (
          <>
             {console.log("before commen fun")}
            <Showcomments comments={comments} />
          </>
        ) : (
          "no comments added yet"
        )}
      </div>
    </div>
    </div>
  );
};

export default Readblog;
