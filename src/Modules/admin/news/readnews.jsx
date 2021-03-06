import React,{useState} from 'react';
import { useParams } from "react-router-dom";
import news from "../../../services/admin/news";
import { toast } from "react-toastify";
import '../blog/style.css'
const Readnews = () => {

    const [{alt, src}, setImg] = useState({
        src: "", 
        alt: 'Upload an Image'
    });
    const param = useParams();
    const [title,settitle]=useState("");
    const [body,setbody]=useState("");
    const id =param.id;
    React.useEffect(() => {
      news.getSinglenews(id).then((data) => {
            setImg({
                src:data.imgurl,
                alt:data.title
            });
            settitle(data.title);
            setbody(data.body);
      }).catch((err)=>{
        toast.error(err.response.data, {
          position: toast.POSITION.TOP_LEFT,})
      });
    }, []);
  return ( 
    <div className="readblog">
  <div className='readblogclass' >
             <div  >
               {src===""?<div className="divimg">
               </div>:
               <img src={src} alt={alt} style={{width:"100%" , height:300}}/>}
             
             </div>
             <div style={{textAlign:"left",marginTop:"1.5rem"}}>
                     
                      <h1>{title}</h1>
                       <p>
                         {body}
                       </p>
                        {""}
                        
             </div>
        </div> 
        </div>  );
}
 
export default Readnews;
