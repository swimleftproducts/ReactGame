import React,{useState} from 'react';
import Intro from './Intro'
import Nav from './Nav'
import Hints from './Hints'

const App = () => {

    const [userPage,setUserPage] = useState('Intro')

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