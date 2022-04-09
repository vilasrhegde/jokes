import React,{useState} from 'react'


function Maths() {
    const [bdate,setBdate] = useState('');
    const [age,setAge] = useState(0);

    function handleBdate(e){
        setBdate(e.target.value);
    }

    function handleAge(){
        var currentDate = new Date();
        var currentYear = currentDate.getFullYear();
        age = currentYear - bdate;
        setAge(age);
    }

  return (
    <>
    <section className='maths_main'>
        <div>
        <h1>Age calculator</h1>
        {bdate}
        <input type="date" value={bdate} onChange={handleBdate } />
        <button type='submit'   onClick={handleAge} >Get</button>
        <br />
        {age}
        </div>
    </section>


    
    
    
    </>
  )
}

export default Maths