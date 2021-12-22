import React, { useState } from "react";
//import CloudUploadIcon from '@material-ui/icons/CloudUpload';
const Uploadphoto = ({ photo, name, setphoto }) => {
  const [{ alt, src }, setImg] = useState({
    src: {photo},
    alt: "Upload an Image",
  });
  const [imege, setImege] = useState("");
  const [imegechanged, setImegechanged] = useState(false);
  //console.log(id);
  const handleImg = (e) => {
    setImege(e.target.files[0]);
    setImegechanged(true);
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
          setphoto(data.url);
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
    <div>
      <div>
        {src === "" ? (
          <div className="divimg">
            <p>Upload Photo</p>
          </div>
        ) : (
          <img src={src} alt={alt} style={{ width: "50%", height: 200 }} />
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
    </div>
  );
};

export default Uploadphoto;
