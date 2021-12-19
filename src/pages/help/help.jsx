import React, { useState } from "react";
import helpService from "../../services/helpservice";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
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
        setphoto(data.url);
        //console.log(url);
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
        <TextField
          label="Title"
          fullWidth
          variant="outlined"
          style={{ marginTop: "1rem" }}
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />{" "}
        <TextareaAutosize
          aria-label="Enter Problem body here"
          minRows={8}
          style={{ width: "100%", marginTop: "1rem" }}
          placeholder="Enter problem body here"
          value={body}
          onChange={(e) => {
            setbody(e.target.value);
          }}
        />
        {""}
        <Button
          
          variant="contained"
          color="secondary"
          onClick={(e) => {
            handleclick();
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
