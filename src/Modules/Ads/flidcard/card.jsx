import React from 'react';
import './card.css'
const Card = ({ad}) => {
  const get=(val)=>{
    if(val.length>60){
       return val.slice(0, 50)
    }
    return val
  }
    return ( 
       <div> 
        <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={ad.photo} alt="Avatar" style={{width:"350px",height:"300px"}} />
          </div>
          <div className="flip-card-back">
            <h1>{ad.title}</h1>
            <p>{get(ad.body)}</p>
            <div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap",flexDirection:"column"}}>
              <h3>Type:{ad.type}</h3>
              <h3>Category:{ad.category}</h3>
            </div>
          </div>
        </div>
      </div>

      </div>
     );
}
 
export default Card;