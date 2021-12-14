import React from 'react'
import MediaCard from './singlenews';
import news from "../../../services/admin/news";
import userService from '../../../services/UserService';
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify"; 
import { Grid } from '@mui/material';
import Skelton from '../blog/skelton'
// import { Grid } from '@material-ui/core';
const Shownews = () => {
    const history=useHistory();
    const [News,setNews]=React.useState([]);
    const [isloaded,setisloaded]=React.useState(false);
    const getNews=()=>{
        news
            .getnews()
            .then((data) => {
                console.log(data.length);
                setNews(data);
                setisloaded(true)
                //console.log(News.length);
              })
              .catch((err) => {
               // console.log(err.response.data);
                setisloaded(false)
                toast.error(err.response.data, {
                  position: toast.POSITION.TOP_LEFT,})
              });
    }
    React.useEffect(getNews, []);
    return ( <div style={{background:"#70E000"}}>
        <div >
        <h3 style={{textAlign:"center",color:"white",padding:"15px"}}>___Showing News___</h3>
        </div>
        <div style={{marginRight:"10%",marginLeft:"10%"}}>
       {
         isloaded?<></>:
         <Grid container spacing={3}>
           <Grid item xs={12} sm={4}>
             <Skelton />
           </Grid>
           <Grid item xs={12} sm={4}>
             <Skelton />
           </Grid>
           <Grid item xs={12} sm={4}>
             <Skelton />
           </Grid>
           <Grid item xs={12} sm={4}>
             <Skelton />
           </Grid>
           <Grid item xs={12} sm={4}>
             <Skelton />
           </Grid>
           <Grid item xs={12} sm={4}>
             <Skelton />
           </Grid>
         </Grid>
       }



        {News.length>0?<>
          <Grid container spacing={3}>
          {News.map((newss,index)=>(<MediaCard key={index} newss={newss} onDelete={getNews}/>))}
          </Grid>
        </>:<p>Nothing to show</p>}

        {userService.isAdmin()?<>
        
        <button 
          style={{backgroundColor:"green",color:"white",padding:"10px",fontWeight:"bold",fontSize:"28px",marginTop:"2rem"}}
        onClick={()=>{
            history.push("/addnews")
        }}>
           Add news
        </button>
        
        </>:<></>}
        </div>
    </div> );  
}

    
export default Shownews;  