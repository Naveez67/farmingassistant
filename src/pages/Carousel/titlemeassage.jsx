import React,{useState} from 'react';
import Typewriter from "typewriter-effect";
import './title.css'
const Titletext = () => {
  const [bigscreen,setbif]=useState(true)
 const fn=()=>{
   if(window.innerWidth>700){
     setbif(true)
   }
   else setbif(false)
 }
  window.addEventListener('resize',fn)
    return ( 
        <div className="title">
          <div >
            <div >
            
              <span className={bigscreen?"heading":"headingmini"}> خوش آمدید</span>
              <br />
              <span>
                <strong className={bigscreen?"heading":"headingmini"}>ایک پلیٹ فارم پر جہاں ہم خدمات فراہم کرتے ہیں۔ </strong>
              </span>
              
            </div>
            <div className={bigscreen?"sub":"submini"}>
              <Typewriter
                options={{
                  strings: ["اشتہارات پوسٹ کرنے", "موسم کا حال", "مارکیٹ کی صورتحال","کاشتکاری کی نئی تکنیک کے بارے میں معلومات"],
                  autoStart: true,
                  loop: true,
                  delay: 50
                }}
              />
            </div>
          </div>
        </div>
    );
}
 
export default Titletext;