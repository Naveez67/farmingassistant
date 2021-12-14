//import moment from 'moment';
import React from 'react';
import { toast } from 'react-toastify';
import userService from '../../services/UserService';
//import farmerService from '../../services/farmerservice';
//import supplierService from '../../services/supplierservice'
const Userprofile = ({id}) => {
    // const [photo,setphoto]=useState("");
    // const [name,setname]=useState("");
    // const [date,setdate]=useState("");
    // const [phone,setphone]=useState("");
    // const [userid,setuserid]=useState(id);
    // const [role,setrole]=useState("");
    const getdata = () => {
        console.log(id);
        userService
        .getsingleuser(id)
        .then((data) => {
            console.log(data);
          })
          .catch((err) => {
            console.log(err.response.data);
            toast.error(err.response.data, {
              position: toast.POSITION.TOP_LEFT,})
          });
      };
      const get=()=>{
          console.log("starts here;",id)
        userService.getuserdata(id).then((data) => {
           // console.log(data);
          }).catch((err) => {
           // console.log(err.response.data);
            toast.error(err.response.data, {
              position: toast.POSITION.TOP_LEFT,})
          });
      }
    //  console.log(role)
      React.useEffect(getdata, []);
     React.useEffect(get, []);
    return ( <div>
    </div> );
}
 
export default Userprofile;