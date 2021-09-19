import React, { Component } from 'react';

//userChoice 
//[ weapon, name location]
// if userSelection = weapon then set [thislocation, not this, not this]
// if user seleciton = name then set  [notthis, butTHIS location, not this]

class SelectionCard extends Component {
   
    cardValueAndLocation(id,imgsrc,text,userPage,userChoice){
        
       switch (userPage) {
            case 'SelectWeapon':
                return  [
                    {imgsrc,
                    text,
                    id
                    },
                    userChoice[1],
                    userChoice[2]];
               
            case 'SelectName':
                return [userChoice[0],{imgsrc,
                    text,
                    id
                    },userChoice[2]];
                
            case 'SelectLocation':
                return [userChoice[0],userChoice[1],{imgsrc,
                    text,
                    id
                    }];
               
            default:
                break;
        }
      
    }

    render() {
        return (
            <div className="card selection-card col-lg-3 col-md-3 col-sm-5 ">
                <div onClick={()=>{
                    const selectArray ={

                    }
                    console.log(this.cardValueAndLocation(this.props.id,this.props.imgSrc, this.props.text, this.props.userPage,this.props.userChoice))
                    this.props.onClickHandler(this.cardValueAndLocation(this.props.id,this.props.imgSrc, this.props.text ,this.props.userPage,this.props.userChoice))
                    }}>
                    {/*SelectionImages */}


                    <img src={this.props.imgSrc} className="card-img-top" alt="..." />

                    <div className="card-body pb-0 mb-0">
                        {/* SeectionIds */}
                        <p className="card-text h3 text-black">{this.props.text}</p>
                    </div>
                    <div class="card-footer text-muted">
                        {this.props.text}
                    </div>
                </div>
            </div>
        )
    }
    // Tracking User Interactions
    onClickChange(event) {
        //Selected choice will be added to userSelection[] from ./storyline.js
        console.log("You Selected This Item")
    }
}   

export default SelectionCard
{/*              */}

        // selection-card-text justify-content-center align-items-center 