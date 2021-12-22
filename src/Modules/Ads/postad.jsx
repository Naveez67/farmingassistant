import React,{useState} from 'react';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { useHistory } from "react-router";
import Typeofad from './typeofad';
import Categoryofad from './category';
import adsService from '../../services/adsservice';
import { useForm } from 'react-hook-form';
import { CircularProgress } from '@mui/material';
import { toast } from 'react-toastify';
const Postad = () => {
    const [{ alt, src }, setImg] = useState({
        src: "",
        alt: "Upload an Image",
      });
      const history=useHistory();
      const [photo, setphoto] = useState("");
      const [title, settitle] = useState("");
      const [body, setbody] = useState("");
      // const [type, settype] = useState("for all");
      const [price, setprice] = useState(0);
      const [category, setcategory] = useState("Seed");
      const [photoerr, setphotoerr] = useState("");
      const [titleerr, settitleerr] = useState("");
      const [bodyerr, setbodyerr] = useState("");
      const [priceerr, setpriceerr] = useState("");
      const [imege, setImege] = useState("");
      const[imgupload,setimgupload]=useState(false);
      const[showanimation,setshowanimation]=useState(false);

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
          settitleerr("title is required")
        }
        else if(title.length<3){
          settitleerr("title length must be greater then 3 ")
        }
        else{
          settitleerr("")
          checkprice()
          
        }
      }
      const checkprice=()=>{
        if(price==0){
          setpriceerr("required")
        }
        else if(price<0){
          setpriceerr("price can not be neagtive")
        }
        else {
          setpriceerr("")
          checkbody()
        }
      }
      const checkbody=()=>{
        if(body.length==0){
          setbodyerr("required")
        }
        else if(body.length<15){
          setbodyerr("ad detial length must be greater then 15")
        }
        else {
          setbodyerr("")
          handleclick();
        }
      }

      const[showbtn,setshowbtn]=useState(false);
      const handleclick = () => {
        adsService
          .postad({title, body, photo,category,price})
          .then((data) => {
            // console.log(data);
            //console.log(history);
            history.push("/ads")
          })
          .catch((err) => {
            console.log(err.response.data);
            toast.error(err.response.data, {
              position: toast.POSITION.TOP_CENTER,
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
      // console.log(category,type);
      return (
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginTop:"2rem"}}>
          <div>
            {src === "" ? (
              <div className="divimg">
                <p style={{padding:"8rem"}}>Upload Photo</p>
              </div>
            ) : (
               <img src={src} alt={alt} style={{ width: "100%", height: 250 }} />
               
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
                    {photoerr===""?<></>:<p style={{color:"red",textAlign:"left"}}>{photoerr}</p>}
                    </>}
                    
                    </>
                    }
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
            {titleerr===""?<></>:<p style={{color:"red",textAlign:"left"}}>{titleerr}</p>}
            {" "}
             <div style={{display:"flex",marginTop:"1rem"}}>
            {/* <Typeofad setype={settype}/> */}
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
            {priceerr===""?<></>:<p style={{color:"red",textAlign:"left"}}>{priceerr}</p>}
            </div>
            {""}
            <TextareaAutosize
              aria-label="Enter Ad detials"
              minRows={4}
              style={{ width: "100%", marginTop: "1rem" }}
              placeholder="Enter Ad detials"
              value={body}
              onChange={(e) => {
                setbody(e.target.value);
              }}
            />
            {bodyerr===""?<></>:<p style={{color:"red",textAlign:"left"}}>{bodyerr}</p>}
            {""}
           

            <Button
              variant="contained"
              style={{backgroundColor:"green"}}
              onClick={(e) => {
                check()
                // handleclick();
                // console.log(title, body);
              }}
            >
              Post ad
            </Button>
          </div>


        </div>);
}
 
export default Postad;