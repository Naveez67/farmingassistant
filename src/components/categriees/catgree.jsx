import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'
const Catagree = () => {
    return ( <div>
<div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}>
          {/* <div className="box">
             <Link className="link">ALL</Link>
          </div> */} 
          <div className="box">
             <Link className="link" to="/crops">Crops</Link>
          </div>
          <div className="box">
             <Link className="link" to="/vegitable">Vegitables</Link>
          </div>
          <div className="box">
             <Link className="link" to="/fruits">Fruits</Link>
          </div>
          <div className="box">
             <Link className="link" to="/medicinal">Medicinal</Link>
          </div>
          <div className="box">
             <Link className="link" to="/ornamentals">Ornamentals</Link>
          </div>
      </div>
    </div> 
    );
}
 
export default Catagree;