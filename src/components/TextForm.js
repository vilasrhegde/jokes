import React,{useState} from 'react'

document.title="Text utilities"

function TextForm() {
const [text, setText] = useState("");
const [darkmode, setDark]=useState({
    color:'black',
    background:'#fff',
})

const handleUpClick = () => {
    let newText= text.toUpperCase();
    setText(newText);
}
const handleLowClick = () => {
    let newText= text.toLowerCase();
    setText(newText);
}
const handleClearClick = () => {
    let newText= '';
    setText(newText);
}
const handleExtraSpaces = ()=>{
    let newText = text.replace(/\s+/g, ' ').trim();
    setText(newText)
    }
const capitalize = () => {
        
        let firstchar = text.charAt(0); 
        let newText= firstchar.toUpperCase();
        setText(newText+text.slice(1)); 

}
const copyText=() =>{
    navigator.clipboard.writeText(text);
    alert("Text has been copied to clipboard!")

}
const italic=()=>{
    let font=()=>{
      let val=document.getElementById('mybox');
      val.style.fontStyle="italic";
    }
    font(); 
  }

const handleDark=() =>{
   if(darkmode.color=='white'){
    let dark={
        color:'black',
        background:'#fff',
   }    
    
   setDark(dark);
   }
   else if(darkmode.color=='black'){
    let dark={
        color:'white',
        background:'#000',
   }    
    
   setDark(dark);
   }
}



const handleOnChange= (event)=>{
    setText(event.target.value);
}
    return (

       <div style={darkmode} className='container-fluid mx-0' id='textform'>
            <h1 >Enter your sentence here :</h1>
            <button className='btn btn-success my-4 mx-1' style={darkmode} onClick={handleDark}>{darkmode.color=='black' ? "Darkmode" : "Lightmode"}</button>
            <div className="mb-3" style={darkmode}>
                
            <textarea className="form-control" value={text} id='mybox' style={darkmode} onChange={handleOnChange} rows="3"></textarea>
            <button disabled={text.length===0}  className='btn btn-danger my-4 '  onClick={handleClearClick}>Clear</button>
            <button disabled={text.length===0}  className='btn btn-outline-primary my-4 mx-2' onClick={handleUpClick}>To Uppercase</button>
            <button disabled={text.length===0} className='btn btn-outline-primary my-4 mx-2'  onClick={handleLowClick}>To Lowercase</button>
            <button disabled={text.length===0}  className='btn btn-outline-primary my-4 mx-2'  onClick={handleExtraSpaces}>Trim</button>
            <button disabled={text.length===0}  className='btn btn-outline-primary my-4 mx-2'  onClick={capitalize}>First Cap</button>
            <button  disabled={text.length===0} className='btn btn-outline-primary my-4 mx-2'  onClick={italic}><font className='font-italic'>italic</font></button>
            <button disabled={text.length===0}  className='btn btn-outline-primary my-4 mx-2'  onClick={copyText}>Copy</button>

            <h6 hidden={text.length===0}>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</h6>
            <h5 hidden={text.length===0}>Takes {parseFloat(0.008 * text.split("").length).toFixed(2)} Minutes to read</h5>
            <h3>Preview:</h3>
            <p translate="yes" readonly>{text.length>0 ? text : "Nothing to preview !"}</p>
            </div>
        </div>
    )
}

export default TextForm
