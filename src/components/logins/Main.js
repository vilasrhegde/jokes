
import { signInWithGoogle } from './firebase';
import firebase from './firebase'
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useState } from 'react';
import { auth } from './firebase'
import { signOut } from 'firebase/auth';

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

  function handleSignout() {
    signOut(auth)
    .then(() => {
        console.log('logged out');
        window.location.href=window.location.href;
    })
    .catch((error) => {
        console.log(error);
    });
  }

  return (
    <div className="logins">
      <button hidden onClick={signInWithGoogle} className="login-with-google-btn">  Sign  In With  Google </button>
      <br />
      <div hidden={!phoneVerify}>
          <h4>{localStorage.getItem("name")}</h4>
          <h4>{localStorage.getItem("email")}</h4>
          <img src={localStorage.getItem("profilePic")} ></img>
          <button onClick={handleSignout}>Sign Out</button>
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
        <form className='form' onSubmit={requestOTP}>
          <h3>Sign In With Phone</h3>
          <input placeholder='Phone number' type='tel' className='form-input' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}  id=''  />
          <br />
          <button className='btn btn-outline-warning' type='submit'>Get OTP</button>
          <div id='recaptcha-container'></div>
        <br /><br />
          <div >
          <label htmlFor="otp">Enter OTP      </label>
          <input type='number' className='form-input' value={OTP} onChange={verifyOTP}  id='otp' />
          <br />
          <button className='btn btn-success' type='submit'>Submit</button>
          </div>

        </form>
      </div>

    </div>
  );
}

export default Main;
