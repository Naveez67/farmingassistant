import { TextField } from '@mui/material'
import React from 'react'
import firebase from './firebase'
const  Firebasecal=({phone,setotp})=>  {
  const [show,setshow]=React.useState(false);
  
const  handleClick=()=>{
  
    setshow(true)
    var recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha',{
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        console.log(response)
      }
    });
    var number = "+92"+phone;
    firebase.auth().signInWithPhoneNumber(number, recaptcha).then( function(e) {
      window.res=e;
    })
    .catch(function (error) {
        console.error( error);

    });
  }
  const check=(val)=>{
     //setotp(true);

   // console.log(val,phone);
    let actual=window.res;
    actual.confirm(val).then((result)=>{
      setotp(true);
    })
    .catch((err)=>{
      alert("invalid otp code");
      setotp(false);
    })
  }


  const [num,setnum]=React.useState("");
    return (
      <div>
        
        <div id="recaptcha"></div>
        
        <TextField
          id="filled-basic"
          label="OTP code"
          variant="standard"
          type="number"
          value={num}
          fullWidth
          placeholder=" enter otp code" onChange={(e)=>{
            setnum(e.target.value);
            console.log((num.toString().length)+1)
            {(num.toString().length)===6?check(num):<></>}
          }}
        />
        {show?<></>:
        <>
        <button onClick={handleClick}>Send code</button><br/>
        </>}
        
        {/* <button onClick={()=>{check(num)}}>check</button><br/> */}
        
      </div>
    )
}

export default Firebasecal