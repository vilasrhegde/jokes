import React from 'react'
import AxiosTicket from './components/AxiosTicket'
import Bored from './components/Bored'
import TextForm from './components/TextForm'
import GuessNum from './components/GuessNum'
import SnWaGu from './components/SnWaGu'
import ProgJoke from './components/ProgJoke'
import Captcha from './components/Captcha'
import './App.css'

import { BrowserRouter , Routes, Route,Link } from 'react-router-dom';
import Main from './components/logins/Main'


function App() {
  const navStyle ={
    color:'white',
    textDecoration: 'none',
};


  return (

    <BrowserRouter>
  <div className="App">
      <nav className='navbar'>
          <Link to='/' style={navStyle}>
          <h1>Home</h1>
          </Link>
          <ul className="nav-links">
              <Link to='/bored' style={navStyle}>
              <li>Bored?</li>
              </Link>
              <Link to='/GuessNum' style={navStyle}>
              <li>Guess Num</li>
              </Link>
              <Link  to='/SWGGame' style={navStyle}>
              <li>SWG Game</li>
              </Link>
              <Link to='/Joke' style={navStyle}>
              <li>Joke</li>
              </Link>
              <Link  to='/ProgJoke' style={navStyle}>
              <li>Prog Joke</li>
              </Link>
              <Link  to='/captcha' style={navStyle}>
              <li>Captcha</li>
              </Link>
              <Link  to='/logins' style={navStyle}>
              <li>Logins</li>
              </Link>
           
          </ul>
      </nav>
     <Routes>
     <Route exact path='/'  element={<TextForm />} />
     <Route path="/bored"  element={<Bored />}/>
     <Route path="/Joke"  element={<AxiosTicket />}/>
     <Route path="/ProgJoke" element={<ProgJoke />} /> 
     <Route path="/GuessNum" element={<GuessNum />} /> 
     <Route path="/SWGGame"  element={<SnWaGu />}/>
     <Route path="/captcha"  element={<Captcha />}/>
     <Route path="/logins"  element={<Main />}/>
    </Routes>
    </div>
    </BrowserRouter>  

    );
}

export default App
