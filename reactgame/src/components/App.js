import React,{useState, useEffect} from 'react';
import Intro from './Intro'
import Nav from './Nav'
import Hints from './Hints'
import Background from './Background'
import gameSetUp from '../gameContent/Storylines';
import Selection from './Selection';
import Results from './Results'

const App = () => {
//this is for setting the page that is shown
const [userPage,setUserPage] = useState('Intro')

// this is for story we are playing
const [story,setStory] = useState('')
//this is for setting user selection
const [userChoice, setUserChoice]= useState(["weapon","name","location"])
   
    useEffect(() => {
        const newStory = gameSetUp.choose()
        setStory(newStory)
        
       
    },[])

    

    const decideWhatToShow = (userPage) => {
       
        if(userPage === 'Intro') {
            return ( 
                <Intro onClick={setUserPage}/>
            )
        }else if (userPage === "Background"){
            return (
                 <Background/>
            )
        }else if ((userPage === "HintsWeapon") || (userPage === "HintsLocation") || (userPage === "HintsName")){
            return (
                 <Hints story={story} userPage={userPage} setUserPage={setUserPage}/>
            )
        }else if ((userPage === "SelectWeapon") || (userPage === "SelectLocation") || (userPage === "SelectName")){
            return (
                 <Selection userChoice={userChoice} setUserChoice={setUserChoice} story={story} userPage={userPage}/>
            )
        }else if ((userPage === "Results")){
            return (
                <Results/>
            )
        }
    }
    
    return(
        <div >
           
            {userPage !== "Intro" ? <Nav userPage = {userPage} setUserPage = {setUserPage} /> : null}
            
            {decideWhatToShow(userPage)}
        </div>

    )
}

export default App