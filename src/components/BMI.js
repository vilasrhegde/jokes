import React,{useState} from 'react'

function BMI() {
            const [height,setHeight] = useState(null);
            const [weight,setWeight] = useState(null);

            const [bmi,setBMI] = useState(null);
            const [status,setStatus] = useState(null);

            function calculate(){
                let bmi = Number(weight / (height / 100) ** 2).toFixed(2);
                setBMI(bmi);

                let status = getStatus(bmi);
                setStatus(status);
            }
            function getStatus(bmi){
                if(bmi < 18.5) return "Underweight";
                else if (bmi >18.5 && bmi <24.9) return "Normal";
                else if (bmi >=18.5 && bmi <=24.9) return "Overweight";
                else  return "Obes";

             }

  return (
    <>
    <br /><br /><br /><br /><br />
        <h1 className='text-center font-weight-bold text-white'>Enter you Height and Weight</h1>

        <div className="container-fluid d-flex justify-content-center">
            <div className="input-groups col-md-4">
                <input type="number" className='form-control my-2' value={height} onChange={(e)=>setHeight(e.target.value)} placeholder='Enter your height in cm' />
                <input type="number" className='form-control' value={weight} onChange={(e)=>setWeight(e.target.value)} placeholder='Enter your weight in Kg' />
                <button onClick={calculate} className='btn btn-outline-info btn-lg btn-block my-2 col-md-12'>Calculate BMI</button>
            </div>
           
        </div>
        <h2 hidden={!bmi} className="text-center text-white">Your BMI is {bmi}</h2>
        <div hidden={!bmi || status==="Underweight" || status==="Overweight" || status==="Obes"  } className="alert alert-success container col-sm-4 text-center text-bold">
                {status}
        </div>
        <div hidden={!bmi || status==="Overweight" ||  status==="Obes" || status==="Normal"} className="alert alert-info container col-sm-4 text-center text-bold">
                {status}
        </div>
        <div hidden={!bmi || status==="Obes" || status==="Normal" || status==="Underweight"} className="alert alert-warning container col-sm-4 text-center text-bold">
                {status}
        </div>
        <div hidden={!bmi || status==="Underweight" || status==="Normal"|| status==="Overweight" } className="alert alert-danger container col-sm-4 text-center text-bold">
                {status}
        </div>
    </>
  )
}

export default BMI