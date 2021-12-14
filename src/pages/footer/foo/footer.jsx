import React from 'react';
import "./foo/style.css";
import {FaFacebook} from "react-icons/fa";
import {FiTwitter} from "react-icons/fi";
import {FaInstagram} from "react-icons/fa";
import {BiChevronRight} from "react-icons/bi";
import {HiChevronRight} from "react-icons/hi";
import {FaMapMarkerAlt} from "react-icons/fa";
import {FaMobileAlt} from "react-icons/fa";
import {FaEnvelope} from "react-icons/fa";
import {FaGlobeEurope} from "react-icons/fa";
import abc from './foo/img/footer-shape.png';
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
                    <div className="footer-social">
                        <a href=""><FaFacebook  size="40px" className="fab "/></a>
                        <a href=""><FiTwitter  size="40px" className="fab "/></a>
                        <a href=""><FaInstagram  size="40px" className="fab "/></a>
                        
                        
                    </div>
                </div>
                <div className="single-footer">
                    <h4>main menu</h4>
                    <ul style={{textAlign: "left"}}>
                        <li><a href=""><HiChevronRight className="fas"/> home</a></li>
                        <li><a href=""><HiChevronRight className="fas"/> Ads</a></li>
                        <li><a href=""><HiChevronRight className="fas"/> Help</a></li>
                        <li><a href=""><HiChevronRight className="fas "/> Agri Office</a></li>
                        
                    </ul>
                </div>
                <div className="single-footer">
                    <h4>quick links</h4>
                    <ul  style={{textAlign: "left"}}>
                        <li><a href=""><HiChevronRight className="fas"/> Market Rates</a></li>
                        <li><a href=""><HiChevronRight className="fas"/> Weather</a></li>
                        <li><a href=""><HiChevronRight className="fas"/> Blog</a></li>
                        <li><a href=""><HiChevronRight className="fas"/> Crops</a></li>
                    </ul>
                </div>
                <div className="single-footer">
                    <h4>contact us</h4>
                    <ul  style={{textAlign: "left"}}>
                        <li><a href=""><FaMapMarkerAlt className="fas"/> Lahore, Pakistan</a></li>
                        <li><a href=""><FaMobileAlt className="fas"/> 03314924054</a></li>
                        <li><a href=""><FaEnvelope className="fas"/> Farming@gmail.com</a></li>
                        <li><a href=""><FaGlobeEurope className="fas"/> www.Farming.com</a></li>
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