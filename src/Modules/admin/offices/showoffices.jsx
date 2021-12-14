import React from 'react';
import agriofficeService from '../../../services/admin/Agrioffices';
import userService from '../../../services/UserService';
import {AiFillPlusCircle,AiTwotoneDelete,AiFillEdit} from 'react-icons/ai'
import { Table } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify"; 
import '../../../components/all/mangaement/style.css'
const Showoffices = () => {
    const [offices,setoffices]=React.useState([]);
    const [dis,setdis]=React.useState("none")
    const getdata=()=>{
       agriofficeService
       .getoffice()
       .then((data)=>{
           setoffices(data);
          // console.log(data);
           //console.log(offices);
       })
       .catch((err) => {
        //console.log(err.response.data);
        toast.error(err.response.data, {
          position: toast.POSITION.TOP_LEFT,})
      });
    }
    const history = useHistory();
    const drawheader=()=>{
        return(<tr>
           <th style={{width:"20%",textAlign:"left"}}>Name</th>
           <th style={{width:"20%",textAlign:"left"}}>Phone </th>
           <th style={{width:"20%",textAlign:"left"}}>Address</th>
           <th style={{width:"20%",textAlign:"left"}}>City</th>
           {userService.isAdmin()?<><th style={{width:"20%",textAlign:"left"}}>Option</th></>:<></>}

        </tr>)
    }

    const insertdata=()=>{
        return offices.map((office, index) => {
            const {name,phone,Address,city } = office //destructuring
            return (
               <tr key={index}>
                  <td style={{width:"20%",textAlign:"left"}}>{name}</td>
                  <td style={{width:"20%",textAlign:"left"}}>{phone}</td>
                  <td style={{width:"20%",textAlign:"left"}}>{Address}</td>
                  <td style={{width:"20%",textAlign:"left"}}>{city}</td>
                  {userService.isAdmin()?<>
                    <td style={{width:"20%"}}><AiFillEdit size="40px" onClick={(e)=>{
                      console.log("edit clicked")
                     history.push("/updateoffice/"+office._id);
                  }}/><AiTwotoneDelete  size="40px" onClick={(e)=>{
                    console.log("delete clicked");
                    agriofficeService
                            .deleteoffice(office._id)
                            .then((data)=>{
                               setdis("block")
                               getdata()
                            })
                            .catch((err) => {
                                console.log(err.response.data);
                                toast.error(err.response.data, {
                                position: toast.POSITION.TOP_LEFT,})
                            });
                            // window.location.reload();
                }}/></td>
                  
                  </>:<></>}
                  
               </tr>
            )
         })
    }
    React.useEffect(getdata,[]);
    
    return ( <>
    <div >

     <h1 style={{padding:"15px",color:"white",background:"green",textAlign:"center",marginBottom:"1rem"}}>District Offices</h1>   
    {offices.length>0?
    
    <div  style={{marginLeft:"5%",marginRight:"5%"}}>
        <Table striped bordered hover style={{backgroundColor:"#6DDD00",color:"white"}}>
        <thead>
        {drawheader()}
        </thead>
        <tbody>
             
             {insertdata()}
         </tbody>
    </Table> 
    </div>
    :<><h1>No office records founds</h1></>
    }
    {userService.isAdmin()?<>
        <button
        style={{backgroundColor:"#6DDD00",color:"white",padding:"10px",fontWeight:"bold",fontSize:"28px"}}
        onClick={() => {
            history.push("/newagrioffice");
        }}
      >
        Add office
      </button>
    </>:<></>}

    <div id="myModal" className="modal" style={{display:dis}} >

{/* <!-- Modal content --> */}
<div className="modal-content" >
  <div className="modal-header">
  <h2 style={{padding:"15px"}}></h2>
    <span className="close" onClick={()=>{setdis("none")}} >&times;</span>
    
  </div>
  <div className="modal-body">
    <h2>Deleted</h2>
  </div>
  <div className="modal-footer">
  <h2 style={{padding:"15px",marginRight:"50%",marginLeft:"50%",cursor:"pointer"}}
  onClick={()=>{
    setdis("none")
  }}
  >Ok</h2>
  </div>
</div>

</div>


    </div>
    </>);
}
 
export default Showoffices;