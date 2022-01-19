import React from 'react'
import AxiosJoke from './components/AxiosJoke'
import AxiosTicket from './components/AxiosTicket'
import Bored from './components/Bored'
import TextForm from './components/TextForm'
import './App.css'

import { BrowserRouter , Routes, Route,Link } from 'react-router-dom';

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
              <Link to='/Joke' style={navStyle}>
              <li>Joke</li>
              </Link>
              <Link  to='/Jokelite' style={navStyle}>
              <li>Joke lite</li>
              </Link>
          </ul>
      </nav>
     <Routes>
     <Route path="/"  element={<TextForm />} />
     <Route path="/bored"  element={<Bored />}/>
     <Route path="/Joke"  element={<AxiosTicket />}/>
     <Route path="/Jokelite" element={<AxiosJoke />} /> 
    </Routes>
    </div>
    </BrowserRouter>  )
}

export default App
