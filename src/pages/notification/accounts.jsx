import React,{useState} from 'react';
import { Table } from 'react-bootstrap';
import notification from '../../services/notification';
// import userService from '../../services/UserService';
import { useHistory } from 'react-router';
import './style.css'
const Accounts = () => {
    const history=useHistory();
    const [noti,setnoti]=useState([]);
    const check=()=>{
        notification.getaccounts().
        then((data)=>{
              // console.log(data);
              setnoti(data);
        })
        .catch((err)=>{console.log(err.response.data)});
    }
    React.useEffect(check,[]);

    return ( <div>

         <div className="main">
              <h1>Showing Unverfied Accounts</h1>
         </div>

         {noti.length!==0?<>
         <Table>
             <thead>
                 <th>Username</th>
                 <th>status</th>
                 <th>Role</th>
                 <th>profile</th>
             </thead>
           {noti.map((item,index) => {
            const {username,accountverfied,role } = item //destructuring
              
            return (
               <tr key={index}>
                  <td>{username}</td>
                  <td>{accountverfied?"verfied":"not verfied"}</td>
                  <td>{role}</td>
                  <td><button onClick={()=>{
                     history.push("/account/"+item._id)
                  }}>View profile</button></td>
               </tr>
                   
             )
           })}
          </Table>
         </>
            :<>
              No Accounts
            </>}
    </div> );
}
 
export default Accounts;