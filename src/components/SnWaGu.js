import React,{useState,useRef} from 'react';

function SnWaGu() {
    document.title="Let's play a game";

  const [userGuess, setUguess] =useState('');
  const [rand,setRand] = useState('');
  const [comp, setComp] = useState('');
  const prevGuess = useRef('');
  
  function handleClick(){
    let randInt=Math.floor((Math.random() * 3) + 1);
    setRand(randInt);
    
    if(randInt==1){
      setComp('Snake');
    }
    else if(randInt==2){
      setComp('Water');
    }
    else if(randInt==3){
      setComp('Gun');
    }
    else{
      setComp('undefine');
    }

  }
  function handleSnake(){
    setUguess('Snake');    
  }
  function handleWater(){
    setUguess('Water');
  }
  function handleGun(){
    setUguess('Gun');
  }

    


  return (
      <>
      <div className="snake_game">
          <h1 hidden={!comp}>Me: {comp}</h1>
          <br />
          <div className="buttons" onClick={handleClick}>
              <button  className='btn1' onClick={handleSnake}>Snake</button>
              <button className='btn2'  onClick={handleWater}>Water</button>
              <button  className='btn3' onClick={handleGun}>Gun</button>
              <br />
          </div>
          <br />
          <h1 hidden={userGuess==''}><span className='tied'>{userGuess==comp ? "Match is tied!" : "" }</span></h1>
          <h1 hidden={userGuess==''}><span className='lose'>{userGuess=='Snake' & comp=='Water' ? "You lose!" : "" }</span></h1>
          <h1 hidden={userGuess==''}><span className='win'>{userGuess=='Snake' & comp=='Gun' ? "You won!" : "" }</span></h1>
          <h1 hidden={userGuess==''}><span className='win'>{userGuess=='Water' & comp=='Snake' ? "You won!" : "" }</span></h1>
          <h1 hidden={userGuess==''}><span className='lose'>{userGuess=='Water' & comp=='Gun' ? "You lose!" : "" }</span></h1>
          <h1 hidden={userGuess==''}><span className='lose'>{userGuess=='Gun' & comp=='Snake' ? "You lose!" : "" }</span></h1>
          <h1 hidden={userGuess==''}><span className='win'>{userGuess=='Gun' & comp=='Water' ? "You won!" : "" }</span></h1>

      </div>

      </>
  );
}

export default SnWaGu;
