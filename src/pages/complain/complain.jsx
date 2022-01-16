import React,{useState} from 'react';
import complain from '../../services/admin/complain';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import "../../components/all/mangaement/style.css"
const Complain = () => {
    const history=useHistory();
    const [title,settitle]=useState("");
    const [titleerr,settitleerr]=useState("");
    const [body,setbody]=useState("");
    const [bodyerr,setbodyerr]=useState("");
    const [wid,setwid]=useState("15%");
    const [dis,setdis]=useState("none");



   const check=()=>{
       if(title.length===0){
           settitleerr("please fill the field first")
       }
       else if(title.length<10){
        settitleerr("title must be 10 characters or more")
       }
       else if(body.length===0){
            settitleerr("");
           setbodyerr("please fill the field first")
       }
       
       else if(body.length<=20){
           setbodyerr("description must be 20 characters or more")
       }
       
       else{
           
           setbodyerr("")
           handlesubmit()
       }
   }









    const handlesubmit=()=>{
        console.log(title,body);
        complain.Addcomplain({title,body}).then((data)=>{
           setdis("block")
        })
        .catch((err)=>{
            toast.error(err.response.data, {
                position: toast.POSITION.TOP_LEFT,})
        })
    }

    const getwidth=()=>{
      if(window.innerWidth>700){
          setwid("15%")
      }
      else{
          setwid("auto")
      }
    }
    window.addEventListener("resize",getwidth)
    React.useEffect(getwidth,[])
    return ( <div>
        <h3
        style={{background:"green",padding:"10px",color:"white"}}
        >Have complain then submit the complain</h3>
        <div style={{backgroundColor:"#6DDD00",color:"white",width:"60%",marginRight:"auto",marginLeft:"auto",padding:"20px"}}>
        <h3 style={{textAlign:"left"}}>Title</h3>
        <input 
        style={{width:"100%",padding:"10px"}}
         value={title}
         onChange={(e)=>{
             settitle(e.target.value);
         }}
        />
        {titleerr===""?<></>:<><p style={{textAlign:"left",color:"red"}}>{titleerr}</p></>}
       <h3 style={{textAlign:"left"}}>Describe</h3>
        <textarea  rows="6" 
        style={{width:"100%",padding:"10px"}}
         value={body}
         onChange={(e)=>{
             setbody(e.target.value);
         }}
        />
        {bodyerr===""?<></>:<><p style={{textAlign:"left",color:"red"}}>{bodyerr}</p></>}
        <p 
        style={{textAlign:"left",padding:"5px",cursor:"pointer",background:"green",fontSize:"25px",width:wid}}
        onClick={()=>{
            check()
        }}>
            Submit 
        </p>
        </div>
<div id="myModal" className="modal" style={{display:dis}} >

{/* <!-- Modal content --> */}
<div className="modal-content" >
  <div className="modal-header">
  <h2></h2>
    <span className="close" onClick={()=>{setdis("none")
   settitle("");
   setbody("");
}} >&times;</span>
    
  </div>
  <div className="modal-body">
  <h1>complaint submitted successfully </h1>
  </div>
  <div className="modal-footer">
    <h3 style={{cursor:"pointer",textAlign:"center",color:"white"}} 
    onClick={()=>{
        setdis("none")
        settitle("");
       setbody("");
    }}
    
    >Ok</h3>
  </div>
</div>

</div>

        
    </div> );
}
 
export default Complain;