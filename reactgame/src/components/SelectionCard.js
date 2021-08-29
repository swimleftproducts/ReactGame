import React, { Component } from 'react';

//userChoice 
//[ weapon, name location]
// if userSelection = weapon then set [thislocation, not this, not this]
// if user seleciton = name then set  [notthis, butTHIS location, not this]

class SelectionCard extends Component {
   
    cardValueAndLocation(id,userPage,userChoice){
        
       switch (userPage) {
            case 'SelectWeapon':
                return  [id,userChoice[1],userChoice[2]];
               
            case 'SelectName':
                return [userChoice[0],id,userChoice[2]];
                
            case 'SelectLocation':
                return [userChoice[0],userChoice[1],id];
               
            default:
                break;
        }
      
    }

    render() {
        return (
            <ul className="card selection-card">
                <li onClick={()=>{
                    console.log(this.cardValueAndLocation(this.props.id,this.props.userPage,this.props.userChoice))
                    this.props.onClickHandler(this.cardValueAndLocation(this.props.id,this.props.userPage,this.props.userChoice))}}>
                    {/*SelectionImages */}
                    <img src={this.props.imgSrc} className="card-img-top" alt="..." />
                    <div className="card-body selection-card-text justify-content-center align-items-center">
                        {/* SeectionIds */}
                        <p className="card-text h1 text-white">{this.props.text}</p>
                    </div>
                </li>
            </ul>
        )
    }
    // Tracking User Interactions
    onClickChange(event) {
        //Selected choice will be added to userSelection[] from ./storyline.js
        console.log("You Selected This Item")
    }
}   

export default SelectionCard