import React, { useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import news from "../../../services/admin/news";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { Form } from "react-bootstrap";
import { CircularProgress } from "@mui/material";
import '../../../components/all/mangaement/style.css'
const News = () => {
  const [{ alt, src }, setImg] = useState({
    src: "",
    alt: "Upload an Image",
  });
  const [url, setUrl] = useState("");
  const [title, settitle] = useState("");
  const [body, setbody] = useState("");
  const [imege, setImege] = useState("");
  const [dis, setdis] = useState("none");
  const[imgupload,setimgupload]=useState(false);
  const[showanimation,setshowanimation]=useState(false);
  const[showbtn,setshowbtn]=useState(false);
  const history = useHistory();
  const[pterr,setpterr]=useState("");
  const[tterr,settterr]=useState("");
  const[bderr,setbderr]=useState("");
  const check=()=>{
    if(url.length===0){
      setpterr("please upload photo")
    }
    else {
      setpterr("")
      checktitle()
    }
}
const checktitle=()=>{
  if(title.length===0){
    settterr("required")
  }
  else if(title.length<4){
    settterr("title length must be greater then 4 ")
  }
  else{
    settterr("")
    checkbody()
  }
}
const checkbody=()=>{
  if(body.length===0){
    setbderr("required")
  }
  else if(body.length<10){
    setbderr("Description length must be greater then 10")
  }
  else {
    setbderr("")
    handleclick()
  }
}

  const handleclick = () => {
    news
      .Addnews(title, body, url)
      .then((data) => {
        console.log(data);
        //console.log(history);
        setdis("block")
        
      })
      .catch((err) => {
        console.log(err.response.data);
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
        setUrl(data.url);
        // console.log(url);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div  style={{display:"flex",flexDirection:"column",width:"50%",marginLeft:"auto",marginRight:"auto",marginTop:"1rem"}}>
      <div >
        {src === "" ? (
          <div className="divimg">
            <AiOutlineCloudUpload className="icon" />
          </div>
        ) : (
          <img src={src} alt={alt} style={{ width: "100%", height: 300 }} />
        )}
      </div>
      <div>
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
                     <input
                       type="file"
                       accept=".png, .jpg, .jpeg"
                       id="photo"
                       onChange={handleImg}
                      />
                    
                    </>}
                    
                    </>
                    }
                    {pterr.length!==0?<p style={{textAlign:"left",color:"red"}}>{pterr}</p>:<></>}
      </div>
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="title"
              value={title}
              onChange={(e) => {
                settitle(e.target.value);
              }}
            />
            {tterr.length!==0?<p style={{textAlign:"left",color:"red"}}>{tterr}</p>:<></>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={body}
              onChange={(e) => {
                setbody(e.target.value);
              }}
            />
            {bderr.length!==0?<p style={{textAlign:"left",color:"red"}}>{bderr}</p>:<></>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label
              style={{
                backgroundColor: "green",
                color: "white",
                padding: "10px",
                fontSize:"26px",
                fontWeight:"bold",
                cursor:"pointer"
              }}
              onClick={(e) => {
                // handleclick();
                check()
                // history.push("/showblog");
                // console.log(title, body, url);
                // alert("you clicked")
              }}
            >
              Add News
            </Form.Label>
          </Form.Group>
        </Form>
      </div>
     <div id="myModal" className="modal" style={{display:dis}} >

{/* <!-- Modal content --> */}
<div className="modal-content" >
  <div className="modal-header">
  <h2></h2>
    <span className="close" onClick={()=>{setdis("none")
  history.push("/news");
  }} >&times;</span>
    
  </div>
  <div className="modal-body">
    <h2>News Added</h2>
  </div>
  <div className="modal-footer">
    <h3 style={{textAlign:"center",cursor:"pointer",alignContent:"center"}}
    onClick={()=>{setdis("none")
    history.push("/news");}}
    >OK</h3>
  </div>
</div>

</div>







    </div>
  );
};

export default News;

