import React,{useState} from 'react'
import axios from 'axios'
import '../App.css'
function AxiosTicket() {
    let cancelToken;
    const[joke, setJoke]  = useState('');
    const [find,setFind] = useState('any')

    const onType = async (e) =>{
        const search = e.target.value ;
        setFind(search);
        if(typeof cancelToken != typeof undefined){
            cancelToken.cancel("Canceling previous request")
        }
            cancelToken=axios.CancelToken.source()

            const result=await axios.get(`https://v2.jokeapi.dev/joke/${find}?blacklistFlags=nsfw,religious,political,racist,sexist,explicit`,
            {cancelToken: cancelToken.token})
            // console.log(result.data);
            setJoke(result.data.setup);
            document.title=search;
    }
    return (
        <div>
               <>
        <div className='joke'>
            <h1><span>Find your type here, I mean joke</span></h1>
            <br />
        <marquee behavior="" direction="">Programming,Misc,Dark,Pun,Spooky</marquee>
        <input type="text" 
            onChange={onType}
            placeholder='search'
            value={find} />        
            <h2 hidden={joke==''}>{joke ? joke : "Hold on a sec.."}</h2>
        <footer>Don't worry nsfw,religious,political,racist,sexist,explicit contents are blacklisted. 
            <br /><br />
         &copy; {(new Date().getFullYear())}  Vilas Hegde All Rights are  Reserved 
         </footer>
        </div>
        
      </>
            
        </div>
    )
}

export default AxiosTicket
