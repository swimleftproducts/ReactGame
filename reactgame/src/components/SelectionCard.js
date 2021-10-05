import React, { Component } from 'react';

//userChoice 
//[ weapon, name location]
// if userSelection = weapon then set [thislocation, not this, not this]
// if user seleciton = name then set  [notthis, butTHIS location, not this]

class SelectionCard extends Component {

    cardValueAndLocation (id, imgSrc, text, userPage, userChoice, type) {

        switch (userPage) {
            case 'SelectWeapon':
                return [
                    {
                        imgSrc,
                        text,
                        id,
                        type
                    },
                    userChoice[1],
                    userChoice[2]];

            case 'SelectName':
                return [userChoice[0], {
                    imgSrc,
                    text,
                    id,
                    type
                }, userChoice[2]];

            case 'SelectLocation':
                return [userChoice[0], userChoice[1], {
                    imgSrc,
                    text,
                    id,
                    type
                }];

            default:
                break;
        }

    }

    isChosen (userChoice, type, id) {
        let active = false;

        userChoice.forEach((choice) => {
            if (choice.type === type) {
                if (choice.id === id) {
                    active = true;
                }
            }
        }
        );
        return active;

    }

    render () {
        return (
            <div className={ `${this.isChosen(this.props.userChoice, this.props.type, this.props.id) ? "selection-card-active" : ""} card selection-card col-xl-3 col-lg-4 col-sm-5 ` }
                onClick={ () => {
                    // const selectArray ={ }


                    this.props.onClickHandler(this.cardValueAndLocation(this.props.id, this.props.imgSrc, this.props.text, this.props.userPage, this.props.userChoice, this.props.type));
                } }>

                {/*SelectionImages */ }
                <div className="card-img-top selection-card-img">
                    <img src={ this.props.imgSrc } alt="..." />
                </div>
                <div className="card-body pb-0 mb-0">
                    {/* SeectionIds */ }
                    <p className="card-text h3 text-black text-center">{ this.props.text }</p>
                </div>
            </div>
        );
    }
    // Tracking User Interactions
    onClickChange (event) {
        //Selected choice will be added to userSelection[] from ./storyline.js
        console.log("You Selected This Item");
    }
}

export default SelectionCard;
