import React,{useState, useEffect} from 'react';
import Intro from './Intro'
import Nav from './Nav'
import Hints from './Hints'
import Background from './Background'
import gameSetUp from '../gameContent/Storylines';
import UserSelection from './Selection';

const App = () => {

const [userPage,setUserPage] = useState('Intro')
const [story,setStory] = useState('')
   
    useEffect(() => {
        const newStory = gameSetUp.choose()
        setStory(newStory)
       
    },[])

    

    const decideWhatToShow = (userPage) => {
       console.log(userPage)
        if(userPage==='Intro'){
            return  <Intro onClick={setUserPage}/>
        }else if (userPage==="Background"){
            return(
                 <Background/>
            )
        }else if ((userPage==="HintsWeapon") || (userPage==="HintsLocation") ||(userPage==="HintsName")){
            return(
                 [<Hints story={story} userPage={userPage}/>,
                 <UserSelection UserSelection={userPage}/>]
            )
        }

    }
    
    return(
        <div >
            {userPage!=="Intro"?<Nav userPage={userPage} setUserPage={setUserPage}/>:null}
            
           {decideWhatToShow(userPage)}
        </div>

    )
}

export default App