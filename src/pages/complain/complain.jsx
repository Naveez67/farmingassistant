import React,{useState} from 'react';
import complain from '../../services/admin/complain';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
const Complain = () => {
    const history=useHistory();
    const [title,settitle]=useState("");
    const [body,setbody]=useState("");

    const handlesubmit=()=>{
        console.log(title,body);
        complain.Addcomplain({title,body}).then((data)=>{
           // console.log(data)
           alert("complain submitted");
           history.push("/")
        })
        .catch((err)=>{
            toast.error(err.response.data, {
                position: toast.POSITION.TOP_LEFT,})
        })
    }
    return ( <div>
        <h1>Complain </h1>
        <h3>Have complain then submit the complain</h3>

        complaint title(e.g about users or anything realted to app)
        <br />
        <input 
         value={title}
         onChange={(e)=>{
             settitle(e.target.value);
         }}
        />
        <br />
        complaint description(explain the problem)
        <br />
        <input 
         value={body}
         onChange={(e)=>{
             setbody(e.target.value);
         }}
        />
        <br />
        <button onClick={()=>{
            handlesubmit();
        }}>
            Submit complain
        </button>
    </div> );
}
 
export default Complain;