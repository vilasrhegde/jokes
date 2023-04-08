import React from 'react'
import { useState,useEffect } from 'react';
import '../App.css'


// Read docs for more features
// https://www.npmjs.com/package/random-words

function SpeedType() {

    var randomWords = require('random-words');
    const [words,setWords] = useState('');

    useEffect(() =>{
        let w = randomWords({exactly:50,join:' ',maxLength:10});
        setWords(w);
    },[])





  return (
    <div className='type-main'>
      <h2 className='para'>{words}</h2>
      <input type="text"  autofocus />
    </div>
  )
}

export default SpeedType