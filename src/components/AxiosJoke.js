import React,{useState} from 'react'
//npm i axios
import axios, { Axios } from "axios"
import '../App.css'

function AxiosJoke() {
  document.title="Joke"
    const[joke, setJoke]  = useState('');
    const [type,setType] = useState('Any');
    const handletype=(e)=>{
        const value=e.target.value;
        setType(value);
        document.title=value 
    }

    
  const  getJoke=(e)=>{
     axios.get(`https://v2.jokeapi.dev/joke/${type}?blacklistFlags=nsfw,religious,political,racist,sexist,explicit`).then(
      (response) =>{
      console.log(response);

      setJoke(response.data.joke);
      if(e.target.value!=''){
        setJoke(response.data.setup);
      }
    }
    );
  };
    return (
      <>
        <div className='joke'>
        <marquee behavior="" direction="">Programming,Misc,Dark,Pun,Spooky</marquee>
         <input type="text" value={type} onChange={handletype} placeholder='Programming,Misc,Dark,Pun,Spooky' />   
        <button type='submit' onClick={getJoke}>Get Joke</button>
        <h1 >{joke}</h1>
        <footer>Don't worry nsfw,religious,political,racist,sexist,explicit contents are blacklisted.
          <br /><br /> 
         &copy; {(new Date().getFullYear())}  Vilas Hegde All Rights are  Reserved 
         </footer>
        </div>
        
      </>
    )
}

export default AxiosJoke
