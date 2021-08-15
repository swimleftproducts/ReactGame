import React from 'react';
import TextBox from './TextBox'
import ImageCard from './ImageCard'

const Hints = ({story,userPage,setUserPage}) => {
    const hint = story[`${userPage}`]
    const hint1 = story[`${userPage}1`]
    const hint2 = story[`${userPage}2`]
   
    
    const imgSrc= story.hintImage
    console.log(imgSrc)

    

    //this section contains the logic of what to show enxt when the hint "onward" button is clicked. This stuff is hard coded which is bad. I think it should pull from the menu info to know what to do.
    const nextClickHandler = () => {
        switch(userPage){
            case "HintsWeapon":
                setUserPage("HintsName")
            break;
            case "HintsName":
                  setUserPage("HintsLocation")
            break;
            case "HintsLocation":
                setUserPage("SelectWeapon")
            break;

            default:
                break;
        }
    }
    
    
    return (
        <div className="container" style={{"height":"80vh"}}>
            <br></br>
            <br></br>
            <ImageCard imgSrc={imgSrc}/>
            <TextBox hint={hint} hint1={hint1} hint2={hint2} nextClickHandler={nextClickHandler}/>
        </div>
    )
}

export default Hints

