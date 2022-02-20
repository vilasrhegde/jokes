
import { signInWithGoogle } from './firebase';
import firebase from './firebase'
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useState } from 'react';
import { auth } from './firebase'

function Main() {
  // const handleClick = () =>{
  //   let recptcha = new RecaptchaVerifier('recaptcha-container')
  //   let number = "";

  // }

  const countrycode = "+91";

  const [phoneNumber, setPhoneNumber] = useState(countrycode);
  const [phoneVerify, setPhoneVerify] = useState('');
  const [OTP, setOTP] = useState('');

  const generateRecaptcha = () =>{
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
      }
    }, auth);
  }


  const requestOTP = (e) =>{
    e.preventDefault();
    if(phoneNumber.length >=12){
      generateRecaptcha();
      let appVerifier = window.recaptchaVerifier;
      signInWithPhoneNumber(auth,phoneNumber,appVerifier)
      .then(confirmationResult =>{
        window.confirmationResult =confirmationResult;    
      }).catch((error) =>{
        console.log(error);
      });

    }


  }

  const verifyOTP = (e) =>{
    let otp = e.target.value;
    setOTP(otp);

    if(otp.length === 6){
      // console.log(otp);
      let confirmationResult = window.confirmationResult;
      confirmationResult.confirm(otp).then((result) => {
        // User signed in successfully.
        const user = result.user;
        console.log(user);
        setPhoneVerify(user);
        // ...
      }).catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
        console.log(error)
      });
    }
  }

  return (
    <div className="logins">
      <button onClick={signInWithGoogle} className="login-with-google-btn">  Sign  In With  Google </button>
      <div hidden={phoneVerify}>
          <h1>{localStorage.getItem("name")}</h1>
          <h2>{localStorage.getItem("email")}</h2>
          <img src={localStorage.getItem("profilePic")} ></img>
      </div>
      <h5>{phoneVerify.phoneNumber}</h5>
      <br /><br />

      {/* <div id='recaptcha-container'>
          <button 
          onClick={generateRecaptcha}
          >
            Get OTP
          </button>
      </div> */}

      <div className='form-container' >
        <form onSubmit={requestOTP}>
          <h3>Sign In With Phone</h3>
          <label htmlFor="phonein">Phone Number   </label>
          <input type='tel' className='form-input' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}  id='phonein'  />
          <br />
          <br />
          <button className='btn btn-outline-warning' type='submit'>Get OTP</button>
          <div id='recaptcha-container'></div>
        <br /><br />
          <div >
          <label htmlFor="otp">Enter OTP      </label>
          <input type='number' className='form-input' value={OTP} onChange={verifyOTP}  id='otp' />
          <br />
          <br />
          <button className='btn btn-success' type='submit'>Submit</button>
          </div>

        </form>
      </div>


    </div>
  );
}

export default Main;
