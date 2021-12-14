import React,{useState} from 'react';
const Adcard = ({ad}) => {
    return ( 
    <div style={{display:"flex",flexDirection:"column",width:"50%",marginRight:"auto",marginLeft:"auto"}}>
       <div>
          <img src={ad.photo} alt={ad.title} style={{ width: "100%", height: 300 }} />
       </div>
       <div>
           <h1>{ad.title}</h1>
           <p>
               {ad.body}
           </p>
           <h5>Price:{ad.price}</h5>           
           <h5>Type:{ad.type}</h5>           
           <h5>Category:{ad.category}</h5>           
       </div>
    </div> 
    );
}
 
export default Adcard;