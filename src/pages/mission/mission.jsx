import React from 'react';
import mission from '../Carousel/images/mission.jpg'
const Missionstatement = () => {
    return (
      <div>
          <h1 style={{textAlign:"center",marginBottom:"2rem"}}>Our Mission</h1>

         <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
        <img src={mission}  alt="" height="200px" width="250px"/>
        <span style={{width:"50%"}}>     
        <h1 style={{textAlign:"right"}}>
        ہمارا مقصد
        </h1>
        <p style={{textAlign:"justify",textJustify:"interword"}}>
         پاکستان کی جی ڈی پی کے لیے زراعت اہم ہے اور زراعت کی ریڑھ کی ہڈی کسان ہیں۔ جیسا کہ ایک کسان محنت کرکے پورے ملک کا پیٹ پالتا ہے اور بدلے میں اسے وہ منافع نہیں ملتا جس کا وہ حقدار تھا۔ جیسا کہ بیچوان ہوتے ہیں جب کسان کوئی پروڈکٹ خریدتا ہے تو درمیانی آدمی کو کمیشن ملتا ہے اور جب کسان دوبارہ پروڈکٹ بیچتا ہے تو درمیانی آدمی کو منافع ملتا ہے۔ ہماری
مقصد آن لائن فراہم کرکے بیچوان کو ہٹا کر کسانوں کے منافع میں اضافہ کرنا ہے۔
کسان، گاہک اور سپلائر کے لیے پلیٹ فارم
        </p>
        </span>
    </div>
    </div> );

}
 
export default Missionstatement;