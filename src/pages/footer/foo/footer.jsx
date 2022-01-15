import React from 'react';
import "./foo/style.css";
import {FaFacebook} from "react-icons/fa";
import {FiTwitter} from "react-icons/fi";
import {FaInstagram} from "react-icons/fa";
import {HiChevronRight} from "react-icons/hi";
import {FaMapMarkerAlt} from "react-icons/fa";
import {FaMobileAlt} from "react-icons/fa";
import {FaEnvelope} from "react-icons/fa";
import {FaGlobeEurope} from "react-icons/fa";
import {Link} from 'react-router-dom'
//import footer from '../Carousel/images/footer.jpg'
const Footer = () => {
    return ( 
        <footer className="footer-area">
        <div className="footer-wave-box">
            <div className="footer-wave footer-animation"></div>
        </div>
        <div >
            <div className="footer">
                <div className="single-footer">
                    <h4>about us</h4>
                    <p>We are providing a best platform to farmers for their great profitablly.</p>
                    <Link to="/aboutus" style={{textDecoration:"none",color:"white",fontSize:"22px"}}> Our Team</Link>
                    <div className="footer-social">
                        <a href=""><FaFacebook  size="40px" className="fab "/></a>
                        <a href=""><FiTwitter  size="40px" className="fab "/></a>
                        <a href=""><FaInstagram  size="40px" className="fab "/></a>
                        
                        
                    </div>

                </div>
                <div className="single-footer">
                    <h4>main menu</h4>
                    <ul style={{textAlign: "left"}}>
                        <li><Link to="/"><HiChevronRight className="fas"/> home</Link></li>
                        <li><Link to="/ads"><HiChevronRight className="fas"/> Ads</Link></li>
                        <li><Link to="/showhelpposts"><HiChevronRight className="fas"/> Help</Link></li>
                        <li><Link to="/offices"><HiChevronRight className="fas "/> Agri Office</Link></li>
                        
                    </ul>
                </div>
                <div className="single-footer">
                    <h4>quick links</h4>
                    <ul  style={{textAlign: "left"}}>
                        <li><Link to="/showrates"><HiChevronRight className="fas"/> Market Rates</Link></li>
                        <li><Link to="/weather"><HiChevronRight className="fas"/> Weather</Link></li>
                        <li><Link to="/showblog"><HiChevronRight className="fas"/> Blog</Link></li>
                        <li><Link to="/all"><HiChevronRight className="fas"/> Crops</Link></li>
                    </ul>
                </div>
                <div className="single-footer">
                    <h4>contact us</h4>
                    <ul  style={{textAlign: "left"}}>
                        <li><a href=""><FaMapMarkerAlt className="fas"/> Lahore, Pakistan</a></li>
                        <li><a href=""><FaMobileAlt className="fas"/> 03314924054</a></li>
                        <li><a href=""><FaEnvelope className="fas"/>farmingassistant@gmail.com</a></li>
                        {/* <li><a href=""><FaGlobeEurope className="fas"/> www.Farming.com</a></li> */}
                    </ul>
                </div>
            </div> 
             <div className="copy">
                <p>&copy; FAWS 2021</p>
            </div>
        </div>
    </footer>
    
    
    
    
        );
}
 
export default Footer;