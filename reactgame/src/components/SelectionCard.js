import React from 'react';
import gameSetUp from '../gameContent/Storylines';

const SelectionCard = ({SelectionImage,SelectionId,onClick}) => {
    //import gameSetup from stroyline.js
    //gameSetup.stories[ *current stroy used* ].images.(weapon/name/location).image
    const SelectionImages = [];
    //gameSetup.stories[ *current stroy used* ].images.(weapon/name/location).id
    const SelectionIds = [];
    
    //a for loop that picks each item from SelectionImages and SelectionIds and return as a set in a <div> to be rendered as a bootstrap card
    

    return (
        <ul className="card selection-card">
            <li key={x}>
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

export default SelectionCard