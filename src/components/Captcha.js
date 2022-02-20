import React,{useState} from 'react';
import '../App.css'
import Main from './logins/Main';

function Captcha() {
    const [capt, setCapt] = useState('');
    const [user, setUser] = useState('');
    let captcha="";
    let alphabets="AaBbCcDdEeFfggHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";

    let generate=() =>{
        let first = alphabets[Math.floor(Math.random() * alphabets.length )];
        let second = Math.floor(Math.random() * 10);
        let third = Math.floor(Math.random() * 10);
        let fourth = alphabets[Math.floor(Math.random() * alphabets.length )];
        let fifth = alphabets[Math.floor(Math.random() * alphabets.length )];
        let sixth = Math.floor(Math.random() * 10);

        captcha = first.toString()+second.toString()+third.toString()+fourth.toString()+fifth.toString()+sixth.toString();

        setCapt(captcha);
        document.getElementById('cap').style.textDecoration='line-through';
    }
  return (
      <>
      <div className='cap-container'>
          
      </div>
      <div className="captcha" >
        
          <div className="inputs">
              <input type="button" className='cap_val' id='cap' readOnly value={capt ? capt : "Tap here"} onClick={generate}/>
              <input type="text" className='user' placeholder='Enter the exact value' onChange={e => setUser(e.target.value)} value={user}  />
              <h3 hidden={user=='' & user.length==capt.length & user.length==0 }>{capt == user ? "OK You're a Homo Sepien." : ""}</h3>
          </div>
      </div>
      </>
  )
}

export default Captcha;
