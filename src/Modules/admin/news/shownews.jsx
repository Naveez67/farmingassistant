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
    return ( <div style={{marginTop:"4rem",marginRight:"10%",marginLeft:"10%"}}>
        <h3>Showing News</h3>
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
        
        <button onClick={()=>{
            history.push("/addnews")
        }}>
           Add news
        </button>
        
        </>:<></>}
    </div> );  
}

    
export default Shownews;  