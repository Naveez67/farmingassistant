
import React from 'react';
import userService from '../../services/UserService';
import {Link} from "react-router-dom";
import { useHistory } from 'react-router';
import './profile.css'
const Profile = () => {
    const history=useHistory();
return ( <div>

        <div className="profiledesktop">
           <div className="deskmenu"> 
           {userService.isnotadmin()?<>
            <div className="boxdesk">
              <Link className="link" to="/showprofile/editprofile"> Edit profile</Link>
           </div>
           
           {userService.isCustomer()?<></>:<>
            <div className="boxdesk">
           <Link className="link" to="/showprofile/myads"> My ads </Link>
           </div>
           <div className="boxdesk">
           <Link className="link" to="/showprofile/myposts">  My posts</Link>
           </div>
           </>}
           
           </>:<>
           <div className="boxdesk">
              <Link className="link" to="/showprofile/aduser">Add user</Link>
           </div>
           <div className="boxdesk">
              <Link className="link" to="/showprofile/adadmin">Add Admin</Link>
           </div>
           </>}
           <div className="logout" onClick={()=>{
               userService.logout();
               window.location.href = "/";
           }}>
               Logout
           </div>
           </div>
        </div>
    </div> );
}
 
export default Profile;  