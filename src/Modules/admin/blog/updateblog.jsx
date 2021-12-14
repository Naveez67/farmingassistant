import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import blogService from "../../../services/admin/blog";
//import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import TextareaAutosize from '@mui/material/TextareaAutosize';
import { Form } from "react-bootstrap";
//import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { toast } from "react-toastify";
const Updateblog = (props) => {
  const [{ alt, src }, setImg] = useState({
    src: "",
    alt: "Upload an Image",
  });
  const history = useHistory();
  const param = useParams();
  const [url, setUrl] = useState("");
  const [title, settitle] = useState("");
  const [body, setbody] = useState("");
  const [imege, setImege] = useState("");
  const [imegechanged, setImegechanged] = useState(false);
  const id = param.id;
  //console.log(id);
  React.useEffect(() => {
    blogService.getSingleblog(id).then((data) => {
      setImg({
        src: data.url,
        alt: data.title,
      });
      settitle(data.title);
      setUrl(data.url);
      setbody(data.body);
      //  console.log(data);
    });
  }, []);
  const handleclick = () => {
    blogService
      .updateblog(id, { title, body, url })
      .then((data) => {
        console.log(data);
        //console.log(history);
        //history.push("/")
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
    //setImegechanged(true);
    if (e.target.files[0]) {
      setImg({
        src: URL.createObjectURL(e.target.files[0]),
        alt: e.target.files[0].name,
      });
    }
  };
  const data = new FormData();
  const postdetials = () => {
    if (imegechanged) {
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
    } else alert("please first choose a file ");
  };
  // const upoad=()=>{
  //   {imegechanged?postdetials():console.log("not chnaged")}
  // }

  // React.useEffect(upoad,[])
  return (
    <div style={{display:"flex",flexDirection:"column",width:"50%",marginLeft:"auto",marginRight:"auto"}}>
      <div>
        {src === "" ? (
          <div className="divimg">
            <p>Upload Photo</p>
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
                history.push("/showblog");
                //console.log(title, body, url);
                // alert("you clicked")
              }}
            >
              Update Blog
            </Form.Label>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default Updateblog;
