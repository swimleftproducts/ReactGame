import React, { Component } from 'react';
import gameSetUp from '../gameContent/Storylines';

//gameSetup.stories[ *current stroy used* ].images.(weapon/name/location).image
const SelectionImages = [];
//gameSetup.stories[ *current stroy used* ].images.(weapon/name/location).id
const SelectionIds = [];

//a for loop that picks each item from SelectionImages and SelectionIds and return as a set in a <div> to be rendered as a bootstrap card


class SelectionCard extends Component {

    render() {
        return (
            <ul className="card selection-card">
                <li onClick={this.onClickChange}>
                    {/*SelcgtionImages */}
                    <img src="./assets/2/weaponimages/3.jpeg" class="card-img-top" alt="..." />
                    <div className="card-body selection-card-text justify-content-center align-items-center">
                        {/* SeectionIds */}
                        <p className="card-text h1 text-white">The Gauntlet</p>
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