import React from 'react';
import './footer.css'
import {AiTwotoneMail,AiFillInstagram,AiFillTwitterCircle} from 'react-icons/ai'
import {FcPhoneAndroid} from 'react-icons/fc'
import {BsFacebook} from 'react-icons/bs'
import { Link } from 'react-router-dom';
//import footer from '../Carousel/images/footer.jpg'
const Footer = () => {
    return ( 
    <div  className="footer">
         <div className="maindiv">
             <div className="subdiv">
                 <h2 className="maintitle">About us</h2>
                 <ul className="list">
                    <li></li>
                 </ul>
             </div>
             <div className="subdiv">
                 <h2 className="maintitle">Contact us</h2>
                 <ul className="list">
                    <li><AiTwotoneMail />farming@gmail.com</li>
                    <li><FcPhoneAndroid />03114128859</li>
                 </ul>
             </div>
             <div className="subdiv">
                 <h2 className="maintitle">Quick  links</h2>
                 <ul className="list">
                    <li style={{cursor:"pointer"}}><Link className="relink"   to="/showrates">Market rates</Link></li>
                    <li style={{cursor:"pointer"}}><Link className="relink"  to="/showblog">Blogs</Link></li>
                    <li style={{cursor:"pointer"}}><Link className="relink"  to="/weather">Weather</Link></li>
                    <li style={{cursor:"pointer"}}><Link className="relink"  to="/all">Crops</Link></li>
                 </ul>
             </div>
         </div>
          
         <div style={{display:"flex",justifyContent:"center"}}>
            <h4>Fllow us</h4>
            <ul className="sociallinkli" >
                <li style={{marginLeft:"1.5rem"}}><a href="https://www.facebook.com/Farming-Assistant-Web-Service-109485314912109
"><BsFacebook size="50px"/></a></li>
                <li style={{marginLeft:"1.5rem"}}><a href="https://www.instagram.com/farmer.3332/"><AiFillInstagram size="50px"/></a></li>
                <li style={{marginLeft:"1.5rem"}}><AiFillTwitterCircle size="50px"/></li>
                    
            </ul>
         </div>
         <hr style={{marginLeft:"5rem",marginRight:"5rem"}}/>
         <div style={{display:"flex",justifyContent:"center"}}>
            <h4>@FAWS 2021</h4>

         </div>
    </div> );
}
 
export default Footer;