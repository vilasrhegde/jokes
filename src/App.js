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
import RockPapSci from './components/RockPapSci'



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
              <Link to='/Guess' style={navStyle}>
              <li>Guess</li>
              </Link>
              <Link  to='/SWG' style={navStyle}>
              <li>SWG</li>
              </Link>
              <Link to='/Joke' style={navStyle}>
              <li>Joke</li>
              </Link>
              <Link  to='/Programming' style={navStyle}>
              <li>Programming</li>
              </Link>
              <Link  to='/captcha' style={navStyle}>
              <li>Captcha</li>
              </Link>
              <Link to='/RPS' style={navStyle}>
              <li>RPS</li>
              </Link>
           
          </ul>
      </nav>
     <Routes>
     <Route exact path='/'  element={<TextForm />} />
     <Route path="/bored"  element={<Bored />}/>
     <Route path="/Joke"  element={<AxiosTicket />}/>
     <Route path="/Programming" element={<ProgJoke />} /> 
     <Route path="/Guess" element={<GuessNum />} /> 
     <Route path="/SWG"  element={<SnWaGu />}/>
     <Route path="/RPS"  element={<RockPapSci />}/>
     <Route path="/Captcha"  element={<Captcha />}/>


    </Routes>
    </div>
    </BrowserRouter>  

    );
}

export default App
