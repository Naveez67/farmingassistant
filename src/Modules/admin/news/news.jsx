import React, { useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import news from "../../../services/admin/news";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { Form } from "react-bootstrap";
const News = () => {
  const [{ alt, src }, setImg] = useState({
    src: "",
    alt: "Upload an Image",
  });
  const [url, setUrl] = useState("");
  const [title, settitle] = useState("");
  const [body, setbody] = useState("");
  const [imege, setImege] = useState("");
  const history = useHistory();
  const handleclick = () => {
    news
      .Addnews(title, body, url)
      .then((data) => {
        console.log(data);
        //console.log(history);
        history.push("/news");
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
        console.log(data.url);
        setUrl(data.url);
        console.log(url);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div  style={{display:"flex",flexDirection:"column",width:"50%",marginLeft:"auto",marginRight:"auto"}}>
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
        <input
          type="file"
          accept=".png, .jpg, .jpeg"
          id="photo"
          onChange={handleImg}
        />
        <button onClick={() => postdetials()}>upload</button>
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
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label
              style={{
                backgroundColor: "blue",
                color: "white",
                padding: ".5rem",
              }}
              onClick={(e) => {
                handleclick();
                history.push("/news");
                console.log(title, body, url);
                // alert("you clicked")
              }}
            >
             Add News
            </Form.Label>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default News;

// const useStyles = makeStyles((theme) => ({
//     container:{
//      display: "block",
//      marginLeft: "auto",
//      marginRight: "auto",
//      width: "50%",
//      marginTop:"1.5rem"
//     },
//     divimg:{
//      width:"100%" ,
//      height:300,
//      border:"2px solid black"
//     },
//     icon:{
//       height:200,
//       width:300,
//       display: "block",
//      marginLeft: "auto",
//      marginRight: "auto",
//     }

// }))
