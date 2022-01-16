import React from 'react';
import mission from '../Carousel/images/mission.jpg'
const Missionstatement = () => {
    return (
      <div>
          <h1 style={{textAlign:"center",marginBottom:"2rem"}}>Vision & Mission</h1>

         <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
        <span style={{width:"50%"}}>     
        <h1 style={{textAlign:"left",fontWeight:"bolder",fontSize:"26px"}}>
        Our Mission
        </h1>
        <p style={{textAlign:"justify",textJustify:"interword",fontSize:"22px"}}>
        <b>"</b> Agriculture is important for Pakistan's GDP and farmers are the backbone of agriculture. As a farmer works hard to feed the whole country and in return he does not get the profit he was entitled to. As there are intermediaries, when the farmer buys a product, the middle man gets commission and when the farmer sells the product again, the middle man gets profit. Our goal is to increase farmers' profits by removing middlemen by providing them online platform. Platform for farmers, customers and suppliers
        <b> "</b></p>
        </span>
    </div>
    </div> );

}
 
export default Missionstatement;