import React,{useState} from 'react';
import Typewriter from "typewriter-effect";
import './title.css'
const Titletext = () => {
    return ( 
        <div className="title">
          <div >
            <div >
            
              <span className="heading"> خوش آمدید</span>
              <br />
              <span>
                <strong className="heading">ایک پلیٹ فارم پر جہاں ہم خدمات فراہم کرتے ہیں۔ </strong>
              </span>
              
            </div>
            <div className="sub">
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