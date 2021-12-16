import React from 'react';
import adsService from '../../../services/adsservice';
import Adcard from './adscard';
const Myads = () => {
    const [ads,setads]=React.useState([]);
    const get=()=>{
        adsService.getmyads().then((data)=>{
            setads(data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    React.useEffect(get,[])
    return ( <div style={{marginLeft:"auto",marginRight:"auto"}}>
        {ads.length>0?<>
        {/* <h4>Showing your ads</h4> */}
        {ads.map((ad, index) => (
              <Adcard key={index} ad={ad} />
            ))}
            <hr />
        </>:<><h4>You have not posted any ads yet</h4></>}
    </div> );
}
 
export default Myads;