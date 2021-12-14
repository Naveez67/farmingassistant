import React from 'react';
import Shownews from '../../admin/news/shownews';
import Showads from '../showads';
import fruit from './imeges/fruit.png';
import Adslandinpage from './mainpage';
const Displayads = () => {
    const [type,setype]=React.useState("");
    return ( 
    <div>
            <Adslandinpage  settype={setype}/>
           <Showads type={type}/>
           
    </div> 
    );
}
 
export default Displayads;