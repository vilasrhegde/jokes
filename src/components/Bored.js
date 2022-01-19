import '../App.css';
import React,{useState} from 'react';
import axios from "axios"

function Bored() {

  const [item,setItem] = useState('');

  async function fetchData() {
    try {
      // const result = await axios.get(`https://api.genderize.io?name=luc`)
      const result = await axios.get(`https://www.boredapi.com/api/activity`)
      console.log(result.data);
      setItem(result.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="bored-content">
      <h1>Are you Bored?</h1>
      <button onClick={fetchData}>Click here</button>
      <h2>{item.activity}</h2>
    </div>
  );
}

export default Bored;
