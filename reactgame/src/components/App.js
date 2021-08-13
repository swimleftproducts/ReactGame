import React,{useState, useEffect, useRef} from 'react';
import Intro from './Intro'
import Nav from './Nav'
import Hints from './Hints'
import gameSetUp from '../gameContent/Storylines'

const App = () => {

const [userPage,setUserPage] = useState('Intro')
const [story,setStory] = useState('')
   
    useEffect(() => {
        const newStory = gameSetUp.choose()
        setStory(newStory)
        console.log(newStory)

    },[])

    

    const decideWhatToShow = (userPage) => {
       
        if(userPage==='Intro'){
            return  <Intro onClick={setUserPage}/>
        }else if (userPage==="Hints"){
            return(

                 <Hints/>
            )
        }
    }
    
    return(
        <div >
            {userPage!=="Intro"?<Nav/>:null}
           {decideWhatToShow(userPage)}
        </div>

    )
}

export default App