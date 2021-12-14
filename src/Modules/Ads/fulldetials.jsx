import moment from 'moment';
import React,{useState} from 'react';
import { useHistory ,useParams} from 'react-router';
import adsService from '../../services/adsservice';
import Userprofile from './userprofile';
import userService from '../../services/UserService';
const Fullad = () => {
   // const [name,setname]=useState("");
    const [title,settitle]=useState("");
    const [photo,setphoto]=useState("");
    const [price,setprice]=useState("");
    const [type,settype]=useState("");
    const [category,setcategory]=useState("");
    const [dateofpost,setdate]=useState();
    const [postedby,setpostedby]=useState("");
    const params=useParams();
   // const history=useHistory();
    const id=params.id
    const get=()=>{
           adsService.getsingleads(id).then((data)=>{
               settitle(data.title);
               setphoto(data.photo);
               setprice(data.price);
               settype(data.type);
               setcategory(data.category);
               setdate(data.dateofpost);
               setpostedby(data.postedby);
               console.log("Data for server . ",data);
           })
           .catch((err)=>{
               console.log(err)
           })
    }
    const getuserphoto = () => {
      console.log("postedBy > ", postedby)
          userService.getuserdata(postedby).then((data) => {
            console.log(data);
          });
        };
        const getusername = () => {
          userService.getsingleuser(postedby).then((data) => {
            console.log(data);
          });
        };
        
        
    React.useEffect(get,[]);
    React.useEffect(getuserphoto, []);
    React.useEffect(getusername, []);

    return ( 
    <div style={{display:"flex",width:"70%",marginLeft:"auto",marginRight:"auto"}}>
        <div style={{width:"80%"}}>
        <div>
          <img src={photo} alt={title} style={{ width: "100%", height: 300 }} />
        </div>
        <div style={{textAlign:"left"}}>
           <div style={{marginTop:".8rem",display:"flex",justifyContent:"space-between"}}>
           <h2>RS: {price}</h2>
           <p style={{textAlign:"right"}}>{moment(dateofpost).format("MMM Do YY")}</p>
            </div>
           
           <h3>{title}</h3>
           <h4>Type:{type}</h4>
           <h4>Category:{category}</h4>
        </div>
        </div>
        <div style={{width:"20%"}}>
           <Userprofile id={postedby} />
        </div>
    </div> );
}
 
export default Fullad;