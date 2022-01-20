import React,{useState,useRef,useEffect} from 'react';
import '../App.css'

function GuessNum() {
  document.title='Guess the number';

  const [userGuess, setUguess] =useState('')
  const [rand,setRand] = useState('')
  const [prime, setPrime] = useState('')
  const prevGuess = useRef('')

  function handleClick(){
    const min = 1;
    const max = 100;
    const randInt = min + Math.round(Math.random() * (max - min));
    setRand(randInt)  


    let count=0;
    for (let i = 1; i <= 9; i++) {
      if (rand % i == 0){
        count++;
      } 
    } 
    if(count>2){
      setPrime('No')
    }
    else{
      setPrime('Yes')
    }
  }


  useEffect(() =>{
    prevGuess.current=userGuess
    document.title=`Your guess: ${userGuess}`
},[userGuess])

  return (
    <>
    <div className="guess">
      {/* <h2>{rand}</h2> */}
    <button className='play_btn' onClick={handleClick}>Let's play</button>
    <h1 hidden={rand==''}>Guess a number between 1 and 100</h1>
    <input disabled={rand==''}  onChange={e => setUguess(e.target.value)} value={userGuess} type="number" min="0" max="100" maxLength="3" className='guess_inp' />
    <h3 hidden={userGuess==''}><span className='pres_prev'>Present number is {userGuess} and previous was {prevGuess.current}</span> </h3>
    <br />
    <h1 hidden={userGuess==''}>{userGuess < rand & rand %2 !=0 ? "Try larger and odd" : ""}</h1>
    <h1 hidden={userGuess==''}>{userGuess > rand & rand %2 !=0  ? "Try smaller and odd" : ""}</h1>
    <h1 hidden={userGuess==''}>{rand %2 ==0 & userGuess > rand   ? "Number is even and smaller" : ""}</h1>
    <h1 hidden={userGuess==''}>{rand %2 ==0 & userGuess < rand   ? "Number is even and larger" : ""}</h1>
    {/* <h1 hidden={userGuess==''}>{userGuess > rand & prime == "Yes"    ? "Number is prime and smaller" : ""}</h1>
    <h1 hidden={userGuess==''}>{userGuess < rand & prime == "Yes"    ? "Number is prime and larger" : ""}</h1>
     */}
    <h1  hidden={userGuess==''} ><span className='h1success'>{userGuess == rand ? `Hurray ${rand} is a correct guess!`: ""}</span></h1>
    </div>
    </>
  );
}
export default GuessNum

