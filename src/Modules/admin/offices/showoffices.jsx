import React from 'react';
import agriofficeService from '../../../services/admin/Agrioffices';
import userService from '../../../services/UserService';
import {AiFillPlusCircle,AiTwotoneDelete,AiFillEdit} from 'react-icons/ai'
import { Table } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify"; 
const Showoffices = () => {
    const [offices,setoffices]=React.useState([]);
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
                               // console.log(data);
                            })
                            .catch((err) => {
                                console.log(err.response.data);
                                toast.error(err.response.data, {
                                position: toast.POSITION.TOP_LEFT,})
                            });
                            window.location.reload();
                }}/></td>
                  
                  </>:<></>}
                  
               </tr>
            )
         })
    }
    React.useEffect(getdata,[]);
    
    return ( <>
    {offices.length>0?
    
    <div>
        <Table striped bordered hover>
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
        <AiFillPlusCircle size="40px" style={{marginTop:"2rem"}} onClick={(e)=>{
       // console.log("add new office")
        history.push("/newagrioffice");
    }} />
    </>:<></>}


    </>);
}
 
export default Showoffices;