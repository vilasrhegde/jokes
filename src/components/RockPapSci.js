import React,{useState} from 'react'

function RockPapSci() {
    const [rand,setRand] = useState('');
    const [comp, setComp] = useState('');
    const [user,setUser] = useState('');
    const [view,setView] = useState(false)

    const [wins,setWins] = useState(0);
    const [loss,setLoss] = useState(0);
    const [tie,setTie] = useState(0);


    function handlePlay(){
        let randInt=Math.floor((Math.random() * 3) + 1);
        setRand(randInt);
        setView(false)
        if(randInt==1){
          setComp('Rock');
        }
        else if(randInt==2){
          setComp('Paper');
        }
        else if(randInt==3){
          setComp('Scissor');
        }
        else{
          setComp('undefine');
        }

        console.log(comp)
    
    }
        let ptie='';
        let pwin='';
        let los='';

    function handleRock(){
        if (comp == 'Rock'){
            ptie = tie +1;
            setTie(ptie)
        }
        else if(comp == 'Scissor'){
            pwin = wins +1
            setWins(pwin);
        }
        else{
            los = loss + 1
            setLoss(los)
        }
    }
    function handlePaper(){
        if (comp == 'Paper'){
            ptie = tie +1;
            setTie(ptie)
        }
        else if(comp == 'Rock'){
            pwin = wins +1
            setWins(pwin);
        }
        else{
            los = loss + 1
            setLoss(los)
        }
    }
    function handleSci(){
        if (comp == 'Scissor'){
            ptie = tie +1;
            setTie(ptie)
        }
        else if(comp == 'Paper'){
             pwin = wins +1
            setWins(pwin);
        }
        else{
             los = loss + 1
            setLoss(los)
        }
    }
    function handleView(){
        setView(true)
    }
  return (
    <>
    <div className='rps_main'>
        <div className='holder'>
            <h3 id='loss'>Loss: {loss}</h3>
            <h3 id='win'>Wins: {wins}</h3>
            <h3 id='tie'>Ties: {tie}</h3>
        </div>
        <div className="play_btn">
            <button onClick={handlePlay}>Play</button>
        </div>
        <div className="computer">
            <h5 id='view' onClick={handleView}>My Choice?</h5>
            <h5 hidden={!view}>{comp}</h5>
        </div>
        
        <div className='play_area' >
            <button disabled={!comp} onClick={handleRock}>Rock</button>
            <button disabled={!comp} onClick={handlePaper}>Paper</button>
            <button disabled={!comp} onClick={handleSci}>Scissor</button>
        </div>
    </div>
        
    
    </>
  )
}

export default RockPapSci