import React ,{useState} from 'react';
const ProfileImage=({photo})=>{
    const [{alt, src}, setImg] = useState({
        src: "",
        alt: 'Upload an Image'
    });
    const [imege,setImege]=useState("");
    const handleImg = (e) => {
        setImege(e.target.files[0]) 
        if(e.target.files[0]) {
            setImg({
                src: URL.createObjectURL(e.target.files[0]),
                alt: e.target.files[0].name
            });    
        }   
    }
    const postdetials=()=>{
        const data=new FormData();
        data.append("file",imege)
        data.append("upload_preset","testapp")
        data.append("cloud_name","van12")
        fetch("https://api.cloudinary.com/v1_1/van12/image/upload",{
            method:"post",
            body:data
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data.url);
            photo(data.url)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    return(<div>
        <div  >
        {src===""?<div style={{height:150,width:150,textAlign:"center",border:"1px solid black"}}>
            Upload photo
        </div>:
        <img src={src} alt={alt} style={{height:"100%",width:"100%"}}/>}
      
      </div>
      <input className="form-control" type="file" id="formFile" style={{width:"50%",marginLeft:"auto",marginRight:"auto"}}
             onChange={handleImg}
         
        />
        <br />
        <button onClick={()=>{
            postdetials()
        }}>Upload</button>
    </div>)
}
export default ProfileImage;