import React, { useState } from "react";
import helpService from "../../services/helpservice";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { CircularProgress } from "@mui/material";
const Helppost = () => {
  const [{ alt, src }, setImg] = useState({
    src: "",
    alt: "Upload an Image",
  });
  const history = useHistory();
  const [photo, setphoto] = useState("");
  const [title, settitle] = useState("");
  const [body, setbody] = useState("");
  const [imege, setImege] = useState("");
  const[imgupload,setimgupload]=useState(false);
  const[showanimation,setshowanimation]=useState(false);
  const[showbtn,setshowbtn]=useState(false);
  const [photoerr,setphotoerr]=useState("");
  const [tterr,settterr]=useState("");
  const [bderr,setbderr]=useState("");
  const check=()=>{
    if(photo.length==0){
      setphotoerr("please upload photo")
    }
    else{
      setphotoerr("");
      checktitle()
    }
  }
  const checktitle=()=>{
    if(title.length==0){
      settterr("title is required")
    }
    else if(title.length<3){
      settterr("title length must be greater then 3 ")
    }
    else{
      settterr("")
      checkbody()
      
    }
  }
  const checkbody=()=>{
    if(body.length==0){
      setbderr("required")
    }
    else if(body.length<15){
      setbderr("description must be 20 characters or more")
    }
    else {
      setbderr("")
      handleclick();
    }
  }
  const handleclick = () => {
    helpService
      .Addpost(title, body, photo)
      .then((data) => {
        //console.log(data);
        //console.log(history);
        // alert("complain submitted")
        history.push("/showhelpposts");
      })
      .catch((err) => {
        // console.log(err.response.data);
        toast.error(err.response.data, {
          position: toast.POSITION.TOP_LEFT,
        });
      });
  };
  const handleImg = (e) => {
    setImege(e.target.files[0]);
    setshowbtn(true)
    if (e.target.files[0]) {
      setImg({
        src: URL.createObjectURL(e.target.files[0]),
        alt: e.target.files[0].name,
      });
    }
  };

  const postdetials = () => {
    const data = new FormData();
    data.append("file", imege);
    data.append("upload_preset", "testapp");
    data.append("cloud_name", "van12");
    fetch("https://api.cloudinary.com/v1_1/van12/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.url);
        setimgupload(true)
        setshowanimation(false)
        setphoto(data.url);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div style={{ width: "50%", marginRight: "auto", marginLeft: "auto" }}>
      <h3>Facing any issue about the farming </h3>
      <p>Tells us we will help you with that problem to solve</p>
      <div>
        {src === "" ? (
          <div className="divimg">
            <p>Upload Photo</p>
          </div>
        ) : (
          <img src={src} alt={alt} style={{ width: "100%", height: 300 }} />
        )}
      </div>
      <div style={{marginTop:"1.5rem"}}>
          {showanimation?<><CircularProgress />uploading....</>:<></>}
                    {imgupload?<><h4 style={{color:"green"}}>Uploaded</h4></>:<>
                    {showbtn?<><button  style={{fontWeight:"bolder",fontSize:"20px",border:"1px solid black"}} 
                    onClick={()=>{
                        setshowanimation(true);
                        postdetials()
                    }}
                    >
                        Upload photo
                        </button></>:
                    <>
                     <input type="file" className="inputform"
                     required
                      onChange={handleImg}
                    />
                    
                    </>}
                    
                    </>
                    }
                    {photoerr===""?<></>:<p style={{color:"red",textAlign:"left"}}>{photoerr}</p>}
          </div>
      <div>
        <TextField
          label="Title"
          fullWidth
          variant="outlined"
          style={{ marginTop: "1rem" }}
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        {tterr.length!=0?<p style={{textAlign:"left",color:"red"}}>{tterr}</p>:<></>}
        {" "}
        <TextareaAutosize
          aria-label="Enter Problem description here"
          minRows={8}
          style={{ width: "100%", marginTop: "1rem" }}
          placeholder="Enter problem body here"
          value={body}
          onChange={(e) => {
            setbody(e.target.value);
          }}
        />
        {bderr.length!=0?<p style={{textAlign:"left",color:"red"}}>{bderr}</p>:<></>}
        {""}
        <Button
          size="larage"
          variant="contained"
          style={{background:"green",color:"white"}}
          onClick={(e) => {
            check()
            // handleclick();
            //console.log(title, body, url);
          }}
        >
          Post
        </Button>
      </div>
    </div>
  );
};

export default Helppost;
