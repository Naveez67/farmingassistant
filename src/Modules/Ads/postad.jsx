import React,{useState} from 'react';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { useHistory } from "react-router";
import Typeofad from './typeofad';
import Categoryofad from './category';
import adsService from '../../services/adsservice';
const Postad = () => {
    const [{ alt, src }, setImg] = useState({
        src: "",
        alt: "Upload an Image",
      });
      const history=useHistory();
      const [photo, setphoto] = useState("");
      const [title, settitle] = useState("");
      const [body, setbody] = useState("");
      const [type, settype] = useState("");
      const [price, setprice] = useState();
      const [category, setcategory] = useState("");
      const [imege, setImege] = useState("");
      const handleclick = () => {
        adsService
          .postad({title, body, photo,type,category,price})
          .then((data) => {
            console.log(data);
            //console.log(history);
            history.push("/ads")
          })
          .catch((err) => {
            console.log(err.response.data);
            // toast.error(err.response.data, {
            //   position: toast.POSITION.TOP_LEFT,
            // });
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
          })
          .catch((err) => {
            console.log(err);
          });
      };
      console.log(category,type);
      return (
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
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
             <div style={{display:"flex",marginTop:"1rem"}}>
            <Typeofad setype={settype}/>
            <Categoryofad secat={setcategory}/>
            <TextField
              label="Price"
              fullWidth
              variant="outlined"
              type="number"
              style={{ marginTop: ".5rem",marginLeft:"1rem" }}
              value={price}
              onChange={(e) => {
                setprice(e.target.value);
              }}
            />
            </div>
            {""}
            <TextareaAutosize
              aria-label="Enter Ad detials"
              minRows={8}
              style={{ width: "100%", marginTop: "1rem" }}
              placeholder="Enter Ad detials"
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
                console.log(title, body);
              }}
            >
              Post ad
            </Button>
          </div>


        </div>);
}
 
export default Postad;